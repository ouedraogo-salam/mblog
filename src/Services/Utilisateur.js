import axios from 'axios';


export default class UtilisateurService{
    constructor(){

    }

    getAll(){
        return axios.get("./data/utilisateur.json").then(response=>response.data)
    }
}
