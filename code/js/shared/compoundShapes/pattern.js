'use strict';

module.exports = function pattern(startProportion, endProportion, count, toAdd) {
	var path = require('../../qanvas/path');
	var shared = require('../../shared')();

	return function() {
		var ret = shared.primitives.c();
		var rotateBy = shared.utils.incrementor(0, 1/count);
		var positionAndScale = function() {	
			var prop = endProportion - startProportion;
			var yCoord = startProportion + (prop/2);
			return shared.primitives.c().add(shared.primitives.c().y(yCoord).scale(prop/2).add(toAdd()));
		}
		var rot = shared.utils.rotation(rotateBy, positionAndScale);
		var rep = shared.utils.repeat(count, rot);
		ret.add(rep());
		return ret;
	}
};
