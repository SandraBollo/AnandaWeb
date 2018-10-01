exports.up = function(knex, Promise) {
  return knex
  .schema
  .createTable('product_types', (typeTable)=>{
    // Add incremting primary key column
    typeTable.increments();
    // Add data columns
    typeTable.string('tipo')
    return typeTable
  })


};

exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('product_types')
};
