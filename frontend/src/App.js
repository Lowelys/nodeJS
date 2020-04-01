import React, {useEffect, useState} from 'react';
import './App.css';
import * as axios from "axios";

let arr = [ [], function () {

}];

let [users, setUsers] = arr;

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:7542/users").then(res => {
            setUsers(res.data);
        });
    }, []);
    return (
        <div>{users.map(u => <div>{u.name}</div>)}</div>
    );
}

export default App;
