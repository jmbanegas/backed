// controllers/registrationController.js
class RegistrationController {
    constructor(database) {
        this.database = database;
    }

    register(req, res) {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required' });
        }

        this.database.saveUser({ name, email });
        res.status(201).json({ message: 'User registered successfully' });
    }
}

module.exports = RegistrationController;
