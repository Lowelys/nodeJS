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

    const creatUser = (e) => {
        axios.post("http://localhost:7542/users", {name: })
            .then(res => {
                getUsers();
            });
    };

    let onChange = (e) => {
        setValue(e.currentTarget.value)
    };
    return (<>
            <input ref={onChange} ref={inputRef}/>
            <div><button onClick={creatUser}>Creat new</button></div>
            <div>{users.map(u => <div>{u.name}</div>)}</div>
        </>
    );
}

export default App;