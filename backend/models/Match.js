// models/Match.js
const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    game: { type: String, required: true },
    teams: { type: [String], required: true },
    status: { type: String, enum: ['upcoming', 'live', 'finished'], required: true },
    score: { type: [Number], default: [0, 0] },
    startTime: { type: Date, required: true },
    endTime: { type: Date },
});

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;
