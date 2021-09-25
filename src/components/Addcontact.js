import React from 'react'

class Addcontact extends React.Component{
    state={
        name:'',
        email:''
    };
    add=(e)=>{
        e.preventDefault();
        if(this.state.name === '' || this.state.email===''){
            alert("All are mandatory")
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""})
    }
    render(){
        return(
            <form className="w-50 mx-auto row row-cols-sm-1" onSubmit={this.add}>
                    {/* name */}
                    <div className="mb-3">
                        <label htmlFor="name" className="ms-1">Name*</label>
                        <input type="text" 
                        className="form-control"
                        id="name" placeholder="Prasanna" 
                        autoCapitalize="on"
                        value={this.state.name}
                        onChange={(e)=>{this.setState({name:e.target.value})}}/>
                    </div>
                    {/*email*/}
                    <div className="mb-3">
                        <label htmlFor="email" className="ms-1">Email*</label>
                        <input type="email" 
                        className="form-control" 
                        id="name" placeholder="prasanna@gmail.com" 
                        value={this.state.email}
                        onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    </div>
                    <button className="btn btn-success d-block mx-auto">Add</button>
            </form>
           
        )
           
    }
}

export default Addcontact;