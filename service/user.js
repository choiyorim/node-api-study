const users = require('../lib/users');

const createUser = async (data) => {
  const createUser = new users(data);
  return await createUser.save();
};

const getUserPassword = async (email) => {
  return users.findOne({
    email
  }).select('-_id password')
    .lean()
}

module.exports.createUser = createUser;
module.exports.getUserPassword = getUserPassword;