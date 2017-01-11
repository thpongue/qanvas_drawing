'use strict';

module.exports = function position() {

	// imports
	var shared = require('../shared')();
	var roundTo = shared.utils.roundTo;
	var point = require('./resolve/point');

	// private
	var x = 0;
	var y = 0;
	var scaleX = 1;
	var scaleY = 1;
	var rotation = 0;
	var child;
	var next;
	var parent;

	return {
		// creation api
		x: function(val) {
			x = val;
			return this;
		},
		y: function(val) {
			y = val;
			return this;
		},
		scaleX: function(val) {
			scaleX = val;
			return this;
		},
		scaleY: function(val) {
			scaleY = val;
			return this;
		},
		scale: function(val) {
			return this.scaleX(val).scaleY(val);
		},
		rotation: function(val) {
			rotation = 6.28318*val; // convert to radians
			return this;
		},
		add: function(val) {
			child ? child._append(val) : child = val;
			val._parent = this;
			return this;
		},
		// this is a convenience function which requires an object constructor rather than the object itself - this is because writing generic clone code is an arse-ache
		addToAll: function(cstr) {
			this.add(cstr());
			if (next) {
				next.addToAll(cstr);
			}
		},

		// rendering api
		// ignore next is terrible but lets leave for the moment
		resolve: function(resolution, ignoreNext) {
			var ret = child ? child.resolve(resolution) : this._toPoint(resolution);

			if (!ignoreNext && next) {
				var add = next.resolve(resolution);
				if (add) {
					if (ret) {
						var end = ret;
						while(end.next) {
							end = end.next;
						}
						end.next = add;
					} else {
						ret = add;
					}
				}
			}

			return ret;
		},

		// debug
		get toString() {
			var ret = child ? child.toString : ('xAbs:'+this._xAbs+',yAbs:'+this._yAbs);
			ret += next ? ' - '+next.toString : '';
			return ret;
		},
		
		// private
		get _scaleX() {
			return scaleX;
		},
		get _scaleY() {
			return scaleY;
		},
		get _rotation() {
			return rotation;
		},





		// new ver
		get _scaleXAbs() {
			var ret = this._parent ? this._parent._scaleX * this._parent._scaleXAbs : 1;
			return ret;
		},
		get _localScaleX() {
			var ret = scaleX;
			return ret;
		},
		get _localScaleY() {
			var ret = scaleY;
			return ret;
		},
		// needed?
		get _localRotation() {
			var ret = rotation;
			return ret;
		},
		// needed?
		get _localX() {
			var ret = x;
			return ret;
		},
		// needed?
		get _localY() {
			var ret = y;
			return ret;
		},
		_getRotatedX: function(x,y) {
			var rotation = this._parent ? this._parent._localRotation : 0;
			var ret = x * Math.cos(rotation) - y * Math.sin(rotation);
			return ret;
		},
		_getRotatedY: function(x,y) {
			var rotation = this._parent ? this._parent._localRotation : 0;
			var ret = x * Math.sin(rotation) + y * Math.cos(rotation);
			return ret;
		},
		// go up through parentage calculating val for abs x and abs y
		_absPosUnrounded: function(offsetX, offsetY) {
			// scale then rotate x and y
			var xScaled = (this._localX + offsetX) * (this._parent ? this._parent._localScaleX : 1);
			var yScaled = (this._localY + offsetY) * (this._parent ? this._parent._localScaleY : 1);
			var x = this._getRotatedX(xScaled, yScaled);
			var y = this._getRotatedY(xScaled, yScaled);

			// recursively call parent if need be
			var parentVal;
			if (this._parent) {
				parentVal = this._parent._absPosUnrounded(x,y);
			}
			var retX = this._parent ? parentVal[0] : x;
			var retY = this._parent ? parentVal[1] : y;

			return [retX, retY];
		},
		// this takes the result of the main function and rounds it
		get _xAbs() {
			var ret = this._absPosUnrounded(0,0);
			return roundTo(ret[0],4)();
		},
		// this takes the result of the main function and rounds it
		get _yAbs() {
			var ret = this._absPosUnrounded(0,0);
			return roundTo(ret[1],4)();
		},
		get _rotationAbs() {
			return this._parent ? this._parent._rotation + this._parent._rotationAbs : 0;
		},
		set _parent(val) {
			this.parent = val;
		},
		get _parent() {
			return this.parent;
		},
		set _child(val) {
			this.child = val;
		},
		get _child() {
			return child;
		},
		set _next(val) {
			this.next = val;
		},
		get _next() {
			return next;
		},
		_append: function(position) {
			next ? next._append(position) : (next = position);
		},
		_toPoint: function(resolution) {
			var ret = point();
			ret.x = roundTo(((this._xAbs+1) / 2) * resolution, 2)();
			ret.y = roundTo(((this._yAbs+1) / 2) * resolution, 2)();
			return ret;
		}
	}
}
