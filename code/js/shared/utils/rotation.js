'use strict';

module.exports = function rotation(rotateBy, cstr) {
	var shared = require('../../shared')();
	var primitives = shared.primitives;
	return function() {
		return primitives.c().rotation(rotateBy()).add(cstr());
	}
}
