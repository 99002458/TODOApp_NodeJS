const express = require('express');
const router = express.Router();

const todoController= require('../controllers/taskController');

//for displaying home page
router.get('/',todoController.home);
// router.get('/',todoController.editTask);
// router.post('/editTask',todoController.editTask);


//for tasks related functionality-add,delete
router.use('/tasks',require('./task'));
// router.use('/tasks/pending',require('./pending'));

module.exports = router;