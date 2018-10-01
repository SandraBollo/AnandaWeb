
exports.up = async function(knex, Promise) {
  return knex
  .schema
  .createTable('productos', (productTable)=>{
    // Add incremting primary key column

    productTable.increments('id')
    productTable.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('cascade')

    productTable.integer('product_type_id')
      .unsigned()
      .references('id')
      .inTable('product_types')
      .onDelete('cascade')
    // Add data columns
    productTable.integer('price')
    productTable.integer('units')
    productTable.integer('shipping_price')
    productTable.string('name_product').notNullable()
    productTable.string('description')
    productTable.string('image')

    return productTable
  })


};

exports.down = async function(knex, Promise) {
 await knex.schema.table("productos", (pTable) => {
   pTable.dropForeign("user_id")
   pTable.dropColumn("user_id")
   pTable.dropForeign("product_type_id")
   pTable.dropColumn("product_type_id")
 })


 return knex.schema.dropTableIfExists('productos')
};
