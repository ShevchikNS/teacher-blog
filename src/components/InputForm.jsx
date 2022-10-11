import React, {useState} from 'react';
import {db} from "../firebase";
import {collection, addDoc, deleteDoc, doc, getDocs} from "firebase/firestore"
import {useDispatch, useSelector} from "react-redux";
import {addTestsAction, editTestsAction, removeTestsAction} from "../store/testReducer";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import * as PropTypes from "prop-types";
import TodoItemComponent from "./TestComponent";

function TodoItem(props) {
    return null;
}

TodoItem.propTypes = {
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
};
const InputForm = () => {
    const [newTodo, setNewTodo] = useState('')
    const dispatch = useDispatch()
    const todoList = useSelector(state => state.tests.tests)

    const changeTodoName = (e) => {
        setNewTodo(e.target.value)
    }
    const handleKeyPressAdd = async (event) => {
        if (event.key === 'Enter') {
            await addTodoItem(newTodo)
        }
    }
    const addTodoItem = async (newTest) => {
        const test = {
            todoId: `${Date.now()}`,
            text: newTest,
        }
        await addDoc(collection(db, "tests"), test)
        dispatch(addTestsAction(test))
        setNewTodo('')
    }
    const EditTodo = async (indexToEdit, editTodo) => {
        console.log(editTodo + "!!!")
        dispatch(editTestsAction(indexToEdit, editTodo))
    }

    const removeTodoItem = async (test) => {
        dispatch(removeTestsAction(test.todoId))
        let currentTodo = "";
        const querySnapshot = await getDocs(collection(db, "tests"));
        querySnapshot.forEach((doc) => {
                if (`${doc.data().todoId}` === `${test.todoId}`) {
                    currentTodo = doc.id
                }
            }
        );
        await deleteDoc(doc(db, 'tests', `${currentTodo}`))
    }
    return (
        <div>
            <div className="TodoHeader">
                <TextField
                    id="layer2"
                    label="Todo"
                    variant="outlined"
                    value={newTodo}
                    multiline
                    size='medium'
                    onChange={changeTodoName}
                    onKeyPress={(e) => handleKeyPressAdd(e)}
                />
                <Button
                    variant="outlined"
                    id="AddButton"
                    onClick={async () => {
                        await addTodoItem(newTodo)
                    }}>
                    ADD
                </Button>
            </div>
            {
                todoList.length > 0 ?
                    <div className="allTodoList">
                        {
                            todoList.map((todoItem, index) =>

                                <TodoItemComponent
                                    onDelete={() => removeTodoItem(todoItem)}
                                    onEdit={(editTodo) => {
                                        EditTodo(index, editTodo)
                                    }}
                                    item={todoItem.text}
                                    key={index}>
                                </TodoItemComponent>
                            )
                        }
                    </div>
                    : console.log()
            }
        </div>

    );
};

export default InputForm;