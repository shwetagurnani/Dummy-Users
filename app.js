const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');

const db=require('./util/database');

const app=express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//const formRoutes = require('./routes/form');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(formRoutes);
app.get('/',(req, res) =>{
    // data.fetchAll()
    // .then(data=>{
    res.render('form');
});

app.get('/p',function(req,res){
  db.query("UPDATE view SET VIEWS=VIEWS+1 WHERE id=1");
  //console.log();
});

app.listen(3000);


