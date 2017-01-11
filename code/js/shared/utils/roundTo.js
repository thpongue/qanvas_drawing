'use strict';

module.exports = function roundTo(num,decimals) {
	return function() {
		return Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals);
	}
}
