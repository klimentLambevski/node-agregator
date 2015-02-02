var connectionString = {
    client: 'pg',
    connection: {
        host     : '127.0.0.1',
        post     : '5432',
        user     : 'postgres',
        password : 'kliment',
        database : 'node-agregator'
    }
};

var knex = require('knex')(connectionString);

var bookshelf = require('bookshelf')(knex);

var db = {
    bookshelf: bookshelf,
    knex: knex
};

module.exports = db;