const info = require('./information');
var cowsay = require('cowsay');

console.log(cowsay.say({
	text: `C'est ${info.name} de ${info.campus} campus`,
	e : "o<",
	T : "U "
}));