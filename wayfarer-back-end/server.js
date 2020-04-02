const express = require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

const app = express();
const PORT = process.env.PORT || 3000;

// const db = require('./models');
const routes = require('./routes'); // Routes Module
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// -----------------------------------------------------------------
app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const requestedAt = new Date().toLocaleTimeString();
    const result = `${method} ${url} ${requestedAt}`;
    console.log(result);
  
    next();
});

// -----------------------------------------------------------------

app.use('/api/v1', routes.api);





// -----------------------------------------------------------------
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));

