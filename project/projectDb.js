const db = require('../data/db-config');
const mappers = require('../mappers/mappers');

module.exports = {
    get,
    insert
};

function get() {
    return db('project')
    .then(projects => projects.map(project => mappers.projectToBody(project)))
   
    
}

function insert(project) {
    return db("project").insert(project);
}