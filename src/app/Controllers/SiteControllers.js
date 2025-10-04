const { render } = require('sass');
const Course = require('../model/Course');

class SiteControllers{
    home(req, res, next){
        Course.find()
                .then( courses => {
                    courses = courses.map( course => course.toObject());
                    res.render('home.hbs', {courses})
                })
    }
    search(req, res){
        res.render('search.hbs');
    }
}

module.exports = new SiteControllers;













//  home(req, res, next){
//         Course.find() // trả về Promise
//             .then(courses => {
//                 res.json(courses);   }) // gửi dữ liệu về dạng JSON
        
//             .catch(err => {
//                 res.status(500).json({ message: 'Lỗi khi lấy dữ liệu', error: err });
//              });
//         // res.render('home.hbs');
// }