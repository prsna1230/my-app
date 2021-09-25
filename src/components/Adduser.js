import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function Adduser(props) {
    let[user,setUser]=useState({
        username:'',
        email:'',
        dob:''
    })
    // tochange state of user
    function handleUser(event){
        let name = event.target.name;
        let value = event.target.value;
        setUser({...user,[name]:value})
    }
    // to submit form
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/users',user)
        .then(res=>{
            if(res.statusText==='Created'){
                props.setUserAddStatus(props.UserAddStatus+1)
                alert("User Added Successfully")
            }
            else{
                alert("Something Went Wrong")
            }
        })
        .catch(err=>console.error(err))
        
    }
    return (
        <form className="w-75 mx-auto bg-light mt-3" onSubmit={handleSubmit}>
            <h3 className="text-center">Add User</h3>
            {/* username */}
            <div className="mb-3">
                <label htmlFor="username">User-Name</label>
                <input type="text" 
                name="username" 
                id="username" 
                className="form-control"
                value={user.username}
                onChange={handleUser}/>
            </div>
            {/* email */}
            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" 
                name="email" 
                id="email" 
                className="form-control"
                value={user.email}
                onChange={handleUser}/>
            </div>
            {/* dob */}
            <div className="mb-3">
                <label htmlFor="dob">DOB</label>
                <input type="date" 
                name="dob" 
                id="dob" 
                className="form-control"
                value={user.dob}
                onChange={handleUser}/>
            </div>
            {/* submit */}
            <button type="submit" className="btn btn-success w-75 d-block mx-auto">Submit</button>
        </form>
    )
}

export default Adduser
