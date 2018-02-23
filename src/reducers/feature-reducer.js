import Project from '../lib/project';
const json = require('../../data/projects.json');

let initState = [];

const fetchData = function(){
    json.map(project => {
        initState.push(new Project(project))
    })
}();

const reducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    ///Actions go here
    /// case 'string':
    ///   return state + change
  default:
    return state;
  }
};

export default reducer;