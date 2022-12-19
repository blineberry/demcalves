const results = require('./results');

const winners = results.map((r) => {
    return {
        year: r.year,
        winner: r.winner
    };
}).sort((a,b) => {
    return b.year - a.year;
});

module.exports = winners;