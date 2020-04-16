import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import * as axios from "axios";

let arr = [[], function () {

}];

let [users, setUsers] = arr;

function App() {
    const userNameRef = useRef(null);
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
        axios.post("http://localhost:7542/users", {name: userNameRef.current.value})
            .then(res => {
                getUsers();
            });
    };

    return (<>
            <input ref={userNameRef}/>
            <div><button onClick={creatUser}>Creat new</button></div>
            <div>{users.map(u => <div>{u.name}</div>)}</div>
        </>
    );
}

export default App;