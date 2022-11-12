import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";


const DataTable = () => {

    const initStudent = [{ id: 0, 
                            firstName:  "fN",
                            lastName:   "lN",
                            age:        "age",
                         }];

    const [students, setStudent] = useState(initStudent);
    const studentList = [    
        { id: 1, firstName: "Jack", lastName: "Ninway",age: "44"},
        { id: 2, firstName: "Jonas", lastName: "Eira",age: "33"},
        { id: 3, firstName: "Julius", lastName: "Buchner",age: "22"}]

    useEffect( () => {
            setStudent(studentList)
        }, []
    );

    return (
        <div>
            <table className="table table-striped" border = "3">
                <TableHeader />
                <TableRow studentList={studentList} />
            </table>
        </div>
    );



};

export default DataTable;