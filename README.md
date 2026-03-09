# Mini Challenge 2 — User Profile Update

## Setup

1. Install dependencies:
```
npm install
```

2. Set up your MongoDB Atlas connection:
   - Log in to https://cloud.mongodb.com
   - Go to your Cluster > Connect > Drivers
   - Copy your connection string (looks like: mongodb+srv://...)
   - Open mongodb.js and replace YOUR_ATLAS_CONNECTION_STRING_HERE with it

3. Start the server:
```
npm start
```

4. Seed the database with a test user:
```
http://localhost:3000/seed
```

5. Visit the edit profile page:
```
http://localhost:3000/edit-profile/juandc
```

---

## Your Task

Open `mongodb.js` and complete the two route handlers marked **TO DO**:

- **GET** `/edit-profile/:username` — fetch the user from MongoDB and render the form
- **POST** `/edit-profile/:username` — save the updated data back to MongoDB

The form (`views/partials/edit-profile.hbs`) and the User model (`models/User.js`) are already complete.

---

## File Structure

```
mini-challenge-2/
  |-- models/
  |     |-- User.js              ← Mongoose schema (GIVEN - do not modify)
  |-- views/
  |     |-- layouts/
  |     |     |-- main.hbs       ← HTML layout (GIVEN - do not modify)
  |     |-- partials/
  |           |-- edit-profile.hbs  ← Edit form (GIVEN - do not modify)
  |-- mongodb.js                 ← Server + routes (YOUR TASK)
  |-- package.json
```

---

## Hints

- Use `req.params.username` to get the username from the URL
- Use `User.findOne({ username: ... })` to fetch from MongoDB
- Use `User.findOneAndUpdate({ username: ... }, req.body)` to save changes
- Use `res.render('partials/edit-profile', { user })` to pass data to the template
- Use `res.redirect(...)` after saving
