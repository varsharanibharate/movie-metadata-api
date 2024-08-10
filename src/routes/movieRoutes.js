"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var movieController_1 = require("../controllers/movieController");
var router = (0, express_1.Router)();
router.get('/movies', movieController_1.getMovies);
router.get('/movies/:id', movieController_1.getMovie);
router.put('/movies/:id', movieController_1.updateMovieDetails);
exports.default = router;
