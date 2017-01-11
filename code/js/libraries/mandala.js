'use strict';

// generate from a wide range of possible mandalas
module.exports = function() {
	var shared = require('../shared')();
	return function() {
		var ret = shared.primitives.c();
		var proportions = shared.utils.permutation(8, .5)();
		var startProp = 0;
		var	endProp = 0;
		var tmp;
		for (var i=0; i<proportions.length; i++) {
			endProp = shared.utils.roundTo(startProp + proportions[i], 1)()
			ret.add(shared.compoundShapes.random(startProp, endProp)());
			startProp=endProp;
		}

		return ret;
	}
}
