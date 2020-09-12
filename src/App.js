import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Productitem from './components/Productitem';

function App() {
  return (
    <div>
     <Router>
      <Navbar />
      <Switch>
       <Route path="/"  component={Home}/>
      <Route path="/about"  component={About}/>
      <Route path="/contact"  component={Contact}/>
      <Route path="/product"  component={Product}/>
      <Route path="/product/:id"  component={Prodcutitem}/>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
