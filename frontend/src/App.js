import React, {useEffect, useState} from 'react';
import './App.css';
import * as axios from "axios";

let arr = [[], function () {

}];

let [users, setUsers] = arr;

function App() {
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        axios.get("http://localhost:7542/users")
            .then(res => {
            setUsers(res.data);
        });
    };


    useEffect(() => {
getUsers();
    }, []);

    const creatUser = () => {
        axios.post("http://localhost:7542/users")
            .then(res => {
               getUsers();
                });
    };
    return (<>
            <div><button onClick={creatUser}>Creat new</button></div>
            <div>{users.map(u => <div>{u.name}</div>)}</div>
        </>
    );
}

export default App;
