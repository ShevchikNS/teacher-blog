import React from 'react';
import {useState} from "react";
import {Button, Card, CardActions, CardContent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import './TestComponent.css'
import {useDispatch, useSelector} from "react-redux";
import {changeAuthAction} from "../store/authReducer";

const TodoItemComponent = ({item, item2, item3, onDelete, onEdit}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [editedTestName, setEditedTestName] = useState(item)
    const [editedTestName2, setEditedTestName2] = useState(item)
    const authState = useSelector(state => state.auth.authState)
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()


    const changeTestName = (e) => {
        setEditedTestName(e.target.value)
    }
    const changeTestName2 = (e) => {
        setEditedTestName2(e.target.value)
    }
    // const enableEditMode = () => {
    //     setIsEditMode(true)
    // }
    const disableEditMode = () => {
        setIsEditMode(false)
        onEdit(editedTestName)
        onEdit(editedTestName2)

    }
    const handleKeyPressEdit = (event) => {
        if (event.key === 'Enter') {
            disableEditMode()
        }
    }
    if (currentUser.userId !== "1")
    {
        // dispatch(changeAuthAction(true))
    }
    else console.log("nice")

    return (

        <div className="testItems">
            {
                isEditMode ?
                    <>
                        {/*<TextField*/}
                        {/*    required*/}
                        {/*    className="testItem"*/}
                        {/*    id="outlined-required"*/}
                        {/*    label="Edit"*/}
                        {/*    multiline*/}
                        {/*    value={"Название теста: " + item + '\n' + "Ссылка на тест: " + item2}*/}
                        {/*    onChange={changeTestName}*/}
                        {/*    onKeyPress={(e) => handleKeyPressEdit(e)}*/}
                        {/*/>*/}
                        <TextField
                            required
                            className="testItem"
                            id="outlined-required"
                            label="Edit"
                            multiline
                            value={editedTestName}
                            onChange={changeTestName}
                            onKeyPress={(e) => handleKeyPressEdit(e)}
                        />
                        <TextField
                            required
                            className="testItem"
                            id="outlined-required"
                            label="Edit"
                            multiline
                            value={editedTestName2}
                            onChange={changeTestName2}
                            onKeyPress={(e) => handleKeyPressEdit(e)}
                        />
                    </>
                    :
                    <>

                        <Card sx={{ minWidth: 275 }} className="CardContent">
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {item}
                                </Typography>
                                {/*<Typography sx={{ mb: 1.5 }} color="text.secondary">*/}
                                {/*    adjective*/}
                                {/*</Typography>*/}
                            </CardContent>
                            <CardActions>
                                <Button size="small" target="_blank" href={item2}>Перейти по ссылке</Button>

                            </CardActions>

                            {
                                item3 === true ?
                                    <CardActions>
                                        <Button className="DeleteButton" id="DeleteButton" variant="contained"
                                                onClick={onDelete}>
                                            Delete
                                        </Button>
                                    </CardActions>
                                    : console.log()
                            }

                        </Card>
                        {/*<TextField*/}
                        {/*    disabled*/}
                        {/*    className="todoItem"*/}
                        {/*    id="outlined-disabled"*/}
                        {/*    multiline*/}
                        {/*    value={item2}*/}
                        {/*/>*/}
                    </>


            }
            <div className="DeleteEditButton">
                {
                    // isEditMode ?
                    //     <Button className="EditButton" variant="outlined" color="success" onClick={disableEditMode}>
                    //         Save
                    //     </Button>
                    //     :
                    //     <>
                    //         <Button className="EditButton" id="EditButton" variant="outlined"
                    //                 onClick={enableEditMode}>
                    //             Edit
                    //         </Button>

                        // </>


                }


            </div>


        </div>
    );
};

export default TodoItemComponent;