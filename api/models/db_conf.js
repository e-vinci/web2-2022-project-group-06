const db = require('better-sqlite3')('postgres://dshyguju:nyylwL1RF6qQk_qChj2Qw9o8K2E725qY@mel.db.elephantsql.com/dshyguju', { verbose: console.log });

module.exports = db;