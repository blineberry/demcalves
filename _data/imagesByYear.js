const images = require('./images');

const imagesByYear = {};

for (let i = 0; i < images.length; i++) {
    if (!imagesByYear[images[i].year]) {
        imagesByYear[images[i].year] = [];
    }

    imagesByYear[images[i].year].push(images[i]);
}

module.exports = imagesByYear;