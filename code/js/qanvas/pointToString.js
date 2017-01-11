'use strict';

module.exports = function pointToString(point) {
	var ret = 'x:'+point.x+',y:'+point.y
	ret += point.next ? ' - '+pointToString(point.next) : '';
	return ret;
}
