const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require('./models');
// -----------------------------------------------------------------





// -----------------------------------------------------------------
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));

