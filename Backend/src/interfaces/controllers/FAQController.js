exports.addQuestion = async (req, res, next) => {
  try {
    const FAQService = req.container.resolve(
      "FAQService",
      new Set(),
      req.requestScope
    );
    const faq = await FAQService.createQuestion(req.body);
    res.status(201).json({
      status: "success",
      data: faq,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateAnswer = async (req, res, next) => {
  try {
    const FAQService = req.container.resolve(
      "FAQService",
      new Set(),
      req.requestScope
    );

    const { id } = req.params;
    const { answer } = req.body;

    const faq = await FAQService.updateAnswer(id, answer);

    res.status(200).json({ status: "success", data: faq });
  } catch (error) {
    next(error);
  }
};

exports.getAllFAQ = async (req, res, next) => {
  try {
    const FAQService = req.container.resolve(
      "FAQService",
      new Set(),
      req.requestScope
    );
    const FAQs = await FAQService.getAllFAQ();
    res.status(200).json(FAQs);
  } catch (error) {
    next(error);
  }
};
