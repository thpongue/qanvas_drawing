Reading the svg docs got me thinking about why I'm creating this api. There is nothing that I'm creating here that cannot be done using svg (+ perhaps some custom code). In addition, svg does a lot of extra things that this doesn't do. But I am not creating this library to make it possible to do anything, I am trying to make a library which does a few things well. It is designed around a few simple concepts.

- Composable - we can use positions to define paths and we can use paths to define positions.
- Swappable - any Position or Connection can be swapped for any other Position or Connection. Hence if we're positioning circles along a straight line, we can swap that for a wavy line, or a single point, or whatever.
- Adaptable - although it is possible to set the absolute x and y position of things, one of the key benefits of this api is the ability to take any path, split into any number of positions and use these positions to put other positions and connections on. If the base parent changes shape the rest of the instructions about where to position children still work - meaning that the composition adapts as parent elements change.
- Terse Syntax - although we create bezier curves, we favour convention over configuration. Hence our syntax just requires that you specify whether or not to curve into and out of a point and we work out the beziers based on the preceeding and following position. You can alter the curve by adding in a new position nearer to the position being curved into and out of. This sacrifices some degree of precision for simplicity of syntax.

Things this is suitable for:
- Generative art. Not stuff that involves patterns or filters, but the layout of simple lines.
- Randomised creations. If you're an artist, this may allow you to specify which parts of your composition can vary and to what extent. Every customer can have a unique piece.
