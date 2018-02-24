import Project from '../lib/project';
const json = require('../../data/projects.json');

let initState = [];

const getNewestProject = function () {
    initState.sort((a, b) => {
        const aPublished = new Date(a.published);
        const bPublished = new Date(b.published)
        if (aPublished > bPublished) return -1;
        if (aPublished < bPublished) return 1;
        return 0;
    })
}

const fetchData = function(){
    json.map(project => {
        initState.push(new Project(project))
    })
    getNewestProject();
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