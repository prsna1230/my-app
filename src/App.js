import './App.css';
import React from 'react'
import {useState} from 'react'
import UserList from './components/UserList'
import Adduser from './components/Adduser';



function App() {
  let[userAddStatus, setUserAddStatus]=useState(0)
  return (
   <div className="container">
      <div className="row">
          <div className="col-sm-6">
            <Adduser
            userAddStatus={userAddStatus}
            setUserAddStatus={setUserAddStatus}/>
          </div>
          <div className="col-sm-6">
            <UserList
            userAddStatus={userAddStatus}
            setUserAddStatus={setUserAddStatus}/>
          </div>
        </div>
   </div>
  );
}

export default App;
