'use strict';

module.exports = function group(wrapped) {
	function callMethodOnAllChildren(methodName, val, that) {
		var current = wrapped._child;
		while(current) {
			current[methodName](val);
			current = current._next;
		}
		return that;
	}
	return {
		x: function(val) {
			return callMethodOnAllChildren('x', val, this);
		},
		y: function(val) {
			return callMethodOnAllChildren('y', val, this);
		},
		scaleX: function(val) {
			return callMethodOnAllChildren('scaleX', val, this);
		},
		scaleY: function(val) {
			return callMethodOnAllChildren('scaleY', val, this);
		},
		scale: function(val) {
			return callMethodOnAllChildren('scale', val, this);
		},
		rotation: function(val) {
			return callMethodOnAllChildren('rotation', val, this);
		},
		add: function(val) {
			return callMethodOnAllChildren('add', val, this);
		},
		resolve: function(resolution) {
			return wrapped.resolve(resolution, this);
		},
		get toString() {
			return wrapped.toString;
		},
	}
}
