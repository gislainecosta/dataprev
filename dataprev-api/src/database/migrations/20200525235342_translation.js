
exports.up = function(knex) {
    
return knex.schema.createTable('translation', function (table) {   
    table.increments();

    table.string('title').notNullable();
    table.string('email').notNullable();
    table.string('id_user').notNullable();
    table.string('translation_value').notNullable();

    table.foreign('id_user').references('id').inTable('user')

        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('translation');
};
