
const express = require('express');
const connectDB = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


connectDB();

// Init Middleware
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(cors());
// Define Routes
app.use('/api', require('./routes/notes'));
app.use('/api', require('./routes/getnotes'));
app.use('/api', require("./routes/delete"))
app.use('/api', require("./routes/update"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
