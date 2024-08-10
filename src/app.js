"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var movieRoutes_1 = require("./routes/movieRoutes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', movieRoutes_1.default);
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
