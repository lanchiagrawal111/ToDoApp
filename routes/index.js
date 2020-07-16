const express=require('express');
const router=express.Router();

//import home controller
const homeController=require('../controller/home_controller');

//import addList controller
const addListController=require('../controller/addList_controller');

//import deletelists controller
const deleteListsController = require('../controller/deleteListItems_controller');


// goto home action of homeController
router.get('/',homeController.home);

// goto addList action of addListController
router.post('/add-list',addListController.addItem);

// goto deleteLists action of deleteListController
router.get('/delete-lists/:idArray',deleteListsController.deleteItems);
module.exports=router;