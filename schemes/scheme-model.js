const db = require('../data/db-Config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id })
    .first();
}

function findSteps(id) {
    return db
    .select('schemes.id',
            'schemes.scheme_name',
            'steps.step_number',
            'steps.instructions'
    )
    .from('schemes')
    .join('steps', 'schemes.id', 'steps.scheme_id')
    .where({ scheme_id: id })
    .orderBy('step_number');
}

function add(scheme) {
    return db('schemes')
    .returning(['id', 'scheme_name'])
    .insert(scheme)
    
}

function update(changes, id) {
    return db('schemes')
    .where({ id })
    .update({ scheme_name: changes }, ['id', 'scheme_name'])
}

function remove(id) {
    return db('schemes')
    .where({ id })
    .del()
}