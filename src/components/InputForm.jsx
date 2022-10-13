import React, {useEffect, useState} from 'react';
import {db} from "../firebase";
import {collection, addDoc, deleteDoc, doc, getDocs} from "firebase/firestore"
import {useDispatch, useSelector} from "react-redux";
import {addTestsAction, fetchTests, removeTestsAction} from "../store/testReducer";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import TodoItemComponent from "./TestComponent";
import '../style/InputForm.css'
import {addMaterialsAction, fetchMaterials, removeMaterialsAction} from "../store/materialReducer";


const InputForm = ({dbPath}) => {
    // const dbPath = dbPath1
    console.log(dbPath)
    const [newTest, setNewTest] = useState('')
    const [newTest2, setNewTest2] = useState('')
    const [authState, setAuthState] = useState(false)
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()


    const testsList = useSelector(state => state.tests.tests)
    const materialList = useSelector(state => state.materials.materials)

    useEffect(() => {
        let userTests = []
        if (currentUser.userId !== "1") {
            setAuthState(true)
        } else console.log()
        // declare the data fetching function
        const fetchData = async () => {
            const allTests = await getDocs(collection(db, `${dbPath}`))
            allTests.forEach((doc) => {
                    userTests.push(doc.data())
                }
            );
            if (dbPath === 'tests')
                dispatch(fetchTests(userTests))
            if (dbPath === 'materials')
                dispatch(fetchMaterials(userTests))

            // const data = await fetch('https://yourapi.com');
        }


        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [currentUser.userId, dbPath, dispatch])

    const changeTodoName = (e) => {
        setNewTest(e.target.value)
    }
    const changeTodoName2 = (e) => {
        setNewTest2(e.target.value)
    }
    const handleKeyPressAdd = async (event) => {
        if (event.key === 'Enter') {
            await addTestItem(newTest)
        }
    }
    const addTestItem = async (newTest) => {
        const test = {
            testId: `${Date.now()}`,
            text: newTest,
            text2: newTest2
        }
        await addDoc(collection(db, `${dbPath}`), test)
        if (dbPath === 'tests')
            dispatch(addTestsAction(test))
        if (dbPath === 'materials')
            dispatch(addMaterialsAction(test))
        setNewTest('')
        setNewTest2('')
    }

    const removeTodoItem = async (test) => {
        if (dbPath === 'tests')
            dispatch(removeTestsAction(test.testId))
        if (dbPath === 'materials')
            dispatch(removeMaterialsAction(test.testId))
            let currentTest = "";
        const querySnapshot = await getDocs(collection(db, `${dbPath}`));
        querySnapshot.forEach((doc) => {
                if (`${doc.data().testId}` === `${test.testId}`) {
                    currentTest = doc.id
                }
            }
        );
        await deleteDoc(doc(db, `${dbPath}`, `${currentTest}`))
    }


    return (
        <div id={dbPath}>
            {
                authState === true ?
                    <>
                        <div className="TodoHeader">
                            <TextField
                                className="TestName"
                                id="layer2"
                                label="Введите название"
                                variant="outlined"
                                value={newTest}
                                multiline
                                size='medium'
                                onChange={changeTodoName}
                                onKeyPress={(e) => handleKeyPressAdd(e)}
                            />
                            <TextField
                                id="layer2"
                                className="TestBody"
                                label="Введите ссылку"
                                variant="outlined"
                                value={newTest2}
                                multiline
                                size='medium'
                                onChange={changeTodoName2}
                                onKeyPress={(e) => handleKeyPressAdd(e)}
                            />
                            <Button
                                variant="outlined"
                                id="AddButton"
                                onClick={async () => {
                                    await addTestItem(newTest)
                                }}>
                                ADD
                            </Button>

                        </div>
                        <div className="allTodoList">
                            {
                                dbPath === 'tests' ?
                                    testsList.map((testsItem, index) =>

                                        <TodoItemComponent
                                            onDelete={() => removeTodoItem(testsItem)}
                                            // onEdit={(editTodo,editTodo2) => {
                                            //     EditTodo(index, editTodo, editTodo2)
                                            // }}
                                            item={testsItem.text}
                                            item2={testsItem.text2}
                                            item3={authState}
                                            key={index}>
                                        </TodoItemComponent>
                                    )
                                    :
                                    materialList.map((testsItem, index) =>

                                        <TodoItemComponent
                                            onDelete={() => removeTodoItem(testsItem)}
                                            // onEdit={(editTodo,editTodo2) => {
                                            //     EditTodo(index, editTodo, editTodo2)
                                            // }}
                                            item={testsItem.text}
                                            item2={testsItem.text2}
                                            item3={authState}
                                            key={index}>
                                        </TodoItemComponent>
                                    )
                            }
                        </div>
                    </>
                    :
                    <div className="allTodoList">
                        {
                            dbPath === 'tests' ?
                                testsList.map((testsItem, index) =>
                                    <TodoItemComponent
                                        onDelete={() => removeTodoItem(testsItem)}
                                        item={testsItem.text}
                                        item2={testsItem.text2}
                                        key={index}>
                                    </TodoItemComponent>
                                ) :
                                materialList.map((testsItem, index) =>
                                    <TodoItemComponent
                                        onDelete={() => removeTodoItem(testsItem)}
                                        item={testsItem.text}
                                        item2={testsItem.text2}
                                        key={index}>
                                    </TodoItemComponent>
                                )
                        }
                    </div>

            }
        </div>

    );
};

export default InputForm;