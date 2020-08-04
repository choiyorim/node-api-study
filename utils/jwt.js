const jwt = require('jsonwebtoken');

// const secretOrPrivateKey = process.env.JWT_SECRET;
const secretOrPrivateKey = 'dkanrjskdoeir034@%#)($@_'

const getJwt = async (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        payload
      },
      secretOrPrivateKey,
      {
        expiresIn: '7d',
        subject: 'userInfo'
      }, (err, token) => {
        if (err) reject(err)
        else resolve({jwt: token})
      })
  })
}

//jwt 검증
const checkJWt = async (payload) => {
  return new Promise(
    (resolve, reject) => {
      jwt.verify(payload, secretOrPrivateKey,
        (err, decoded) => {
          if (err) reject(err);
          else resolve(decoded);
        })
    }
  )
}

const jwtVerification = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    const checkJwt = await checkJWt(token);
    if (checkJwt) {
      next();
    } else {
      res.status(404).send('유효하지 않은 jwt');
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports.getJwt = getJwt;
module.exports.checkJWt = checkJWt;
module.exports.jwtVerification = jwtVerification;