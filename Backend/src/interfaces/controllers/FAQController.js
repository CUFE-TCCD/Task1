exports.addQA = async (req, res, next) => {
  try {
    const FAQService = req.container.resolve(
      "FAQService",
      new Set(),
      req.requestScope
    );
    
    const QA = await FAQService.createQA(req.body);

    res.status(201).json({
      status: "success",
      data: QA,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateQA = async (req, res, next) => {
  try {
    const FAQService = req.container.resolve(
      "FAQService",
      new Set(),
      req.requestScope
    );

    const { id } = req.params;
    const faq = await FAQService.updateQA(id, req.body);

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
