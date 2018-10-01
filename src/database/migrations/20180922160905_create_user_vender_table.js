
exports.up = function(knex, Promise) {
  return knex
  .schema
  .createTable('users', (uservendorsTable)=>{
    // Add incremting primary key column
    uservendorsTable.increments();

    // Add data columns
    uservendorsTable.string('name').notNullable()
    uservendorsTable.string('email')
    uservendorsTable.string('password')
    uservendorsTable.string('address')
    uservendorsTable.string('cellphone')
    uservendorsTable.timestamps(true, true)

    return uservendorsTable
  })


};

exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('users')
};
