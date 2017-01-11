'use strict';

module.exports = function permutation(iterations, proportion) {
	return function() {
		var shared = require('../../shared')();
		var randomNumber = shared.utils.randomNumber;
		var roundTo = shared.utils.roundTo;

		var ret = [];
		var max, current;
		var min = .1;
		var remaining = 1;
		for(var i=0; i<iterations && remaining>0; i++) {
			// don't allow us to exceed max
			max = remaining > proportion ? proportion : remaining;
			current = roundTo(randomNumber(min,max)(),1)();
			ret.push(current);
			remaining = roundTo(remaining - current, 1)();
		}

		if (remaining > 0) {
			ret[ret.length-1] = roundTo(ret[ret.length-1] + remaining, 1)();
		}
		
		// shuffle array so that we don't favour the ones at the start if the proportion passed was greater than 1/count
		for (var i = ret.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = ret[i];
				ret[i] = ret[j];
				ret[j] = temp;
		}

		return ret;
	}
}
