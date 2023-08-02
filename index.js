const wilder = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : 'Hello I\'m ' + (wilder.name) + ' from ' + (wilder.campus),
    e : "oO",
    T : "U "
}));