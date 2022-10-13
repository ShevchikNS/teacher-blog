// import {doc, updateDoc} from "firebase/firestore";
// import {db} from "../firebase";

const defaultState = {
    materials: []
}
const ADD_MATERIAL = "ADD_MATERIAL"
const REMOVE_MATERIAL = "REMOVE_MATERIAL"
const FETCH_MATERIAL = "FETCH_MATERIAL"


export const materialReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MATERIAL:
            return {...state, materials: [...state.materials, action.payload]}
        case REMOVE_MATERIAL:
            return {...state, materials: state.materials.filter((material) => material.testId !== action.payload)}

        case FETCH_MATERIAL:
            return {materials: action.payload}
        default:
            return state
    }
}
export const addMaterialsAction = (payload) => ({type: ADD_MATERIAL, payload})
export const removeMaterialsAction = (payload) => ({type: REMOVE_MATERIAL, payload})
export const fetchMaterials= (payload) => ({type: FETCH_MATERIAL, payload})