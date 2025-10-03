

class SiteControllers{
    home(req, res){
        res.render('home.hbs');
    }

    search(req, res){
        res.render('search.hbs');
    }
}

module.exports = new SiteControllers;