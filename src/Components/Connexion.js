import React, { Component } from 'react'

export class Connexion extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email:"",
      password:""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handlSubmit = this.handlSubmit.bind(this);
  }


  handleChange = (name, value)=>{
    this.setState({...this.state, [name] : value})
  }

  

  handlSubmit = ()=>{
    console.log(this.state);
  }
  render() {
    console.log("shake and bake")
    return (
      <div>
        <form className='w-25'>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input name="email" value={this.state.email} onChange={(e)=>this.handleChange("email", e.currentTarget.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input name="password" value={this.state.password} onChange={(e)=>this.handleChange("password", e.currentTarget.value)} type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="button" onClick={this.handlSubmit} className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Connexion