import React, { useEffect, useState } from 'react';
import RegisterListTable from '../RegisterListTable/RegisterListTable';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    const [registerList, setRegisterList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/registerListTable')
            .then(res => res.json())
            .then(data => setRegisterList(data))
    }, [])
    console.log(registerList);
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>    
            <h5 className="text-brand">Volunteer register list</h5>
            <RegisterListTable registerList={registerList} />
            </div>
        </div>

    );
};

export default Admin;