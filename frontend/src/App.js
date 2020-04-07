import React, {useEffect, useState} from 'react';
import './App.css';
import * as axios from "axios";

let arr = [[], function () {

}];

let [users, setUsers] = arr;

function App() {
    const [users, setUsers] = useState([]);
    const gerUsers = () => {
        axios.get("http://localhost:7542/users").then(res => {
            setUsers(res.data);
        });
    };


    useEffect(() => {
gerUsers();
    }, []);

    const creatUser = () => {
        axios.post("http://localhost:7542/users")
            .then(res => {
               gerUsers();
                });
    };
    return (<>
            <div>
                <button onClick={creatUser}>Creat new</button>
            </div>
            <div>{users.map(u => <div>{u.name}</div>)}</div>
        </>
    );
}

export default App;
