import React from 'react';
import './App.css';

import Home from './Home';
import About from './About';
import Cats from './Cats';
import PageNotFound from './PageNotFound';
import Header from './Header';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    {/* Link is what you use instead of an anchor! */}
      <Link to='/'>Home</Link>
      <br></br>
      <Link to='/cats'>Cats</Link> 
      <br></br>
      <Link to='about'>About</Link>
      <br></br>
      <Link to='nowhere'>This goes nowhere</Link>
  
    <Header />
    <Switch>
      {/* <Home /> */}
      <Route exact path='/' component={Home}/>
      {/* <About /> */}
      <Route exact path='/cats' component={Cats}/>
      {/* <Cats /> */}
      <Route exact path='/about' component={About}/>
      <Route component={PageNotFound} />
    </Switch>
    </div>
  );
}

export default App;
