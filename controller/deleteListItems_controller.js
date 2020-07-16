const Todo = require("../models/todo");
module.exports.deleteItems=function (req,res) {
    
      // delete checked items from database
      let id=req.params.idArray.split(",");
      
      
      for(let i of id){
      Todo.findByIdAndDelete(i,function (err) {
          if(err){
              console.log('Error in deleting  listItems from database',err);
              return;
          }
          
          
      });


      }

      return res.redirect('back');
  


}
    

