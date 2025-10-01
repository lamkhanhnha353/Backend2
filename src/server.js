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


app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa route GET '/'
app.get('/', (req, res) => {
  res.render('home.hbs');
})

app.get('/news', (req, res)=>{
  res.render('news.hbs');
})

// đường link sử dụng ảnh 


// Lắng nghe port 3000
app.listen(port, () => {
  console.log(`App chạy tại http://localhost:${port}`)
})
