// server.js
const express = require('express');
const bodyParser = require('body-parser');
const RegistrationController = require('./controllers/registrationController');
const Database = require('./database/database');
const app = express();
const port = 3000;

app.use(bodyParser.json());
const database = new Database();
const registrationController = new RegistrationController(database);

app.post('/api/register', (req, res) => registrationController.register(req, res));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
