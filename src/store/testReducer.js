import {doc, updateDoc} from "firebase/firestore";
import {db} from "../firebase";
import {editTodoFunc} from "../utils/getTodoIdFromFirebase";

const defaultState = {
    tests: []
}
const ADD_TEST = "ADD_TEST"
const REMOVE_TEST = "REMOVE_TEST"
const EDIT_TEST = "EDIT_TEST"


export const testReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TEST:
            return {...state, tests: [...state.tests, action.payload]}
        case REMOVE_TEST:
            return {...state, tests: state.tests.filter((todo) => todo.todoId !== action.payload)}
        case EDIT_TEST:
            return {
                ...state, tests: state.tests.map((todo, index) => {
                    if (index === action.payload) {
                        editTodoFunc(todo.todoId).then(r => {
                            const data = {
                                text: action.newTodo
                            };
                            const docRef = doc(db, "tests", r)
                            updateDoc(docRef, data)
                                .then(docRef => {
                                    console.log("Value of an Existing Document Field has been updated");
                                })
                                .catch(error => {
                                    console.log(error);
                                })
                        });
                        return {
                            todoId: todo.todoId,
                            text: action.newTodo,
                            userId: todo.userId,
                            folderId: todo.folderId
                        }
                    }
                    return todo
                })
            }
        default:
            return state
    }
}
export const addTestsAction = (payload) => ({type: ADD_TEST, payload})
export const removeTestsAction = (payload) => ({type: REMOVE_TEST, payload})
export const editTestsAction = (payload, newTodo) => ({type: EDIT_TEST, payload, newTodo})
