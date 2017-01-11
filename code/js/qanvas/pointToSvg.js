'use strict';

module.exports = function pointToSvg(point, resolution) {
	// convert resolution to same minus 1 so that we can draw a 1px block
	function conv(val) {
		return Math.round((val / resolution) * (resolution-1));
	}

	function dot(point) {
		if (!point) {
			return '';
		}
		var startX = conv(point.x);
		var startY = conv(point.y) + .5;
		var endX = conv(point.x)+1
		var endY = startY;
		
		return 'M ' + startX + ',' + startY + ' L ' + endX + ',' + endY + (point.next ? ' ' + pointToSvg(point.next, resolution) : '');
	}

	function straight(connection, point) {

		if (!point.next) {
			if (connection.next) {
				return pointToSvg(connection.next, resolution);
			} else {
				return '';
			}
		}

		var startX = conv(point.x);
		var startY = conv(point.y);
		var endX = conv(point.next.x);
		var endY = conv(point.next.y);
		return 'M ' + startX + ',' + startY + ' L ' + endX + ',' + endY + (point.next ? ' ' + straight(connection, point.next) : '').trim();
	}

	function isConnection(point) {
		return !!point.point;
	}

	return isConnection(point) ? straight(point, point.point) : dot(point);
}
