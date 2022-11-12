import React from "react";
import TableAction from './TableAction';


const TableRow = (props) => {
    return (
    
        <tbody className="table-group-divider">
            {
                props.studentList.map(
                    element =>(
                        <tr>
                            <td>{element.id}</td>
                            <td>{element.firstName}</td>
                            <td>{element.lastName}</td>
                            <td>{element.age}</td>
                            <td>
                                <TableAction/>
                            </td>
                        </tr>
                    )

                )
            }
        </tbody>
        
    );
};

export default TableRow;