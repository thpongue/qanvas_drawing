'use strict';

module.exports = function svg() {
	return {
		createRenderer: function(resolution) {
			var xmlns = 'http://www.w3.org/2000/svg';

			// parent svg element
			var svgElem = document.createElementNS (xmlns, 'svg');
			svgElem.setAttributeNS (null, 'viewBox', '0 0 ' + resolution + ' ' + resolution);
			svgElem.setAttributeNS (null, 'width', resolution);
			svgElem.setAttributeNS (null, 'height', resolution);
			svgElem.style.display = 'block';

			// graphic element
			var g = document.createElementNS (xmlns, 'g');
			svgElem.appendChild (g);

			// hardcoded white background
			var background = document.createElementNS(xmlns, 'rect');
			background.setAttributeNS(null, 'x', 0);
			background.setAttributeNS(null, 'y', 0);
			background.setAttributeNS(null, 'width', resolution);
			background.setAttributeNS(null, 'height', resolution);
			background.setAttributeNS(null, 'fill', '#FFFFFF');
			g.appendChild(background);

			// if we have an svg container then render
			var svgContainer = document.getElementById ('svgContainer');
			if (svgContainer) {
				svgContainer.appendChild (svgElem);         
			}

			var renderer = require('./renderer')(g, xmlns, resolution);
			return renderer;
		}
	}
}
