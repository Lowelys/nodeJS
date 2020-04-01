import React, {useEffect, useState} from 'react';

import './App.css';

function App() {
 const [users, setUsers] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:7542/users").then(res => {
      res.data
    })
  }, []);
  return (
    <div>

    </div>
  );
}

export default App;
