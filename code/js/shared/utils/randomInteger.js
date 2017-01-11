'use strict';

module.exports = function randomInteger(min, max) {
	return function() {
		return min + Math.floor(Math.random()*(max-min+1));
	}
}
