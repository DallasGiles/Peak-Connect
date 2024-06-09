const express = require('express');
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(express.json());

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send('Email and password are required');
    }
  
    try {
      // Check if the email already exists
      const result = await sequelize.query(
        'SELECT * FROM users WHERE email = $1',
        {
          bind: [email],
          type: sequelize.QueryTypes.SELECT,
        }
      );
  
      // Log the entire result for debugging
      console.log('Existing user check result:', result);
  
      const existingUsers = result[0];
  
      if (existingUsers && existingUsers.length > 0) {
        return res.status(400).send('Email already exists');
      }
  
      // Proceed with user registration
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log('Hashed password:', hashedPassword);
  
      const [insertResult] = await sequelize.query(
        'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
        {
          bind: [email, hashedPassword],
          type: sequelize.QueryTypes.INSERT,
        }
      );
      console.log('Registration result:', insertResult);
      res.status(201).json(insertResult);
    } catch (error) {
      console.error('Error during registration:', error);
      
      // Check for duplicate key error
      if (error.original && error.original.code === '23505' && error.original.constraint === 'users_email_key') {
        return res.status(400).send('Email already exists');
      }
  
      res.status(500).send('Server error');
    }
  });

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log('Received login request:', { email, password });

    const [users] = await sequelize.query(
      'SELECT * FROM users WHERE email = $1',
      {
        bind: [email],
        type: sequelize.QueryTypes.SELECT,
      }
    );

    console.log('Query result:', users);

    if (users.length > 0) {
      const user = users[0];
      console.log('User found:', user);

      const validPassword = await bcrypt.compare(password, user.password);
      console.log('Password validation result:', validPassword);

      if (validPassword) {
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Generated token:', token);
        return res.status(200).json({ token });
      } else {
        console.log('Invalid password');
        return res.status(401).send('Invalid credentials');
      }
    } else {
      console.log('User not found');
      return res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});