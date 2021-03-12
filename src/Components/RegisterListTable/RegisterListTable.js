import React from 'react';

const RegisterListTable = ({registerList}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Registating Date</th>
                <th className="text-secondary" scope="col">Volunteer list</th>
               
                </tr>
            </thead>
            <tbody>
                {
                  registerList.map((registerList, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{registerList.name}</td>
                        <td>{registerList.email}</td>
                        <td>{registerList.checkIn}</td>
                        <td>{registerList[0] && registerList[0].title}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default RegisterListTable;