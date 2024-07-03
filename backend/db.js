const mysql = require("mysql2");

// Create the MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'email',
    port: 3307
});

// Attempt to connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err.stack);
        return;
    }
    console.log('Connected to MySQL database successfully!');
});

// Export the database connection
module.exports = db;
