const db = require('better-sqlite3')('C:/Users/tloic/3D Objects/web_2_projet/db_double_or_nothing/identifier.sqlite', { verbose: console.log });

module.exports = db;