exports.getAllQuestions = async (req, res, next) => {
  try {
    const QuestionService = req.container.resolve(
      "QuestionService",
      new Set(),
      req.requestScope
    );
    const questions = await QuestionService.getAllQuestion();
    res.status(200).json(questions);
  } catch (error) {
    next(error);
  }
};

exports.addQuestion = async (req, res, next) => {
  try {
    const QuestionService = req.container.resolve(
      "QuestionService",
      new Set(),
      req.requestScope
    );
    const question = await QuestionService.addQuestion(req.body);
    res.status(201).json({ status: "success", question });
  } catch (error) {
    next(error);
  }
};
