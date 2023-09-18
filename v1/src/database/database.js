const mysql = require('mysql');
const dbconnection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'p@ssw0rd145',
  database: 'schooldir',
});
dbconnection.connect();
