const { Model } = require('objection');
const Password = require('../helpers/auth--objection-password.js')();
const _validateModelFields = require('../helpers/auth--objection-validateModelFields.js')



class User extends Password(Model) {

  static get tableName(){
    return 'users'
  }


  $validate(modelInstance){
    _validateModelFields(modelInstance)
    return modelInstance
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
