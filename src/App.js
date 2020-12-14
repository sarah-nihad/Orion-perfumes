import React,{Component} from 'react';
import Home from './component/Main/Home';
import { ParallaxProvider } from 'react-scroll-parallax';
// import { Button } from 'react-bootstrap';
import './assets/css/css.css';
import './assets/test.scss';
import {BrowserRouter,Route } from 'react-router-dom';
import Collection from './component/Section/Collection';
import Contact from './component/Section/Contact';
import Context from './assets/js/Context';

class App extends Component{

render() {
  return (

    <ParallaxProvider>
      <Context.Provider value={{
        value: this.state, action: {
     
        }
      }}>
        <div >
    <BrowserRouter>
 

    <Route exact path ='/' component={Home} />
    <Route  path ='/Collection' component={Collection} />
    <Route  path ='/Contact' component={Contact} />
    {/* <Route render={ ()=> <h2>not found</h2>} /> */}
  
  
   
  
    </BrowserRouter>
    </div>
    </Context.Provider>
      </ParallaxProvider>
  );
}
}
export default App;
