import React, { Component } from 'react';
import UtilisateurService from '../Services/Utilisateur';


class Connecter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      nom:"",
      prenom:"",
      email:"",
      password:"",
      confirmation:"", 
      confirmationError:false,
      
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.utilisateurService = new UtilisateurService();
  }

  handleChange = (name, value)=>{
    this.setState({...this.state, [name] : value});
  }

  

  handleSubmit = ()=>{
    this.utilisateurService.getAll().then(response=>{
      let result = response.find(data=>data.email === this.state.email);

      if(result){
        this.setState({...this.state, conflit : true});
      }else{
        response.push(this.state);
        console.log(response);
      }
    })

  }


  render() {
    return (
        <div>
          <form className='w-25'>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Nom</label>
              <input name="nom" value={this.state.nom} onChange={(e)=>this.handleChange("nom", e.currentTarget.value)} type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Prenom</label>
              <input name="prenom" value={this.state.prenom} onChange={(e)=>this.handleChange("prenom", e.currentTarget.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input name="email" value={this.state.email} onChange={(e)=>this.handleChange("email", e.currentTarget.value)} type="email" className="form-control"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input name="password" value={this.state.password} onChange={(e)=>this.handleChange("password", e.currentTarget.value)} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Confirmation</label>
              <input name="confirmation" value={this.state.confirmation} onChange={(e)=>this.handleChange("confirmation", e.currentTarget.value)} type="password" className="form-control" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Envoyer</button>
          </form>
      </div>
    )
  }
}

export default Connecter