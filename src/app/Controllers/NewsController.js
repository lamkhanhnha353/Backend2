

class NewController{
    index(req, res){
       res.render('news')
    }
   
    show(req, res){
      res.send('hello abc')
    }
    
}

module.exports = new NewController;