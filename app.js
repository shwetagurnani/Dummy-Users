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

app.get('/',(req,res,next)=>{
   
       db.query('SELECT * FROM data ', function(error, results)
       {
           if(error)
           console.log(error);
           res.render('form',{
               prods:results
           });
           console.log(results[1].video)
     
    });
});



app.listen(3000);
