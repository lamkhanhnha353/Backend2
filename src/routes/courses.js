


const express = require('express');
const router = express.Router();
const coursesController = require('../app/Controllers/CoursesControllers');


router.get('/:slug', coursesController.show)




module.exports = router;