const images = require('./images');

module.exports = images.sort((a,b) => {
    if (a.year === b.year) {
        return 1;
    }

    return b.year - a.year;
});;