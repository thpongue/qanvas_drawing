'use strict';

(function() {
	var resolution = 600;
	var shared = require('./shared')();
	var library = require('./libraries/mandala')();
	var pointToSvg = require('./qanvas/pointToSvg');
	var svg = require('./svg/svg')();
	
	var position = library();
	console.log(position.toString);
//	var position = shared.shapes.grid(library, 1);
	var position = shared.shapes.grid(library, 3);
	var point = position.resolve(resolution);
	var pointToString = require('./qanvas/pointToString');
	console.log('point = ' + pointToString(point));
	var pathString = pointToSvg(point, resolution);
	var renderer = svg.createRenderer(resolution);
	
	renderer.render(pathString);
//	console.log('pathString = ' + pathString);
})();
