import React, { Component } from 'react';

class Chambre extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        numero : "",
        typeChambre : "",
        prix : "",
        image : ""
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleQuitter = this.handleQuitter.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
    }


    handleChange = (name, value)=>{
        console.log(name, value);
        this.setState({...this.state, [name] : value});
    }

    handleSubmit = ()=>{
        console.log(JSON.stringify(this.state));
        localStorage.setItem("listChambre", this.state);
    }

    handleQuitter = ()=>{
        console.log("shake and bake")
    }
    handleImageChange = (name, event)=>{
        console.log(event.currentTarget.value.split("\\")[2]);
        console.log(event);
        console.log(event.target.files)
    }


    render() {
        return (
        <div>
            <a className="btn btn-primary" data-bs-toggle="modal" href="#addModalToggle" role="button">Ajouter</a>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Numéro de Chambre</th>
                        <th scope="col">Type de Chambre</th>
                        <th scope="col">Prix de Chambre</th>
                        <th scope="col">Image Interne</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            <div className="modal fade" id="addModalToggle" aria-hidden="true" aria-labelledby="modalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalToggleLabel">Enregistrement de chambre</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="numero" className="form-label">Numéro</label>
                                    <input name="numero" value={this.state.numero} onChange={(e)=>this.handleChange("numero", e.currentTarget.value)} type="number" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="type" className="form-label">Type de la chambre</label>
                                    <input name="typeChambre" value={this.state.typeChambre} onChange={(e)=>this.handleChange("typeChambre", e.currentTarget.value)} type="text" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="prix" className="form-label">Prix de la chambre</label>
                                    <input name="prix" value={this.state.prix} onChange={(e)=>this.handleChange("prix", e.currentTarget.value)} type="number" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <input name="image" value={this.state.confirmation} onChange={(e)=>this.handleImageChange("image", e)} type="file" className="form-control" />
                                </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Envoyer</button>
                            <button type="button" onClick={this.handleQuitter} data-bs-dismiss="modal" className="btn btn-danger">Quitter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
  }
}

export default Chambre