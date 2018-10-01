const { Model } = require('objection')

class product extends Model {

  static get tableName(){
    return 'productos'
  }

  static get relationMappings(){
    const user = require('./users')
    const tipo = require('./product_type')
    return {
      user_product: {
        relation: Model.BelongsToOneRelation,
        modelClass: user,
        join : {
          from : 'productos.user_id',
          to: 'users.id'
        }
      },
      tipo_product: {
        relation: Model.BelongsToOneRelation,
        modelClass: tipo,
        join : {
          from : 'productos.product_type_id',
          to: 'product_types.id'
        }
      }
    }
  }
}


module.exports = product
