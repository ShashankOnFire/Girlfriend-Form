var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'bgwno6fklrrk4gfxkmhr-mysql.services.clever-cloud.com',
    user: 'uewmlhkjxb5g4hy0',
    password: 'wFdQmQMK0tRuqDaJdWJI',
    database: 'bgwno6fklrrk4gfxkmhr'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => { })