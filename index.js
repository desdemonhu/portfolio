'use strict';

let {createStore} = require('redux');

let initState = {};

const reducer = (state = initState, action) => {
  let {type, payload} = action;
  switch(type){
    ///Actions go here
    /// case 'string':
    ///   return state + change
  default:
    return state;
  }
};

let store = createStore(reducer);
///store.getState
///store.disptach({type:'', payload:})
store.subscribe(() => {
  console.log('__STATE__', store.getState());
});
