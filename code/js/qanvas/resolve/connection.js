'use strict';

function connection(point) {
	return {
		point: point,
		next: null
	}
}
module.exports = connection;
