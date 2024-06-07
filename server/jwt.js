const jwt = require('jsonwebtoken');

const userId = 123; // Example user ID
const secretKey = 'secret-key'; // Replace with your actual secret key
const expiresIn = '1h'; // Token expiration time

const token = jwt.sign({ userId }, secretKey, { expiresIn });
console.log('Generated JWT:', token);