const express = require('express')
const port = 3000;
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

//cau hình handlebars
app.engine('hbs', engine({
    extname: '.hbs' // đổi đuôi file mặc định .handlebars -> .hbs
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));




// Định nghĩa route GET '/'
app.get('/', (req, res) => {
  res.render('home.hbs');
})

app.get('/news', (req, res)=>{
  console.log(req.query.q)
  res.render('news.hbs');
})


app.get('/search', (req, res)=>{

  res.render('search.hbs');
});

app.post('/search',(req, res)=>{
  res.render('search')
} )

// đường link sử dụng ảnh 
app.use(express.static(path.join(__dirname, 'public')));

// Lắng nghe port 3000
app.listen(port, () => {
  console.log(`App chạy tại http://localhost:${port}`)
})
