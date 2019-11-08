const mysql=require('mysql2');


const pool=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'test',
    password:'Shweta@28'
});

pool.connect(function(err){
    if(err)
    throw err;
    console.log('Connected!');
}
);

module.exports=pool;