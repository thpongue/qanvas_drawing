'use strict';

describe('position', function () {
	var position = require('../js/qanvas/position');
	var connect = require('../js/qanvas/connect');
	var library = require('../js/libraries/unitTest')();
	var pointToString = require('../js/qanvas/pointToString');

	describe('connecting single points', function() {
		describe('connecting t and r', function() {
			compareStrings('expected connecting_t_to_r to be ', library.connecting_t_to_r.toString, 'xAbs:0,yAbs:-1 - xAbs:1,yAbs:0');
		});
		
		describe('connecting l and b', function() {
			compareStrings('expected connecting_l_to_b to be ', library.connecting_l_to_b.toString, 'xAbs:-1,yAbs:0 - xAbs:0,yAbs:1');
		});
	});

	describe('connecting one point to multiple other points', function() {
// we may be beyond testing using toString - not doing this yet		
//		describe('connecting b to l_t_r', function() {
//			compareStrings('expected connecting_b_to_l_t_r to be ', library.connecting_b_to_l_t_r.toString, 'xAbs:0,yAbs:1 - (xAbs:-1,yAbs:0 - xAbs:0,yAbs:-1 - xAbs:1,yAbs:0)');
//		});
	});

	function compareStrings(msgPrefix, str, expectedStr) {
		it(msgPrefix + expectedStr,  function() {
			expect(str).toBe(expectedStr);
		});
	};
});
