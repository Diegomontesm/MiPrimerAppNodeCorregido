//funcion que nos devolvera connexion amysql

const mysql = require('mysql');

module.exports = () =>{
    return mysql.createConnection({
            host: 'sql3.freemysqlhosting.net',
            user: 'sql3337826',
            password: 'ATIEDlTGGX',
            database: 'sql3337826'
    });
}