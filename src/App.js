import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Users from './components/Users';

function App() {

  const[users,setUsers] = useState([]);
  const[filterName, setFilterName] = useState('');
  const[filterEmail, setFilterEmail] = useState('');

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      // const persons = res.data;
      setUsers( res.data );
    })
    } 
  ,[]);

  console.log('users app', users);


  return (
    <div className="App">
            <h1 className="Table">Users Table</h1>
            <p>Search Name</p>
            <input id="filterName"
              className="filter"
              type="text"
              value={filterName}
              onChange={event => setFilterName(event.target.value)}
            />

            <p>Search Email</p>
            <input id="filterEmail"
              className="filter"
              type="text"
              value={filterEmail}
              onChange={event => setFilterEmail(event.target.value)}
            />

      <Users users={users} filterName={filterName} filterEmail={filterEmail}/>
    </div>
  );
}

export default App;
