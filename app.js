const express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
const app = express(); //express를 실행하여 app object를 초기화 합니다.
const Promise = require('promise');
const mongoose = require('mongoose');
const config = require('./config/dbConfig');
const bodyParser = require('body-parser');


// router
const userRouter = require('./router/auth');
const boardRouter = require('./router/board');


// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) { // '/' 위치에 'get'요청을 받는 경우,
  res.send('Hello World!'); // "Hello World!"를 보냅니다.
});
let port = 3000; // 사용할 포트 번호를 port 변수에 넣습니다.

mongoose.Promise = global.Promise;

// CONNECT TO MONGODB SERVER
mongoose.connect(config.devDB.MONGO_URI)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));


app.listen(port, function(){ // port변수를 이용하여 3000번 포트에 node.js 서버를 연결합니다.
  console.log('server on! http://localhost:'+port); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});

app.use('/user',userRouter);
app.use('/board',boardRouter);


module.exports = app;
