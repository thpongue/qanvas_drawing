'use strict',

module.exports = {
	c: function() {
		return require('./primitives/c')();
	},
	l: function() {
		return require('./primitives/l')();
	},
	r: function() {
		return require('./primitives/r')();
	},
	t: function() {
		return require('./primitives/t')();
	},
	b: function() {
		return require('./primitives/b')();
	},
	tl: function() {
		return require('./primitives/tl')();
	},
	tr: function() {
		return require('./primitives/tr')();
	},
	bl: function() {
		return require('./primitives/bl')();
	},
	br: function() {
		return require('./primitives/br')();
	}
}
