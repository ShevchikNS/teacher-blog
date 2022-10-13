import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import teacherPhoto from '../img/teacher.png'
import './Portfolio.css'


export default function FullWidthGrid() {
    return (
        <div className="portfolioBody">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <div className="circle-image">
                            <img src={teacherPhoto} alt=""/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h1>Юодайтис Лариса Анатольевна</h1>
                        <h2>Преподаватель дисциплины: Английский язык</h2>
                        <h2>Адрес электронной почты: ТЕСТ@yandex.ru</h2>
                        <h2>Образование, специальность:</h2>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio fugit illo illum ipsum magnam molestias natus nostrum, obcaecati perspiciatis quae quis repellat rerum sunt tempore. Earum et quidem suscipit!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae cupiditate ipsam magnam sit, voluptas? Architecto cum eaque ipsum iusto labore natus numquam placeat quod quos, repellendus, suscipit tempore voluptatibus.</h2>
                        <h2>Квалификация: ЧТО-ТО БУДЕТ ТУТ НАПИСАНО</h2>
                    </Grid>

                </Grid>
            </Box>
        </div>

    );
}
