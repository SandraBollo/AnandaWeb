const bcrypt = require("bcryptjs")

const RECOMMENDED_ROUNDS = 12

const vendorSeedData = [
  {id: 1, name: 'Steffi', email: 'sandy@micochinito.com', password: bcrypt.hashSync('pass15', RECOMMENDED_ROUNDS), address: 'Alvaro Obregon #17 col.valle de guadalupe', cellphone:"55243963" },
  {id: 2, name: 'Adrian', email: 'sandybb@micochinito.com', password: bcrypt.hashSync('pass14', RECOMMENDED_ROUNDS), address: 'Alvaro Obregon #17 col.valle de guadalupe', cellphone:"55243963" },
  {id: 3, name: 'Bertha', email: 'sandyab@micochinito.com', password: bcrypt.hashSync('pass16', RECOMMENDED_ROUNDS), address: 'Alvaro Obregon #17 col.valle de guadalupe', cellphone:"55243963" }
]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(vendorSeedData);
    });
};
