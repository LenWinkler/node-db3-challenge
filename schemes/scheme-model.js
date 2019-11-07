const db = require('../data/db-Config.js');

module.exports = {
    find,
    findById,
    findSteps
};

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id })
    .first();
}

function findSteps(id) {
    return db('steps').where({ scheme_id: id })
    .orderBy('step_number');
}