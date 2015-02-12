'use strict';

exports.up = function (knex, Promise) {
    return knex.schema.createTable('ads', function (table) {
        table.uuid('id');
        table.string('outer_id');
        table.string('title');
        table.string('latitude');
        table.string('longitude');
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('ads');
};
