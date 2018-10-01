const { Model } = require('objection')

class User extends Model {
  static get tableName(){
    return 'users'
  }

  static get relationMappings(){
    const producto = require('./product')

    return {
      user_productos: {
        relation: Model.HasManyRelation,
        modelClass: producto,
        join : {
          from : 'users.id',
          to: 'productos.user_id'
        }
      }
    }
  }
}
module.exports = User
