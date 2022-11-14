import {Table, Button} from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const[userList,setUserList] = useState([]);

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => setUserList(response.data))
      .catch(err => console.log(err));
  }

  // useEffect(() => {
  //    getData();
  // }, []);
  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Company</th>
          
        </tr>
      </thead>
      <tbody>
        {userList.map((user) => (
          <tr>
            <td>{user.id }</td>
            <td>{user.name }</td>
            <td>{user.email }</td>
            <td>{user.address.suite }, {user.address.street },{user.address.city }</td>
            <td>{user.id }</td>
            
          </tr>
        ))}
      </tbody>
    </Table>
    <Button onClick={getData}> Click to load data</Button>
    </>

  );
}

export default App;