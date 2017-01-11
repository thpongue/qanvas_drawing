'use strict';

module.exports = function grid(toAdd, numberPerSide) {
	var shared = require('../../shared')();
	var currentX, currentY;
	var currentPosition;
	var position = shared.primitives.tl();
	var increment = 2 / (numberPerSide*2);
	var scale = 1 / numberPerSide;
	var currentX = increment;
	var currentY;
	for (var i=0; i<numberPerSide; i++) {
		currentY = increment;
		for (var j=0; j<numberPerSide; j++) {
			currentPosition = shared.primitives.c().x(currentX).y(currentY).scale(scale).add(toAdd());
			position.add(currentPosition);
			currentY += increment*2;
		}
		currentX += increment*2;
	}

	return position;
}
