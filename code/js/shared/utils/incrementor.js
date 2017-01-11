'use strict';

module.exports = function incrementor(start, increment) {
	var current = start;
	return function() {
		var ret = current;
		current += increment;
		return ret;
	}
}
