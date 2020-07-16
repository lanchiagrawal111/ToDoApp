//require collection
const Todo=require('../models/todo');

// home action 
module.exports.home=function (req,res) {
    
       // fetching 
     Todo.find({},function (err,lists) {
        
        if(err){
          console.log('Error in fetching contacts from database');
          return;
        }
        return res.render('home',{
        title:"To do app",
        todo_list:lists
       });
     });
}
    
