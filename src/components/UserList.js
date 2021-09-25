import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'

function UserList(props) {
    let[userDisplay, setUserdisplay]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res=>{
            setUserdisplay([...res.data])
        })
    },[props.userAddStatus])

    function deleteUser(id){
        axios.delete(`http://localhost:3000/users/${id}`)
        .then(res=>{
            if(res.statusText === 'OK'){
                alert('User Deleted');
                props.setUserAddStatus(props.UserAddStatus-1)
            }
        })
        .catch(err=>console.error(err))
    }

    return (
        <div className="text-center">
            <h3>User List</h3>
            <hr />
            <table className="table table-bordered">
                <thead>
                    <tr>
                    </tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Dob</th>
                </thead>
                <tbody>
                    {
                        userDisplay.map((userObj)=>{
                            return (
                                <tr key={userObj.id}>
                                    <td>{userObj.username}</td>
                                    <td>{userObj.email}</td>
                                    <td>{userObj.dob}</td>
                                    <td><button className="btn btn-danger" onClick={()=>deleteUser(userObj.id)}>X</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList
