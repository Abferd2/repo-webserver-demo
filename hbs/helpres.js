var hbs = require('hbs');

//helpers
hbs.registerHelper('getYear', () => new Date().getFullYear());