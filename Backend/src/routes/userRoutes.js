const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const validator = require('validator');



// Route to add a user
router.post("/users", async (req, res) => {
  // TODO: create a new user
  let {firstName, lastName, email, password, role} = req.body;

  const validation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!validation.test(password)) {
    return res.status(400).json({
      status: 'failed',
      message: 'Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character.'
    });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      status: 'failed',
      message: 'Invalid email format.'
    });
  }


  const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: 'failed',
        message: 'Email is already in use.'
      });
    }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    await User.create({
      _id:uuidv4(),
      firstName, 
      lastName, 
      email, 
      password: hashedPassword, 
      role
    })
    return res.status(201).json({
      status:'success',
      message:'User created successfully'
    })
  }
  catch(err)
  {
    return res.status(500).json({
      status:"failed",
      error: err.message
    })
  }
});

// Route to update a user
router.put("/users/:id", async (req, res) => {
  // TODO: update a user by id
  const userId = req.params.id;
  const { firstName, lastName, email, password, role } = req.body;
  const updateFields = {};
  if (firstName) updateFields.firstName = firstName;
  if (lastName) updateFields.lastName = lastName;
  if (email) {
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        status: 'failed',
        message: 'Invalid email format.'
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser._id.toString() !== userId) {
      return res.status(400).json({
        status: 'failed',
        message: 'Email is already in use by another user.'
      });
    }
    updateFields.email = email;
  }
  if (password) {
    const saltRounds = 10;
    updateFields.password = await bcrypt.hash(password, saltRounds);
  }
  if (role) updateFields.role = role;
  if (Object.keys(updateFields).length === 0) {
    return res.status(400).json({
      status: 'failed',
      message: 'No fields to update.'
    });
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateFields, {new: true});

    if (!updatedUser) {
      return res.status(404).json({
        status: 'failed',
        message: 'User not found.'
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'User updated successfully'
    });
  } catch (err) {
    console.error('Error updating user:', err);
    return res.status(500).json({
      status: 'failed',
      message: 'An error occurred while updating the user',
      error: err.message
    });
  }

});

// Route to delete a user
router.delete("/users/:id", async (req, res) => {
  // TODO: delete a user by id
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      status:'success',
      message:'User deleted successfully'
    })
  }
  catch(err) {
    return res.status(500).json({
      status:'failed',
      error:err.message
    })
  }
});

module.exports = router;
