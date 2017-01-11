'use strict';

module.exports = function randomEquilateral() {
	var min = 3;
	var max = 7;
	var shared = require('../../shared')();
	var numberOfPositions = min + Math.round(Math.random()*(max-min));
	return function() {
		return shared.shapes.equilateral(numberOfPositions)();
	}
}
