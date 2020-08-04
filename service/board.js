const boards = require('../lib/board');
const createBoard = async (data) => {
  const crateBoard = new boards(data);
  return await crateBoard.save();
};

const getBoards = async (userId) => {
  return boards.find({
    userId
  }).lean()
}

const patchBoard = async (boardId, userId, data) => {
  return boards.findOneAndUpdate({
      _id: boardId,
      userId
    },
    {
      title: data.title,
      content: data.content
    },
    {upsert: false, new: true, useFindAndModify: false},)
}

const deleteBoard = async (boardId, userId) => {
  return boards.deleteOne({
    _id: boardId,
    userId
  })
}
module.exports.createBoard = createBoard;
module.exports.getBoards = getBoards;
module.exports.patchBoard = patchBoard;
module.exports.deleteBoard = deleteBoard;