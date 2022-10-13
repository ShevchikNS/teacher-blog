import React from 'react';
import '../style/ForStudent.css'
import InputForm from "./InputForm";

const ForStudent = () => {
    const testsDbPath = 'tests'
    const materialsDbPath = 'materials'

    return (
        <div className="ForStudents">
            <div>
                <h1 className="TestsHeader">Тесты</h1>
                <InputForm
                    dbPath = {testsDbPath}/>
            </div>
            <div>
                <h1 className="MaterialsHeader">Материалы</h1>
                <InputForm
                    dbPath = {materialsDbPath}/>
            </div>
        </div>
    );
};

export default ForStudent;