const express = require('express')
const port = 3000;
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

const router = require('./routes/serverRouter');



//cau hình handlebars
app.engine('hbs', engine({
    extname: '.hbs' // đổi đuôi file mặc định .handlebars -> .hbs
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


// sử dụng với method = post để hiện thị req.body
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded


// đường link sử dụng ảnh 
app.use(express.static(path.join(__dirname, 'public')));


// Định nghĩa route GET '/'



router(app);



// Lắng nghe port 3000
app.listen(port, () => {
  console.log(`App chạy tại http://localhost:${port}`)
})
