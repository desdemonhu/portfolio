import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Projects from '../projects';
import Gallery from '../gallery';

class App extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/gallery' component={Gallery} />
          </div>
        </BrowserRouter>
      </div>
      )
  }
}

export default App
