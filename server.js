const express = require('express')
const connectDB = require('./config/db')
const app = express()
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.get('/', (req, res) => res.json({ msg: 'Welcome man' }))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
