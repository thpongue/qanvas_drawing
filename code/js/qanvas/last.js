'use strict';

module.exports = function last(point) {
	do {
		if (!point.next) {
			return point;
		}
	} while(point = point.next)
}
