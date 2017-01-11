'use strict';

describe('position', function () {
	var position = require('../js/qanvas/position');
	var library = require('../js/libraries/unitTest')();
	var pointToString = require('../js/qanvas/pointToString');

	describe('basic positions', function() {
		describe('c', function() {
			compareStrings('expected c to be ', library.c.toString, 'xAbs:0,yAbs:0');
		});

		describe('l', function() {
			compareStrings('expected l to be ', library.l.toString, 'xAbs:-1,yAbs:0');
		});

		describe('r', function() {
			compareStrings('expected r to be ', library.r.toString, 'xAbs:1,yAbs:0');
		});

		describe('t', function() {
			compareStrings('expected t to be ', library.t.toString, 'xAbs:0,yAbs:-1');
		});

		describe('b', function() {
			compareStrings('expected b to be ', library.b.toString, 'xAbs:0,yAbs:1');
		});
	});

	describe('sequences', function() {
		describe('l_t_r', function() {
			compareStrings('expected l_t_r to be ', library.l_t_r.toString, 'xAbs:-1,yAbs:0 - xAbs:0,yAbs:-1 - xAbs:1,yAbs:0');
		});
	});

	describe('resolve', function() {
		describe('c', function() {
			compareStrings('expected c at a 300x300 resolution to be ', pointToString(library.c.resolve(300)), 'x:150,y:150');
			compareStrings('expected c at a 1000x1000 resolution to be ', pointToString(library.c.resolve(1000)), 'x:500,y:500');
		});

		describe('l', function() {
			compareStrings('expected l at a 300x300 resolution to be ', pointToString(library.l.resolve(300)), 'x:0,y:150');
			compareStrings('expected l at a 1000x1000 resolution to be ', pointToString(library.l.resolve(1000)), 'x:0,y:500');
		});

		describe('r', function() {
			compareStrings('expected r at a 300x300 resolution to be ', pointToString(library.r.resolve(300)), 'x:300,y:150');
			compareStrings('expected r at a 1000x1000 resolution to be ', pointToString(library.r.resolve(1000)), 'x:1000,y:500');
		});

		describe('t', function() {
			compareStrings('expected t at a 300x300 resolution to be ', pointToString(library.t.resolve(300)), 'x:150,y:0');
			compareStrings('expected t at a 1000x1000 resolution to be ', pointToString(library.t.resolve(1000)), 'x:500,y:0');
		});

		describe('b', function() {
			compareStrings('expected b at a 300x300 resolution to be ', pointToString(library.b.resolve(300)), 'x:150,y:300');
			compareStrings('expected b at a 1000x1000 resolution to be ', pointToString(library.b.resolve(1000)), 'x:500,y:1000');
		});

		describe('l_t_r', function() {
			compareStrings('expected l_t_r at a 300x300 resolution to be ', pointToString(library.l_t_r.resolve(300)), 'x:0,y:150 - x:150,y:0 - x:300,y:150');
			compareStrings('expected l_t_r at a 1000x1000 resolution to be ', pointToString(library.l_t_r.resolve(1000)), 'x:0,y:500 - x:500,y:0 - x:1000,y:500');
		});
	});

	describe('composition and reuse', function() {
		describe('l_t_r_b_t built using composition ie l_t_r.add(b).add(t) and illustrating re-use ie t used twice', function() {
			compareStrings('expected l_t_r_b_t to be ', library.l_t_r_b_t.toString, 'xAbs:-1,yAbs:0 - xAbs:0,yAbs:-1 - xAbs:1,yAbs:0 - xAbs:0,yAbs:1 - xAbs:0,yAbs:-1');
		});
	});

	describe('parentage', function() {
		describe('l_t_r added to l (ie an off-centre parent)', function() {
			compareStrings('expected off_centre_l_t_r to be ', library.off_centre_l_t_r.toString, 'xAbs:-2,yAbs:0 - xAbs:-1,yAbs:-1 - xAbs:0,yAbs:0');
		});
	});

	describe('multiple levels of children', function() {
		describe('4 levels of c followed by an r', function() {
			compareStrings('expected multiple_levels_of_children to be ', library.multiple_levels_of_children.toString, 'xAbs:0,yAbs:0 - xAbs:1,yAbs:0');
		});
	});

	describe('scaling', function() {
		describe('scaling applies to children (not the position we\'re setting it on', function() {
			describe('l.scaleX(.5)', function() {
				compareStrings('expected lScaled to be ', library.lScaled.toString, 'xAbs:-1,yAbs:0');
			});
		});

		describe('x scale', function() {
			describe('l_t_r added to parent with y scale set to .5', function() {
				compareStrings('expected xScaling to be ', library.xScaling.toString, 'xAbs:-0.5,yAbs:0 - xAbs:0,yAbs:-1 - xAbs:0.5,yAbs:0');
			});
		});

		describe('y scale', function() {
			describe('l_t_r added to parent with y scale set to .5', function() {
				compareStrings('expected yScaling to be ', library.yScaling.toString, 'xAbs:-1,yAbs:0 - xAbs:0,yAbs:-0.5 - xAbs:1,yAbs:0');
			});
		});

		describe('x and y scale', function() {
			describe('l_t_r added to parent with scale set to .5', function() {
				compareStrings('expected xAndYScaling to be ', library.xAndYScaling.toString, 'xAbs:-0.5,yAbs:0 - xAbs:0,yAbs:-0.5 - xAbs:0.5,yAbs:0');
			});
		});
		
		describe('multiple levels of scaling', function() {
			describe('l with 2 parents both scaled at .5', function() {
				compareStrings('expected multipleLevelsOfScaling to be ', library.multipleLevelsOfScaling.toString, 'xAbs:-0.25,yAbs:0');
			});
		});
	});

	describe('rotation', function() {
		describe('rotation only applies to children (not the position we\'re setting it on', function() {
			describe('l.rotation(.25)', function() {
				compareStrings('expected lRotated to be ', library.lRotated.toString, 'xAbs:-1,yAbs:0');
			});
		});

		describe('rotating parent affects child position', function() {
			describe('l_t_r added to parent with rotation set to .25', function() {
				compareStrings('expected rotation to be ', library.rotation.toString, 'xAbs:0,yAbs:-1 - xAbs:1,yAbs:0 - xAbs:0,yAbs:1');
			});
		});

		describe('multiple levels of rotation', function() {
			describe('l_t_r with 2 parents both rotated .25', function() {
				compareStrings('expected multipleLevelsOfRotation to be ', library.multipleLevelsOfRotation.toString, 'xAbs:1,yAbs:0 - xAbs:0,yAbs:1 - xAbs:-1,yAbs:0');
			});
		});
	});

	describe('scaling and rotation combined', function() {
		describe('scaled parent with 2 children - l and r - each rotated by 2. and each with t added as a child', function() {
			compareStrings('expected scaledAndRotated to be ', library.scaledAndRotated.toString, 'xAbs:-1,yAbs:0 - xAbs:0,yAbs:0 - xAbs:1,yAbs:0');
		});
	});

	function compareStrings(msgPrefix, str, expectedStr) {
		it(msgPrefix + expectedStr,  function() {
			expect(str).toBe(expectedStr);
		});
	};
});
