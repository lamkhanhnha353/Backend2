


const { render } = require('sass');
const Course = require('../model/Course');

class MeControllers{
  
    //[Get] courses/create
    stored_courses( req, res, next){
            Course.find({})
                     .then(courses => {
                        courses = courses.map(course => course.toObject());
                        return res.render('me/storedCourse', { courses });
                    })
                 .catch(next);
                    //[Post] courses/store 
    }
}

module.exports = new MeControllers;






