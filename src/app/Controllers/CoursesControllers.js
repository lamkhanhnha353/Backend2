

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
    //[Get] courses/create
    create( req, res, next){
       res.render('./courses/create.hbs')
    }
    //[Post] courses/store
    
    store(req, res, next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoID}/maxresdefault.jpg`;
    
        const course = new Course(formData);
        course.save()
            .then(() =>  res.redirect('/'))
            .catch(error => res.status(400).json({ message: 'Lưu thất bại!', error }));
      

    }
}

module.exports = new CoursesControllers;






