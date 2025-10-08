

const { render } = require('sass');
const Course = require('../model/Course');

class CoursesControllers{
  //courses/:slug
    show(req, res, next){
        // Course.findOne( {slug: req.params.slug})  //tìm và lặp qua một cái key trong cơ sở dữ liệu là slug
        //     .then( courses => {
        //         courses = courses.toObject();
        //         res.render('./courses/show.hbs', {courses})
        //     })
        //     .catch(next);

        Course.findOne({ slug: req.params.slug })
            .then(courses => {
                if (!courses) return res.status(404).send('Không tìm thấy khóa học');
                res.render('./courses/show.hbs', { courses: courses.toObject() });
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
    //[get] /courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then( courses => {
                    courses = courses.toObject();
                    res.render('./courses/idEdit.hbs', {courses})
                }
            )
            .catch(next);
        // res.render('./courses/idEdit.hbs');
    }
    update(req, res, next){
        Course.updateOne( {_id: req.params.id}, req.body)
            .then( () => res.redirect('/me/stored/courses'))
            .catch(next)
        
    }

    
    delete(req, res, next) {
            Course.deleteOne({ _id: req.params.id })
                .then(() => {
                res.redirect('/me/stored/courses?deleted=true');
                })
                .catch(next);
}
}

module.exports = new CoursesControllers;






