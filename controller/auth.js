const userService = require('../service/user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../utils/jwt');
const signUp = async (req, res) => {
  try {
    console.log('req', req);
    const {email, password} = req.body;
    await bcrypt.hash(password, null, null, function (err, hash) {
      // 성공하면 hash로 변환된 코드를 받을 수 있습니다
      userService.createUser({email, password: hash});
    });
    res.status(200).send('회원 가입 성공');
  } catch (error) {
    console.log(error);
  }
}

const signIn = async (req, res) => {
  try {
    const {email, password} = req.body;
    const userHashPassword = await userService.getUserPassword(email);
    if(userHashPassword) {
      await bcrypt.compare(password, userHashPassword.password, async function (err, rows) {
        if (err) {
          res.status(404).send(err);
        }
        if (rows) {
          const token = await jwt.getJwt({email});
          console.log('token', token);
          res.status(200).send(token);
        } else {
          res.status(403).send('잘못된 비밀번호');
        }
        // console.log('rowwww',rows);
      });
    }else{
      res.status(403).send('잘못된 이메일');
    }
    // res.status(200).send(userHashPassword);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports.signUp = signUp;
module.exports.signIn = signIn;