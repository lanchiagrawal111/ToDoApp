const Todo = require("../models/todo");




module.exports.addItem=function (req,res) {
   
   // console.log(req.body);
   // create list item in database
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function (err,newItem) {
        
        if(err){
            console.log('Error in creating a list:',err);
            return;
         }
         console.log('******',newItem);
         return res.redirect('back');
    });
}