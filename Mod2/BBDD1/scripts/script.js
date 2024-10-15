let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BBDD1'
});

connection.connect(function(err) {
    if (err) {
        console.log('Error connecting: ' + err);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

const consulta = 'SELECT * FROM Datos1';

connection.query(consulta, function(err, rows) {
    if (err) {
        console.log('Error en la consulta: ' + err);
        return;
    }
    console.log('Consulta correcta');
    console.log(rows);
});

connection.end();