'use strict';

module.exports = function equilaterals(startProportion, endProportion, min, max) {
	var path = require('../../qanvas/path');
	var shared = require('../../shared')();
	var min = shared.utils.roundTo(5 + (13 * startProportion), 0)();
	var max = min + shared.utils.roundTo(40 * endProportion, 0)();
	return function() {
		var ret = shared.primitives.c();
		var count = shared.utils.randomInteger(min,max)();

		var minScaleX = .4;
		var maxScaleX = 1;
		var scaleX = minScaleX + (Math.random() * (maxScaleX - minScaleX));

		var minScaleY = .7;
		var maxScaleY = 1;
		var scaleY = minScaleY + (Math.random() * (maxScaleY - minScaleY));

		var flipScaleY = shared.utils.randomBoolean()();
		if (flipScaleY) {
			scaleY = -scaleY;
		}

		var randomEquilateral = shared.compoundShapes.randomEquilateral();
		
		// we need a constructor not the position
		function cstr() {
			var add = randomEquilateral();
			var ret = shared.primitives.c().scaleX(scaleX).scaleY(scaleY).add(add);
			ret = path(ret).joinUp();
			return ret;
		}
		var pattern = shared.compoundShapes.pattern(startProportion, endProportion, count, cstr)();
		ret.add(pattern);
		return ret;
	}
};
