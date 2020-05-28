
exports.up = function(knex) {
    return knex.schema.createTable('user', function (table) {
        
        table.increments('id').primary().unsigned();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.decimal('account_balance').notNullable();
        table.string('phone_number', 9).notNullable();
        table.string('plans').notNullable();
        table.string('cpf').notNullable();
        table.string('account').notNullable();
      });
};



exports.down = function(knex) {
    return knex.schema.dropTable('user')
};
