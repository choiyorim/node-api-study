const boardService = require('../service/board');


const createBoard = async (req, res) => {
  try {
    const result = await boardService.createBoard(req.body);
    res.status(500).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
}

const getBoard = async (req, res) => {
  try {
    const {userId} = req.params;
    const result = await boardService.getBoards(userId);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
}

const patchBoard = async (req, res) => {
  try {
    const {boardId, userId} = req.params;
    const data = req.body;
    const result = await boardService.patchBoard(boardId, userId, data);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send('수정 못함');
    }
  } catch (error) {
    res.status(500).send(error);
  }
}


const deleteBoard = async (req, res) => {
  try {
    const {boardId, userId} = req.params;
    const result = await boardService.deleteBoard(boardId, userId);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports.createBoard = createBoard;
module.exports.patchBoard = patchBoard;
module.exports.getBoard = getBoard;
module.exports.deleteBoard = deleteBoard;