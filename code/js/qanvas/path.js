'use strict';

module.exports = function path(child) {
	var point = require('../qanvas/resolve/point');
	var positionCstr = require('../qanvas/position');
	var last = require('./last');
	var position = positionCstr().add(child);
	var ret = positionCstr().add(positionCstr().add(position));
	var joinUp;
	// wrap the normal resolve in a connection object
	position.resolve = function(resolution) {
		var ret = require('../qanvas/resolve/connection')(child.resolve(resolution));
		if (joinUp) {
			var end = last(ret.point);
			var link = point();
			link.x = ret.point.x;
			link.y = ret.point.y;
			end.next = link
		}
		return ret;
	}
	ret.joinUp = function() {
		joinUp = true;
		return ret;
	};
	return ret;
}
