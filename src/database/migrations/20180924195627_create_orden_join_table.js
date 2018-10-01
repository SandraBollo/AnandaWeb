exports.up = async function(knex, Promise) {
  return knex
  .schema
  .createTable('ordenes', (ordenTable)=>{
    // Add incremting primary key column
    ordenTable.increments();
    ordenTable.integer('producto_id')
      .unsigned()
      .references('id')
      .inTable('productos')
      .onDelete('cascade')

    // Add data columns
    ordenTable.string('name').notNullable()
    ordenTable.string('email')
    ordenTable.string('cellphone')
    ordenTable.string('address')
    ordenTable.integer('quantity')
    ordenTable.timestamps(true, true)

    return ordenTable
  })


};

exports.down = async function(knex, Promise) {
 await knex.schema.table("ordenes", (pTable) => {
   pTable.dropForeign("producto_id")
   pTable.dropColumn("producto_id")
 })

 return knex.schema.dropTableIfExists('ordenes')

};
