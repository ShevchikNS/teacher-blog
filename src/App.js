import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import StickyFooter from "./components/Footer";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <AppRouter/>
            <StickyFooter/>
        </BrowserRouter>
    );
}

export default App;
