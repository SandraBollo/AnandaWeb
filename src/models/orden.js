const { Model } = require('objection')

class orden extends Model {

  static get tableName(){
    return 'ordenes'
  }

  static get relationMappings(){
    const typeproducts = require('./product_type')

    return {
      productos_ordenes: {
        relation: Model.BelongsToOneRelation,
        modelClass: typeproducts,
        join : {
          from : 'ordenes.product_type_id',
          to: 'product_types.id'
        }
      }
    }
  }

}

module.exports = orden
