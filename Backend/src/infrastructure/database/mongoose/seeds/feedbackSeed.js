const mongoose = require('mongoose');
const Feedback = require('../models/FeedbackSchema');
const { v4: uuidv4 } = require('uuid');

const feedbackSeed = async () => {
  try {
    await Feedback.deleteMany();

    const feedbacks = [
      {
        _id: uuidv4(),
        userId: uuidv4(),
        eventId: uuidv4(),
        feedback: 'Great event, very informative.',
        type: true,
      },
      {
        _id: uuidv4(),
        userId: uuidv4(),
        eventId: uuidv4(),
        feedback: 'Not as expected, could be better.',
        type: false,
      },
      {
        _id: uuidv4(),
        userId: uuidv4(),
        eventId: uuidv4(),
        feedback: 'It was okay, nothing special.',
        type: true,
      },
    ];

    await Feedback.insertMany(feedbacks);
    console.log('Feedbacks seeded successfully');
  } catch (error) {
    console.error('Error seeding feedbacks:', error);
  }
};

module.exports = feedbackSeed;
