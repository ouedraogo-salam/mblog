import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom';
import Connecter from './Components/Connecter';
import Connexion from './Components/Connexion';
import Contact from './Components/Contact';
import Service from './Components/Service';
import Home from './Components/Home';
import Chambre from './Components/Chambre';


class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
    }




  render() {
    return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/connexion' element={<Connexion/>} />
        <Route path='/connecter' element={<Connecter/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/chambre' element={<Chambre/>} />
      </Routes>
    </div> 
    )
  }
}

export default App