import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import ShowStudentDetails from "./ShowStudentDetails";
import TableAction from "./TableAction";

const DataTable = () => {
    const initialState = [
        { id: 1, firstName: "Jack", lastName: "Ninway",age: "52", birthdate: "1970-09-02", country: "Sweden", city: "Kumla"},
        { id: 2, firstName: "Jonas", lastName: "Eira",age: "33", birthdate: "1988-11-11", country: "Sweden", city: "Kumla"},
        { id: 3, firstName: "Julius", lastName: "Buchner",age: "22", birthdate: "1999-12-12", country: "Sweden", city: "Kumla"},
    ];

    const [studentList, setStudentList] = useState(initialState);
    const [showDetails, setShowDetails] = useState(false);
    const [student, setStudent] = useState(
        { id: 0, firstName:  "", lastName:  "",age: "",birthdate: "", country: "", city: ""}
    );       
    
    useEffect(() => {
        setStudentList(initialState);
      }, []);
  
const TableRow = (props) => {

    return (  
        <tbody >
        {
            props.list.map( 
                student =>(
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.age}</td>
                        <td>
                            <TableAction student={student}/>
                        </td>
                    </tr>
                )
            ) 
        }
        </tbody>
    );
};

const TableAction = (props) => {
    
    const studentDetail = () => {
        console.log("STUDENT:", props.student);
        setStudent(props.student);
        setShowDetails(true);

    };  

    return (
        <>
            <button className='btn btn-primary' onClick={studentDetail}>Details</button>

        </>
    );
};

const ShowStudentDetails = () => {
        if (showDetails) {
            return(    
            <div className="card">
                <div className="card-header bg-dark">
                    <h3 className="text-white">Student Info</h3>
                </div>
                <div className="card-body col-sm-5">
                    <h5 className="card-title">
                        {student.country} {student.city}
                    </h5>
                    <p className="card-text">ID: {student.id}</p>
                    <p className="card-text">Name: {student.firstName} {student.lastName}</p>
                    <p className="card-text">BirthDate: {student.birthdate}</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-danger" 
                            onClick={() => {setStudent({}); 
                                            setShowDetails(false)}}>Close</button>
                </div>    
            </div>
            )
        }      
    };
    return (
        <div>
            <table className="table table-striped" border = "3">
                <TableHeader />
                <TableRow list={studentList} />  
            </table>
            <br/><br/>
                <ShowStudentDetails student={student}/>

        </div>
    );
};
export default DataTable;