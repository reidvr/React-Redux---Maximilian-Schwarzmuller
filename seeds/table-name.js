exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Table_Name').del()
    .then(function () {
      // Inserts seed entries
      return knex('Table_Name').insert([
        {
          id: 1,
          column_name_1: 'column 1 data',
          column_name_2: new Date(Date.now()),
          column_name_3: 123,
          column_name_4: 'column 4 data'
        },
        {
          id: 2,
          column_name_1: 'column 2 data',
          column_name_2: new Date(Date.now()),
          column_name_3: 456,
          column_name_4: 'column 4 data'
        },
        {
          id: 3,
          column_name_1: 'column 3 data',
          column_name_2: new Date(Date.now()),
          column_name_3: 789,
          column_name_4: 'column 4 data'
        }
      ])
    })
}
