'use strict';

module.exports = function renderer(g, xmlns, resolution) {
	return {
		render: function(pathString) {
			var path = document.createElementNS (xmlns, 'path');
			path.setAttributeNS (null, 'stroke', '#000000');
			path.setAttributeNS (null, 'stroke-width', 1);
			path.setAttributeNS (null, 'stroke-linejoin', 'miter');
			path.setAttributeNS (null, 'd', pathString);
			g.appendChild(path);
		}
	}
}
