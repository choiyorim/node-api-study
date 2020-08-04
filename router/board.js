const express = require('express');
const router = express.Router();
const boardController = require('../controller/board');
const jwt = require('../utils/jwt');
// 게시글 생성
router.post(
  '/',
  jwt.jwtVerification, // jwt검증
  boardController.createBoard,
);

// 게시글 조회
router.get(
  '/:userId',
  jwt.jwtVerification,
  boardController.getBoard,
);

// 게시글 수정
router.patch(
  '/:userId/:boardId',
  jwt.jwtVerification,
  boardController.patchBoard,
);

//게시글 삭제
router.delete(
  '/:userId/:boardId',
  jwt.jwtVerification,
  boardController.deleteBoard,
);

module.exports = router;