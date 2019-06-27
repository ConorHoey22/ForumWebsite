const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const app = express();

//Connect the Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running')); // Test API

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000; // Environment variable or port 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
