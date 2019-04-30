exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('Table_Name', function (table) {
    table.increments().primary()
    table.string('column_name_1')
    table.date('column_name_2')
    table.integer('column_name_3').defaultsTo(0)
    table.string('column_name_4')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('Table_Name')
}
