const mongoose = require('mongoose');
const Event = require('../models/EventSchema');
const { v4: uuidv4 } = require('uuid');

const eventSeed = async () => {
  try {
    await Event.deleteMany();

    const events = [
      {
        _id: uuidv4(),
        title: 'Job Fair',
        description: 'A large event with several companies recruiting new employees.',
        date: new Date('2023-09-20T10:00:00'),
        location: 'Hall A',
        createdBy: uuidv4(),
        capacity: 100,
      },
      {
        _id: uuidv4(),
        title: 'Research Day',
        description: 'Presentations and papers from various academic fields.',
        date: new Date('2023-09-21T10:00:00'),
        location: 'Hall B',
        createdBy: uuidv4(),
        capacity: 200,
      },
      {
        _id: uuidv4(),
        title: 'Orientation Day',
        description: 'New student orientation to introduce them to campus life.',
        date: new Date('2023-09-22T10:00:00'),
        location: 'Hall C',
        createdBy: uuidv4(),
        capacity: 150,
      },
    ];

    await Event.insertMany(events);
    console.log('Events seeded successfully');
  } catch (error) {
    console.error('Error seeding events:', error);
  }
};

module.exports = eventSeed;
