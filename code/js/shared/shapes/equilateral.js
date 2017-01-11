'use strict';

module.exports = function equilateral(numberOfSteps) {
	var shared = require('../../shared')();
	var primitives = shared.primitives;
	return function() {
		var ret = primitives.c();
		var current;
		var addMe;
		for (var i=0; i<numberOfSteps; i++) {
			// create the parent element which gets rotated
			current = primitives.c().add(primitives.t());
			current.rotation(i/numberOfSteps);
			// add to parent
			ret.add(current)
		}
		return ret;
	}
}
