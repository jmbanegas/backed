// database/database.js
class Database {
    constructor() {
        this.users = [];
    }

    saveUser(user) {
        this.users.push(user);
        console.log('User saved:', user);
    }
}

module.exports = Database;
