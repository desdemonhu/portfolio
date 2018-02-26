import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reporter from '../../middleware/reporter';
import combinedReducers from '../../reducers/combine-reducers';


import Home from '../home';
import About from '../about';
import Projects from '../projects';
import Gallery from '../gallery';

let store = createStore(combinedReducers, applyMiddleware(reporter));

class App extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
  }

  render(){
    return (
      <div>
        <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/gallery' component={Gallery} />
          </div>
        </BrowserRouter>
        </Provider>
      </div>
      )
  }
}

export default App
