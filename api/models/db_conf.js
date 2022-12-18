const db = require('better-sqlite3')('../db_double_or_nothing/identifier.sqlite', { verbose: console.log });

module.exports = db;