import React from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import './MainPage.css'
import Slider from "./Slider";
import PhotoGallery from "./PhotoGallery";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';

import Box from "@mui/material/Box";
import StickyFooter from "./Footer";


const MainPage = () => {
    return (
        <div>
            <Box sx={{flexGrow: 1}} className="MainBoxStyle">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={10} className="mainBoxLvl2">
                        <div className="helloInfo">
                            <h1 className="hi1">Добро пожаловать на сайт!</h1>
                            {/*<span className="About">На моем сайте вы можете найти информацию обо мне, портфолио и мои наработки в области образования.</span>*/}
                        </div>
                        {/*<div>*/}
                        {/*    <Slider/>*/}
                        {/*</div>*/}
                        <div className="helloHeader">
                            <div className="helloText">
                                <p>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Рада приветствовать Вас на нашем сайте! Надеюсь,
                                    данный интернет-ресурс окажется небесполезным для Вас.
                                    Наш сайт - это место для интересного общения, несмотря на границы и расстояния.
                                    На страницах школьного сайта Вы можете почерпнуть много полезной информации :
                                </p>
                                <ul className="listAboutSchool"  type="disc">
                                    <li>познакомиться с основными вехами истории школы,</li>
                                    <li>узнать о традициях школы и о наших достижениях,</li>
                                    <li>ознакомиться с нормативными документами образовательного учреждения, графиком
                                        работы администрации.
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <PhotoGallery/>
                    </Grid>
                    <Grid item xs={12} md={2}>
                       <h1>Объявления</h1>
                    </Grid>

                </Grid>
            </Box>

        </div>
    );
};

export default MainPage;