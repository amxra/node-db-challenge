const db = require('../data/db-config');

module.exports = {
    get,
    insert
};

function get() {
    return db('resource');
}


function insert(resource) {
    return db("resource").insert(resource);
}