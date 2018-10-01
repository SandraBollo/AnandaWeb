const { Model } = require('objection')

class typeproducts extends Model {

  static get tableName(){
    return 'product_types'
  }

  static get relationMappings(){
    const producto = require('./product')

    return {
      productos: {
        relation: Model.HasManyRelation,
        modelClass: producto,
        join : {
          from : 'product_types.id',
          to: 'productos.product_type_id'
        }
      }
    }
  }

}

module.exports = typeproducts
