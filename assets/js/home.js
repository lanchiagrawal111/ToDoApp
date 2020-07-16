
    
    document.getElementById("remove-task").onclick=function(event){
        event.preventDefault();
        var idArray=[];
        var checkBoxes=document.querySelectorAll("input[type=checkbox]");

        for(let i of checkBoxes){
            if(i.checked){
                idArray.push(i.value);
               
            }
        }
        location.href = "http://localhost:8001/delete-lists/"+ idArray;

       

    };
//    function myFunction() {
       
//     let myChecbox= getElementsByclass('myChecbox');
//     let todo=[];
//     for (let i = 0; i < myChecbox.length; i++) {
//         let temp=document.getElementById("myInput").checked;
//         if(temp)
//          todo[i] = document.getElementById("myInput").value;
//     }
    

// }
// console.log(todo);
