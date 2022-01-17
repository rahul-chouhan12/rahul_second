const mysql = require('mysql');

//create here mysql conncection

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '',
    database: 'structure'
});


dbConn.connect(function(error){
    if(error) throw error;
    console.log('database connected sucessfully!!!');
})


module.exports = dbConn;