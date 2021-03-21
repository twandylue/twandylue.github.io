const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

// 因為此處req主要來自html(url方法)，故使用urlencoded
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug'); 

const db = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'laserlue0308',
    database : 'assignment' 
})

app.get('/home', (req, res) => {
    res.render('homepage');
})

app.post('/sign_in', (req, res) => {
    let {email} = req.body;
    let {password} = req.body;
    let sql = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}';`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result[0] == undefined) {
            // console.log(result[0]);
            res.render('homepage',{message: 'Email or Password is wrong!'});
        } else {
            res.redirect('/member');
        }
    })
    // console.log('test_signin');
})

app.post('/sign_up', (req, res) => {
    let {email} = req.body;
    let {password} = req.body;
    let sql = `SELECT * from user WHERE email='${email}';`
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result[0]) {
            // 已經有email註冊資料
            res.render('homepage',{message: 'Email has been used!'});
            // console.log(result[0]); // test
        } else {
            let sql = `INSERT INTO user (email, password) VALUES ('${email}', '${password}');`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                res.redirect('/member');
            })
        }
    })
    // console.log('test_signup');
})

app.get('/member', (req, res) => {
    // res.send("<h2>Log In Success!</h2>");
    res.render('welcome');
})

// 額外功能
// 查詢所有users
app.get('/alluser', (req, res) => {
    let sql = 'SELECT * FROM user'
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result);
            res.send(result);
        }
    })
})

// 額外功能
// 創建table
app.get('/createTable', (req, res) => {
    let sql = 'CREATE TABLE user(id int(10) NOT NULL AUTO_INCREMENT, email char(50), password char(50), PRIMARY KEY (`id`));'
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } else {
            // console.log(result);
            // res.send(result);
            res.send('<h2>Creating table success!</h2>');
        }
    })
})

app.listen(3000, () => {console.log('running at port: 3000')} );