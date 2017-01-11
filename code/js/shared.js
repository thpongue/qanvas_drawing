'use strict';

module.exports = function shared() {
	return {
		utils: require('./shared/utils'),
		primitives: require('./shared/primitives'),
		shapes: require('./shared/shapes'),
		compoundShapes: require('./shared/compoundShapes')
	}
}
