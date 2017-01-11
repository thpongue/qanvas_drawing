'use strict';

module.exports = function random(startProportion, endProportion) {
	var shared = require('../../shared')();
	return function() {
		// return random different ones:
		// expanding shapes
		// overlapping spiral
		return shared.compoundShapes.equilaterals(startProportion, endProportion)();
	}
}
