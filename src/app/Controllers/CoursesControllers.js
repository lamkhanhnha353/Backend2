

const { render } = require('sass');
const Course = require('../model/Course');

class CoursesControllers{
  //courses/:slug
    show(req, res, next){
        Course.findOne( {slug: req.params.slug})  //tìm và lặp qua một cái key trong cơ sở dữ liệu là slug
            .then( courses => {
                courses = courses.toObject();
                res.render('./courses/show.hbs', {courses})
            })
            .catch(next);

      
    }
}

module.exports = new CoursesControllers;






