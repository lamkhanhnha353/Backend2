

const express = require('express');
const router = express.Router();
const meController = require('../app/Controllers/MeControllers');

router.get('/stored/courses', meController.stored_courses);





module.exports = router;