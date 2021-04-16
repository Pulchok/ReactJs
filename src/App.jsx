import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar'
import {Switch,Route, Redirect} from 'react-router-dom';
import Footer from './Footer';

const App=()=>{
  
    return(
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />;
            <h1>Welcome</h1>
            <Home />
        
         </Switch>
         <Footer />
        </React.Fragment>
    )
}
export default App