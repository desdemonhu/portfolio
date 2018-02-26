import Picture from '../lib/picture';
const json = require('../../data/gallery.json');

let initState = [];

const getNewestProject = function () {
    initState.sort((a, b) => {
        if (a.published > b.published) return -1;
        if (a.published < b.published) return 1;
        return 0;
    })
}

const fetchData = function () {
    json.map(picture => {
        initState.push(new Picture(picture))
    })
    getNewestProject();
}();

const reducer = (state = initState, action) => {
    let {type, payload} = action;
    switch(type) {
        ///
        ///Actions go here
        /// case 'string':
        ///   return state + change
        default: 
            return state;
    }
}

export default reducer;