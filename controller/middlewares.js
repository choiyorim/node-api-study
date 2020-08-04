// const jwt = require('../utils/jwt');
//
// const jwtVerification = async (req, res, next) => {
//   try {
//     const {userJwt} = req.jwt;
//     const checkJwt = jwt.checkJWt(userJwt);
//     if (checkJwt) {
//       next();
//     } else {
//       res.status(404).send('유효하지 않은 jwt');
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// }
//
// module.exports.jwtVerification = jwtVerification;