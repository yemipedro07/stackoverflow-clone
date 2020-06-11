const express = require('express');
const { body } = require('express-validator');

const questionController = require('../controllers/questions');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/questions', isAuth, questionController.getQuestions);

router.post('/question', isAuth, [
  body('title').trim().isLength({min: 5}),
  body('content').trim().isLength({min: 5})
], questionController.createQuestion);

router.patch('/vote', isAuth, questionController.voteQuestion);


module.exports = router;