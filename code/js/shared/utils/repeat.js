'use strict';

module.exports = function repeat(count, cstr) {
	return function() {
		var shared = require('../../shared')();
		var primitives = shared.primitives;
		var ret = primitives.c();
		for (var i=0; i<count; i++) {
			ret.add(cstr());
		}
		return ret;
	}
}
