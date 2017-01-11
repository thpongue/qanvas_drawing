'use strict';

module.exports = function randomBoolean() {
	return function() {
		return Math.round(Math.random()) === 1;
	}
}
