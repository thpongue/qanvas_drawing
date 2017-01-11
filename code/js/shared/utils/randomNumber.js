'use strict';

module.exports = function randomNumber(min, max) {
	return function() {
		return min + (Math.random() * (max-min));
	}
}
