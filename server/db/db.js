const config = require('../../knexfile').development
const database = require('knex')(config)

function getData(db = database) {
    return db('Table_Name').select()

}

function addData(data, db = database) {
    return db('Table_Name')
        .insert(data)
}

function updateData(updatedData, db = database) {
    return db('Table_Name')
        .where('id', '=', updatedData.id)
        .update({
            column_name_1: 'column 1 new data',
            column_name_2: new Date(Date.now)
        })
}

function deleteData(id, db = database) {
    return db('Table_Name')
        .where('id', '=', id)
        .del();
}

module.exports = {
    getData,
    addData,
    updateData,
    deleteData
}


