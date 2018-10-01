
const typeSeedData = [
    {id: 1, tipo: 'farmacia' },
    {id: 2, tipo: 'comestibles' },
    {id: 3, tipo: 'otros' }
]
  // Deletes ALL existing entries
  exports.seed = function(knex, Promise) {
  return knex('product_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('product_types').insert(typeSeedData);
    });
};
