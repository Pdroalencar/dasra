// controllers/matchController.js
const Match = require('../models/Match');

// Obter todas as partidas
exports.getAllMatches = async (req, res) => {
    try {
        const matches = await Match.find();
        res.json(matches);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao obter partidas' });
    }
};

// Adicionar uma nova partida
exports.addMatch = async (req, res) => {
    const { game, teams, status, startTime } = req.body;

    try {
        const match = new Match({ game, teams, status, startTime });
        await match.save();
        res.status(201).json(match);
    } catch (err) {
        res.status(400).json({ message: 'Erro ao adicionar partida' });
    }
};

// Atualizar o status de uma partida
exports.updateMatchStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const match = await Match.findById(id);
        if (!match) return res.status(404).json({ message: 'Partida não encontrada' });

        match.status = status;
        await match.save();
        res.json(match);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao atualizar a partida' });
    }
};
