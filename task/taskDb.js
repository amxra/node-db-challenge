const db = require('../data/db-config');

module.exports = {
    get,
    insert
};

function get() {
    return db('task as t')
    .join('project as p', 'p.id', '=', 't.project_id')
    .select('t.id','p.project_name', 'p.project_description', 't.task_description as task','t.completed')
}

function insert(task) {
    return db("task").insert(task);
}

