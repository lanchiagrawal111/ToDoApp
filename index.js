const express=require('express');
const app=express();
const port=8001;

//require mongoose,and Todo model
const mongoose=require('mongoose');
const db = require('./config/mongoose');
const Todo=require('./models/todo');

//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());
// include static files
app.use(express.static('assets'));



// for any route go to route folder and in index file
app.use('/', require('./routes'));

// listen on port
app.listen(port,function (err) {
    
    if(err){
      console.log(`Error in running the server: ${err}`);
      return;
    }

     console.log(`Server is running on port: ${port}`);
     
});
