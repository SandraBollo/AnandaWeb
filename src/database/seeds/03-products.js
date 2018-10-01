
const productSeedData = [
  {id: 1, user_id: 1, product_type_id: 1, price: 500, units: 20, shipping_price: 59, name_product: 'gomitas', description: 'Pero he limpiado la cenizay he abierto las ventanas y cerrado el sumidero y he comprado bombillas, libros, hachís y cerveza', image: 'http://www.digitalhealthstorymap.com/images/materials/Eaze_Vaporizer.jpg'  },
  {id: 2, user_id: 2, product_type_id: 3, price: 500, units: 20, shipping_price: 59, name_product: 'palomitas', description: 'Pero he limpiado la cenizay he abierto las ventanas y cerrado el sumidero y he comprado bombillas, libros, hachís y cerveza', image: 'http://www.digitalhealthstorymap.com/images/materials/Eaze_Vaporizer.jpg'  },
  {id: 3, user_id: 3, product_type_id: 2, price: 500, units: 20, shipping_price: 59, name_product: 'bites', description: 'Pero he limpiado la cenizay he abierto las ventanas y cerrado el sumidero y he comprado bombillas, libros, hachís y cerveza', image: 'http://www.digitalhealthstorymap.com/images/materials/Eaze_Vaporizer.jpg'  },
  {id: 4, user_id: 3, product_type_id: 1, price: 800, units: 10, shipping_price: 20, name_product: 'fingers', description: 'Pero he limpiado la cenizay he abierto las ventanas y cerrado el sumidero y he comprado bombillas, libros, hachís y cerveza', image: 'http://www.digitalhealthstorymap.com/images/materials/Eaze_Vaporizer.jpg'  }

  ]
  // Deletes ALL existing entries
  exports.seed = function(knex, Promise) {
  return knex('productos').del()
    .then(function () {
      // Inserts seed entries
      return knex('productos').insert(productSeedData);
    });
};
