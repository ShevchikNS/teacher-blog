import React from 'react';
import './Header.css'
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="Header">
            <div className="TeacherName">
                Юодайтис Лариса Анатольевна
            </div>
            <div className="TeacherSchool">
                <span>Государственное учреждение образования "Средняя школа № 38</span>
                <span> г. Гродно, ул. Вишневецкая, д. 14</span>

            </div>
            <Button sx = {{color: "white"}} onClick={() => navigate('/signin')}>
                Войти
            </Button>
        </div>
    );
};

export default Header;