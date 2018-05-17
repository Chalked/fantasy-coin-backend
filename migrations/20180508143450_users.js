
exports.up = function(knex, Promise) {
    return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.dateTime('user_created').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        }),

        knex.schema.createTable('collections', function(table) {
            table.increments('cid').primary();
            table.integer('user_id').notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE');
            table.integer('initial_investment').notNullable().defaultTo(0);
            table.decimal('current_USD', null).defaultTo(0);
            table.string('title').notNullable();
            table.dateTime('collection_created').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        }),

        knex.schema.createTable('currencies', function(table) {
            table.increments('currency_id').primary();
            table.integer('collection_id').notNullable()
                .references('cid')
                .inTable('collections')
                .onDelete('CASCADE');
            table.string('symbol').notNullable();
            table.string('name').notNullable();
            table.decimal('buy_rate', null).notNullable().defaultTo(0)
            table.decimal('coin_amount', null).notNullable().defaultTo(0)
            table.dateTime('post_date').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('currencies'),
        knex.schema.dropTable('collections'),
        knex.schema.dropTable('users')
    ]);
};
