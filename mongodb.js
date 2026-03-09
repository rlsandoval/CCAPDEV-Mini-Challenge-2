const express = require('express');
const { engine } = require('express-handlebars');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();

// -------------------------------------------------------
// Middleware
// -------------------------------------------------------
app.use(express.urlencoded({ extended: true }));

// -------------------------------------------------------
// View Engine Setup
// -------------------------------------------------------
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
}));
app.set('view engine', 'hbs');
app.set('views', './views');

// -------------------------------------------------------
// Database Connection
// -------------------------------------------------------
// Replace the string below with your MongoDB Atlas connection string.
// Atlas > Clusters > Connect > Drivers > Copy the connection string
// It looks like: mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/mini-challenge-2
const MONGO_URI = 'YOUR_ATLAS_CONNECTION_STRING_HERE';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// -------------------------------------------------------
// Seed Route (for testing - creates a sample user)
// Visit: http://localhost:3000/seed
// -------------------------------------------------------
app.get('/seed', async (req, res) => {
  await User.deleteMany({});
  await User.create({
    firstName: 'Juan',
    lastName:  'Dela Cruz',
    email:     'juan@example.com',
    phone:     '09171234567',
    birthdate: '1999-06-15',
    username:  'juandc',
    password:  'password123',
    street:    '123 Rizal Street',
    city:      'Manila',
    province:  'Metro Manila',
    zip:       '1000',
  });
  res.send('Seeded! Go to <a href="/edit-profile/juandc">/edit-profile/juandc</a>');
});

// -------------------------------------------------------
// TO DO: GET Route — Display the edit profile form
// -------------------------------------------------------
// Requirements:
// 1. Create a GET route for /edit-profile/:username
// 2. Use User.findOne() to find the user by username
// 3. Render the 'partials/edit-profile' view and pass the user object
//
// app.get('/edit-profile/:username', async (req, res) => {
//   // your code here
// });


// -------------------------------------------------------
// TO DO: POST Route — Save the updated profile
// -------------------------------------------------------
// Requirements:
// 1. Create a POST route for /edit-profile/:username
// 2. Use User.findOneAndUpdate() to update the user document
// 3. Redirect back to the edit profile page after saving
//
// app.post('/edit-profile/:username', async (req, res) => {
//   // your code here
// });


// -------------------------------------------------------
// Start Server
// -------------------------------------------------------
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
