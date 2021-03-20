const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

// 暫不需要
// require('dotenv').config();
// const { DB_HOST, DB_USER, DB_PASSWORD } = process.env;
// const db = mysql.createConnection({
//     host     : DB_HOST,
//     user     : DB_USER,
//     password : DB_PASSWORD,
//     database : 'assignment'  
// });

app.use(express.static('public'));
// app.use('/static',express.static('public'));

app.use(bodyParser.json()); // 有需要? 可能sql為JSON?

// 因為此處req主要來自html(url方法)，故使用urlencoded
app.use(bodyParser.urlencoded({extended: false}));

const db = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'laserlue0308',
    database : 'assignment' 
})

// Connect
db.connect((err) =>{
    if(err) {
        throw err;
    }
    console.log('MySql connected!');
    db.query( "SELECT * FROM user;", function (err, result) {
        if(err) {
            throw err;
        }
        console.log('MySql test!');
        // console.log(result[0]);
        // console.log(typeof result);
        // console.dir(result);
        // console.log(typeof body);
      });
})

// test
// Create DB
// app.get('/createdb', (req, res)=>{
//     let sql = 'CREATE DATABASE my_db';
//     db.query(sql, (err, result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created...');
//     })
// })

// 有很多疑問
// app.get('/', (req, res) => {
//     const name = req.username;
//     res.sendfile('index.html');
//     // 可用res.render 取代?
// })

// 未完成
// id的形式 在創建的時候要決定為char

app.post('/sign_in', (req, res) => {
    let email = req.body.email;
    // let {email} = req.body;
    let password = req.body.password;
    // let {password} = req.body;
    let sql = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}';`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result[0] == undefined) {
            // 有疑問
            // console.log(result[0]);
            res.send("Email or Password is wrong!");
        } else {
            // res.redirect('/member');
            res.send(result);
        }
    })
    // console.log('test_signin');
})

app.post('/sign_up', (req, res) => {
    let {id} = req.body;
    let {email} = req.body;
    let {password} = req.body;
    let sql = `INSERT INTO user (id, email, password) VALUES ('${id}', '${email}', '${password}');` // 有疑問 sql語法
    db.query(sql, (err, result) => {
        if (err) {
            // res.send("ID or email or password has been used.");
            res.send(err);
        } else {
            res.redirect('/member');
        }
    })
    // console.log('test_signup');
})

app.get('/member', (req, res) => {
    res.send("<h2>Log In Success!</h2>");
})

app.listen(3000, () => {console.log('running at port: 3000')} );