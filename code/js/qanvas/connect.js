'use strict';

module.exports = function connect(child) {
	var positionCstr = require('../qanvas/position');
	var position = positionCstr().add(child);
	var ret = positionCstr().add(positionCstr().add(position));
	var point = require('../qanvas/resolve/point');
	var connection = require('../qanvas/resolve/connection');
	var joinUp;

	// increment a counter for each sibling and return the total
	function pointLength(point) {
		var ret = 0;
		while(point) {
			ret++;
			point = point.next;
		}
		return ret;
	}

	function last(point) {
		do {
			if (!point.next) {
				return point;
			}
		} while(point = point.next)
	}

	// for each position, resolve it and count the children. Return the highest number
	function getLongestChildSequence(currentPosition, resolution) {
		var currentPoint;
		var currentLength = 0;
		var length = 1;

		// inefficient but should work
		do {
			currentPoint = currentPosition.resolve(resolution, true);
			currentLength = pointLength(currentPoint);
			if (currentLength > length) {
				length = currentLength;
			}
		} while (currentPosition = currentPosition._next)

		return length;
	}

	function getPointInSequence(sourcePoint, proportion) {
		var len = pointLength(sourcePoint) - 1; // take away 1 as we are already on the first one
		var numberOfSteps = Math.floor(len * proportion);
		while(numberOfSteps) {
			sourcePoint = sourcePoint.next;
			numberOfSteps--;
		}
		var ret = point();
		ret.x = sourcePoint.x;
		ret.y = sourcePoint.y;
		return ret;
	}

	function createConnectionPointSequence(firstPosition, currentPosition, resolution, proportion) {
			var currentPoint = currentPosition.resolve(resolution, true);
			currentPoint = getPointInSequence(currentPoint, proportion);
			
			// hacky - if we're joining back up to the start we don't pass a first position hence this will be the last item
			if(firstPosition) {
				if (currentPosition._next) {
					last(currentPoint).next = createConnectionPointSequence(firstPosition, currentPosition._next, resolution, proportion);
				} else if(joinUp) {
					last(currentPoint).next = createConnectionPointSequence(null, firstPosition, resolution, proportion);
				}
			}

			return currentPoint;
	}

	// wrap the normal resolve in a connection object
	position.resolve = function(resolution) {

		var childSequence = child._child;

		// we need to know the longest child sequence so that in order to cover the whole range this number of connections is made
		var longestChildSequence = getLongestChildSequence(childSequence, resolution);
		if (longestChildSequence==1) {
			longestChildSequence = 0;
		}

		// each loop creates a connection
		var ret;
		var currentPosition = childSequence;
		var connectionPointSequence;
		var generatedConnection;
		var count = 0;
		do {
			// resolve the position to get its points sequence
			connectionPointSequence = createConnectionPointSequence(currentPosition, currentPosition, resolution, count/longestChildSequence);
			generatedConnection = connection(connectionPointSequence);
			
			// build the sequence which we're then going to wrap in a connection object
			if (ret) {
				last(ret).next = generatedConnection;
			} else {
				ret = generatedConnection;
			}
		} while (++count<=longestChildSequence);

		return ret;
	};
	
	ret.joinUp = function() {
		joinUp = true;
		return ret;
	};
	return ret;
}
