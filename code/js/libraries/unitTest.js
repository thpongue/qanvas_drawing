'use strict';

// re-usable library of elements for use in multiple tests
module.exports = function() {
	var shared = require('../shared')();
	var primitives = shared.primitives;
	var position = require('../qanvas/position');
	var connect = require('../qanvas/connect');
	return {
		get c() {
			return primitives.c();
		},
		get l() {
			return primitives.l();
		},
		get r() {
			return primitives.r();
		},
		get t() {
			return primitives.t();
		},
		get b() {
			return primitives.b();
		},
		get l_t_r() {
			return this.c.add(this.l).add(this.t).add(this.r);
		},
		get l_b_r() {
			return this.c.add(this.l).add(this.b).add(this.r);
		},
		get l_t_r_b_t() {
			return this.l_t_r.add(this.b).add(this.t);
		},
		get off_centre_l_t_r() {
			return this.l.add(this.l_t_r);
		},
		get multiple_levels_of_children() {
			return this.c.add(this.c.add(this.c.add(this.c))).add(this.r);
		},
		get lScaled() {
			return this.l.scaleX(.5);
		},
		get xScaling() {
			return this.c.scaleX(.5).add(this.l_t_r);
		},
		get yScaling() {
			return this.c.scaleY(.5).add(this.l_t_r);
		},
		get xAndYScaling() {
			return this.c.scale(.5).add(this.l_t_r);
		},
		get multipleLevelsOfScaling() {
			return this.c.scale(.5).add(this.c.scale(.5).add(this.l));
		},
		get lRotated() {
			return this.l.rotation(.25);
		},
		get rotation() {
			return this.c.rotation(.25).add(this.l_t_r);
		},
		get multipleLevelsOfRotation() {
			return this.c.rotation(.25).add(this.c.rotation(.25).add(this.l_t_r));
		},
		get scaledAndRotated() {
			return this.c.scale(.5).add(this.l.rotation(0.25).add(this.b)).add(this.r.rotation(-0.25).add(this.t).add(this.b));
		},
		get connecting_t_to_r() {
			return connect(this.c.add(this.t).add(this.r));
		},
		get connecting_l_to_b() {
			return connect(this.c.add(this.l).add(this.b));
		},
		get connecting_b_to_l_t_r() {
			return connect(this.c.add(this.b).add(this.l_t_r));
		},
		get connect_l_t_r() {
			return connect(this.l_t_r);
		},
		get joinUp_l_t_r() {
			return connect(this.l_t_r).joinUp();
		}
	};
}
