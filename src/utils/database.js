"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql2/promise");
var pool = mysql.createPool({
    host: 'localhost',
    user: 'movieappuser',
    database: 'moviedb',
    password: 'movieappuser123',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
exports.default = pool;
