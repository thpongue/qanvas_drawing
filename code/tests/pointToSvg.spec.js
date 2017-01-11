'use strict';

// note that the paths we're testing for assume that we're using a path with a 1px stroke and a length of 1px
describe('pointToSvg', function () {
	var pointToSvg = require('../js/qanvas/pointToSvg');
	var library;

	beforeEach(function() {
		library = require('../js/libraries/unitTest')();
	});

	describe('should return correct path for a resultion of 600', function() {
		describe('c', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.c.resolve(600), 600);
				expect(result).toBe('M 300,300.5 L 301,300.5');
			});
		});

		describe('l', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.l.resolve(600), 600);
				expect(result).toBe('M 0,300.5 L 1,300.5');
			});
		});

		describe('r', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.r.resolve(600), 600);
				expect(result).toBe('M 599,300.5 L 600,300.5');
			})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ;
		});

		describe('t', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.t.resolve(600), 600);
				expect(result).toBe('M 300,0.5 L 301,0.5');
			});
		});

		describe('b', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.b.resolve(600), 600);
				expect(result).toBe('M 300,599.5 L 301,599.5');
			});
		});

		describe('l_t_r', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.l_t_r.resolve(600), 600);
				expect(result).toBe('M 0,300.5 L 1,300.5 M 300,0.5 L 301,0.5 M 599,300.5 L 600,300.5');
			});
		});

		describe('off_centre_l_t_r', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.off_centre_l_t_r.resolve(600), 600);
				expect(result).toBe('M -299,300.5 L -298,300.5 M 0,0.5 L 1,0.5 M 300,300.5 L 301,300.5');
			});
		});

		describe('multiple_levels_of_children', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.multiple_levels_of_children.resolve(600), 600);
				expect(result).toBe('M 300,300.5 L 301,300.5 M 599,300.5 L 600,300.5');
			});
		});

		describe('l_t_r_b_t', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.l_t_r_b_t.resolve(600), 600);
				expect(result).toBe('M 0,300.5 L 1,300.5 M 300,0.5 L 301,0.5 M 599,300.5 L 600,300.5 M 300,599.5 L 301,599.5 M 300,0.5 L 301,0.5');
			});
		});

		describe('lScaled', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.lScaled.resolve(600), 600);
				expect(result).toBe('M 0,300.5 L 1,300.5');
			});
		});

		describe('xScaling', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.xScaling.resolve(600), 600);
				expect(result).toBe('M 150,300.5 L 151,300.5 M 300,0.5 L 301,0.5 M 449,300.5 L 450,300.5');
			});
		});
		
		describe('yScaling', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.yScaling.resolve(600), 600);
				expect(result).toBe('M 0,300.5 L 1,300.5 M 300,150.5 L 301,150.5 M 599,300.5 L 600,300.5');
			});
		});

		describe('xAndYScaling', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.xAndYScaling.resolve(600), 600);
				expect(result).toBe('M 150,300.5 L 151,300.5 M 300,150.5 L 301,150.5 M 449,300.5 L 450,300.5');
			});
		});

		describe('multipleLevelsOfScaling', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.multipleLevelsOfScaling.resolve(600), 600);
				expect(result).toBe('M 225,300.5 L 226,300.5');
			});
		});

		describe('lRotated', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.lRotated.resolve(600), 600);
				expect(result).toBe('M 0,300.5 L 1,300.5');
			});
		});

		describe('rotation', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.rotation.resolve(600), 600);
				expect(result).toBe('M 300,0.5 L 301,0.5 M 599,300.5 L 600,300.5 M 300,599.5 L 301,599.5');
			});
		});

		describe('multipleLevelsOfRotation', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.multipleLevelsOfRotation.resolve(600), 600);
				expect(result).toBe('M 599,300.5 L 600,300.5 M 300,599.5 L 301,599.5 M 0,300.5 L 1,300.5');
			});
		});
		
		describe('scaledAndRotated', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.scaledAndRotated.resolve(600), 600);
				expect(result).toBe('M 0,300.5 L 1,300.5 M 300,300.5 L 301,300.5 M 599,300.5 L 600,300.5');
			});
		});

		describe('connecting_t_to_r', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.connecting_t_to_r.resolve(600), 600);
				expect(result).toBe('M 300,0 L 599,300');
			});
		});

		describe('connecting_l_to_b', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.connecting_l_to_b.resolve(600), 600);
				expect(result).toBe('M 0,300 L 300,599');
			});
		});

		describe('connecting_b_to_l_t_r', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.connecting_b_to_l_t_r.resolve(600), 600);
				expect(result).toBe('M 300,599 L 0,300M 300,599 L 0,300M 300,599 L 300,0M 300,599 L 599,300');
			});
		});

		describe('joinUp_l_t_r', function() {
			it('should return correct path string', function() {
				var result = pointToSvg(library.joinUp_l_t_r.resolve(600), 600);
				expect(result).toBe('M 0,300 L 300,0M 300,0 L 599,300M 599,300 L 0,300');
			});
		});
	});
});
