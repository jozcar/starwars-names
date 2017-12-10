var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');
//CommonJs Systax
module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};