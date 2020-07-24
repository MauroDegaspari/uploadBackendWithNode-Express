
exports.up = function(knex) {
    return knex.schema.createTable('cadastro', function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('senha').notNullable();
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropDown('cadastro')
  
};
