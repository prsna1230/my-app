import React from 'react'
import {useState} from 'react'

function FormsDemo() {
    let[user,setUser]=useState({
        username:'',
        email:'',
        password:'',
        technologies:'',
        feedback:'',
        singing:false,
    });

    function handleUser(event){
        // console.log("name",event.target.name);
        // console.log("type",event.target.type);
        // console.log("value",event.target.value);
        let name=event.target.name;
        let value= event.target.type==="checkbox"?event.target.checked:event.target.value;
        setUser({...user,[name]:value});    //computed properties
    }

    function handleSubmit(e){
        e.preventDefault();
         console.log(user);
        // console.log(email);
    }

    return (
        <div>
            <h1 className="text-center">Add Contact</h1>
            <form className="w-50 mx-auto row row-cols-sm-1" onSubmit={handleSubmit}>
                    {/* name */}
                    <div className="mb-3">
                        <label htmlFor="username" className="ms-1">Name*</label>
                        <input type="text" 
                        name="username"
                        className="form-control"
                        id="username" placeholder="Prasanna" 
                        autoCapitalize="on"
                        value={user.username}
                        onChange={handleUser}
                    />
                    </div>
                    {/*email*/}
                    <div className="mb-3">
                        <label htmlFor="email" className="ms-1">Email*</label>
                        <input type="email" 
                        name="email"
                        className="form-control" 
                        id="email" placeholder="prasanna@gmail.com" 
                        value={user.email}
                        onChange={handleUser}
                    />
                    </div>
                    {/* password */}
                        <div className="mb-3">
                        <label htmlFor="password" className="ms-1">Password*</label>
                        <input type="password" 
                        name="password"
                        className="form-control" 
                        id="password"
                        value={user.password}
                        onChange={handleUser}
                    />
                    </div>
                    {/* select Element */}
                    <div className="mb-3">
                        <select name="technologies" id="technologies" className="form-select" value={user.technologies} onChange={handleUser}>
                            <option value="" disabled >Choose Technologies</option>
                            <option value="html">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JS">JS</option>
                        </select>
                    </div>
                    {/* check Box */}
                    <div className="mb-3">
                        <label>Select Your hobbies</label>
                        <div className="form-check">
                            <input type="checkbox" 
                            name="singing" 
                            id="sn" 
                            className="form-check-input"
                            onChange={handleUser}
                            checked={user.singing} />
                            <label htmlFor="sn">Singing</label>
                        </div>
                    </div>
                    {/* feedback */}
                    <div className="form-group">
                        <label htmlFor="fb">Feedback</label>
                        <textarea name="feedback" id="feedback"  rows="5" 
                        className="form-control mb-3"
                        value={user.feedback}
                        onChange={handleUser}></textarea>
                    </div>
                    <button type="submit" className="btn btn-success d-block mx-auto">Submit</button>
            </form>
        </div>
    )
}

export default FormsDemo
