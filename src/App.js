import React , {Component} from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Productlist  from "./Components/Productlist";
import Cart from "./Components/Cart";
import Details from "./Components/Details";
import  Notfound  from "./Components/notFound";
import Model from "./Components/Model"


class App extends Component {
 render(){
  return (
    <>
     <Router>
     <Navbar/>
     <Switch>
      <Route exact path="/" component={Productlist}/>
      <Route  path="/details" component={Details}/>
      <Route  path="/cart" component={Cart}/>
      <Route  component={Notfound}/>
     </Switch>
     <Model />
     </Router>
    </>
  );
 }
}

export default App;
