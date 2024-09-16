const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const validator = require('validator');
const validation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


/**
 * @swagger
 * /users:
 *   post:
 *     summary: Creates a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The user's first name
 *               lastName:
 *                 type: string
 *                 description: The user's last name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address
 *               password:
 *                 type: string
 *                 description: |
 *                   The user's password. It must contain:
 *                   - At least one lowercase character
 *                   - At least one uppercase character
 *                   - At least one digit
 *                   - At least one special character
 *                   - Minimum length of 8 characters
 *                 minLength: 8
 *                 pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
 *               role:
 *                 type: string
 *                 enum:
 *                   - president
 *                   - head
 *                   - vice_head
 *                   - vice_president
 *                   - administration
 *                   - member
 *                 default: member
 *                 description: The role of the user in the organization. Defaults to `member` if not provided.
 *           example:
 *             firstName: John
 *             lastName: Doe
 *             email: johndoe@example.com
 *             password: Password1!
 *             role: member
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal server error
 */

const authController = require("../controllers/authController");

router.post("/users/register", authController.signup);
router.post("/users/login", authController.login);
// Route to add a user
router.post("/users", async (req, res) => {
  // TODO: create a new user
  let {firstName, lastName, email, password, role} = req.body;

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


/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Updates an existing user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The user's first name
 *               lastName:
 *                 type: string
 *                 description: The user's last name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address
 *               password:
 *                 type: string
 *                 description: |
 *                   The user's password. It must contain:
 *                   - At least one lowercase character
 *                   - At least one uppercase character
 *                   - At least one digit
 *                   - At least one special character
 *                   - Minimum length of 8 characters
 *                 minLength: 8
 *                 pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
 *               role:
 *                 type: string
 *                 enum:
 *                   - president
 *                   - head
 *                   - vice_head
 *                   - vice_president
 *                   - administration
 *                   - member
 *                 description: The user's role in the organization
 *           example:
 *             firstName: Jane
 *             lastName: Smith
 *             email: janesmith@example.com
 *             password: Password1!
 *             role: member
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

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
    if (!validation.test(password)) {
      return res.status(400).json({
        status: 'failed',
        message: 'Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character.'
      });
    }
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


/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deletes a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
// Route to delete a user
router.delete("/users/:id", async (req, res) => {
  // TODO: delete a user by id
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.status(404).json({
        status: 'failed',
        message: 'User not found.'
      });
    }
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
