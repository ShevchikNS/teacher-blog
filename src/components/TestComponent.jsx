import React from 'react';
import {Button, Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import '../style/TestComponent.css'

const TodoItemComponent = ({item, item2, item3, onDelete}) => {
    return (
        <div className="testItems">
            {
                    <>
                        <Card sx={{ minWidth: 275 }} className="CardContent">
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {item}
                                </Typography>
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
                    </>
            }
        </div>
    );
};

export default TodoItemComponent;