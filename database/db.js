const mysql = require('mysql2');

/**
 * Método que configura un objeto conexión y lo regresa a quien lo solicite.
 * 
 * Instrucciones:
 * 
 * 1. Debes modificar tu información del "Password" de tu usuario Root en tu server
 * 2. Debes modificar el nombre de tu base de datos.
 */
function getConnection(){
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tu_password_aqui",
    database: "tu_bd_de_proyecto"
  });

  return connection;
}

module.exports = {getConnection};
