const mysql=require('mysql2');

const pool=mysql.createConnection({
    host:'sql12.freesqldatabase.com',
    user:'sql12311876',
    database:'sql12311876',
    password:'79q6hlbqC9',
    port:3306
});

pool.connect(function(err){
    if(err)
    throw err;
    console.log('Connected!');
}
);

module.exports=pool;