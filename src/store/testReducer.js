import {doc, updateDoc} from "firebase/firestore";
import {db} from "../firebase";
import {editTodoFunc} from "../utils/getTodoIdFromFirebase";

const defaultState = {
    tests: []
}
const ADD_TEST = "ADD_TEST"
const REMOVE_TEST = "REMOVE_TEST"
const EDIT_TEST = "EDIT_TEST"
const FETCH_TEST = "FETCH_TEST"


export const testReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TEST:
            return {...state, tests: [...state.tests, action.payload]}
        case REMOVE_TEST:
            return {...state, tests: state.tests.filter((test) => test.testId !== action.payload)}
        case EDIT_TEST:
            return {
                ...state, tests: state.tests.map((test, index) => {
                    if (index === action.payload) {
                        editTodoFunc(test.testId).then(r => {
                            const data = {
                                text: action.newTest
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
                            testId: test.testId,
                            text: action.newTest,
                            userId: test.userId,
                        }
                    }
                    return test
                })
            }
        case FETCH_TEST:
            return {tests: action.payload}
        default:
            return state
    }
}
export const addTestsAction = (payload) => ({type: ADD_TEST, payload})
export const removeTestsAction = (payload) => ({type: REMOVE_TEST, payload})
export const editTestsAction = (payload, newTest) => ({type: EDIT_TEST, payload, newTest})
export const fetchTests= (payload) => ({type: FETCH_TEST, payload})