const ordenSeedData = [
  {id: 1, producto_id: 1, name: 'Roberto', email: 'rob@gmail.com', cellphone: '5525325263', address: 'alvaro obregon col juearez', quantity: 200   },
  {id: 2, producto_id: 3, name: 'Roberto', email: 'rob@gmail.com', cellphone: '5525325263', address: 'alvaro obregon col juearez', quantity: 200   },
  {id: 3, producto_id: 2, name: 'Roberto', email: 'rob@gmail.com', cellphone: '5525325263', address: 'alvaro obregon col juearez', quantity: 200   }
]
  // Deletes ALL existing entries
  exports.seed = function(knex, Promise) {
  return knex('ordenes').del()
    .then(function () {
      // Inserts seed entries
      return knex('ordenes').insert(ordenSeedData);
    });
};
