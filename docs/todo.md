[x] Phase 1: Position
	[x] Position
		[x] Rendering positions
			[x] create a basic canvas with a white background (the white is not rendered by our drawing engine)
		[x] x and y
			[x] show a number of basic positions can be created and turned into svg
				[x] var c = position()
					[x] c.toString 
					[x] pointToSvg(c.resolve(600),600) 
				[x] var l = position().x(-1)
					[x] l.toString 
					[x] pointToSvg(l.resolve(600),600) 
				[x] var r = position().x(1)
					[x] r.toString 
					[x] pointToSvg(r.resolve(600),600) 
				[x] var t = position().y(-1)
					[x] t.toString 
					[x] pointToSvg(t.resolve(600),600) 
				[x] var b = position().y(1)
					[x] b.toString 
					[x] pointToSvg(b.resolve(600),600) 
		[x] add
			[x] adding to a centre location (ie parent doesn't offset child position)
				[x] var l_t_r = c.add(l).add(t).add(r);
					[x] l_t_r.toString 
					[x] pointToSvg(l_t_r.resolve(600),600) 
			[x] adding to an off-centre position (ie parent does offset child position)
				[x] var off_centre_l_t_r = l.add(l_t_r)
					[x] off_centre_l_t_r.toString 
					[x] pointToSvg(off_centre_l_t_r.resolve(600),600) 
			[x] multiple levels of children (ie many levels of 1 position followed by another)
				[x] var multiple_levels_of_children = c.add(c.add(c.add(c))).add(r)
					[x] multiple_levels_of_children.toString 
					[x] pointToSvg(multiple_levels_of_children.resolve(600),600) 
			[x] adding with sequences (composability)
				[x] var l_t_r_b_t = l_t_r.add(b).add(t);
					[x] l_t_r_b.toString 
					[x] pointToSvg(l_t_r_b_t.resolve(600),600) 
		[x] resolve
			[x] c
				[x] c.resolve(300)
				[x] c.resolve(1000)
			[x] l
				[x] l.resolve(300)
				[x] l.resolve(1000)
			[x] r
				[x] r.resolve(300)
				[x] r.resolve(1000)
			[x] t
				[x] t.resolve(300)
				[x] t.resolve(1000)
			[x] b
				[x] b.resolve(300)
				[x] b.resolve(1000)
			[x] l_t_r
				[x] l_t_r.resolve(300)
				[x] l_t_r.resolve(1000)
		[x] scaling
			[x] scaling a position only scales its children
				[x] var lScaled = l.scaleX(.5)
					[x] lScaled.toString 
					[x] pointToSvg(lScaled.resolve(600),600) 
			[x] scaling a parent on x axis affects its child points
				[x] var xScaling = c.scaleX(.5).add(l_t_r)
					[x] xScaling.toString 
					[x] pointToSvg(xScaling.resolve(600),600) 
			[x] scaling a parent on y axis affects its child points
				[x] var yScaling = c.scaleY(.5).add(l_t_r)
					[x] yScaling.toString 
					[x] pointToSvg(yScaling.resolve(600),600) 
			[x] shorthand method can be used to scale a parent on both axes
				[x] var xAndYScaling = c.scale(.5).add(l_t_r)
					[x] xAndYScaling.toString
					[x] pointToSvg(xAndYScaling.resolve(600),600)
			[x] multiple scaled parents scale children accordingly
				[x] var multipleLevelsOfScaling = c.scale(.5).add(c.scale(.5).add(l)
					[x] xAndYScaling.toString 
					[x] pointToSvg(xAndYScaling.resolve(600),600) 
		[x] rotation
			[x] rotating a position only rotates its children
				[x] var lRotated = l.rotation(.25)
					[x] lRotated.toString 
					[x] pointToSvg(lRotated.resolve(600),600) 
			[x] rotating parent affects child position
				[x]g var rotation = c.rotation(.25).add(l_t_r)
					[x]g rotation.toString 
					[x] pointToSvg(rotation.resolve(600),600) 
			[x] multiple rotated parents affect child position accordingly
				[x] var multipleLevelsOfRotation = c.rotation(.25).add(c.rotation(.25).add(l));
					[x] multipleLevelsOfRotation.toString 
					[x] pointToSvg(multipleLevelsOfRotation.resolve(600),600) 
		[x] scaling and rotation at once
			[x] use scaling and rotation to get positions to the left, centre and right
				[x] var scaledAndRotated = c.scale(.5).add(l.rotation(0.25).add(b)).add(r.rotation(-0.25).add(t).add(b));
					[x] scaledAndRotated.toString 
					[x] pointToSvg(scaledAndRotated.resolve(600),600) 
	[x] Static Library
		[x] create a library accessible from the main project and the unit tests

[x] Phase 2: Connecting single points
	[x] Connect a position to a position
		[x] var connect_t_and_r = connect(c.add(t).add(r))
				[x] connect_t_and_r.toString 
				[x] pointToSvg(connect_t_and_r.resolve(600),600) 
		[x] var connect_l_and_b = connect(c.add(l).add(b))
				[x] connect_l_and_b.toString 
				[x] pointToSvg(connect_l_and_b.resolve(600),600) 
		[x] var connect_b_to_l_t_r = connect(c.add(b).add(l_t_r))
				[x] pointToSvg(connect_b_to_l_t_r.resolve(600),600) 
	[x] joining up points
		[x] var joined_up_l_t_r = connect(l_t_r.joinUp)

[x] mandala generation phase 1. create a bunch of basic building blocks which can be combined to create random mandalas and implement something that invokes them
	[x] utils
		[x] incrementor
		[x] permutation
		[x] randomBoolean
		[x] randomInteger
		[x] randomNumber
		[x] repeat
		[x] rotation
		[x] roundTo
	[x] primitives
		[x] tl
		[x] t
		[x] tr
		[x] r
		[x] br
		[x] b
		[x] bl
		[x] l
		[x] c
	[x] shapes
		[x] equilateral
		[x] grid
	[x] compositeShapes
		[x] equilateral
		[x] pattern
		[x] random
		[x] randomEquilateral

[x] image generation phase 1
	[x] get something which tranforms from svg to jpg

[] image generation phase 2

[] new mandala elements
	[] spiral
	[] overlapping spiral
	[] expanding shape (ie repeat but smaller each time)
	[] wavey line (ie a circle moving around a circle) (use for circular borders)
	[] simple straight line (use for circular borders)
	[] mirror util
	[] leaf (use mirror?)
		[] leaf with random variation of the point
	[] heart (use mirror?)
	[] alternate shapes (just implement a constructor that takes a sequence of constructors calling each in turn before returning back to the start)
	[] replace random number of elements with some kind of pattern (eg increasing linearly, increasing pow 2 etc)

[] serialise / deserialise
	[] fix pointToString
	[] implement stringToPoint

[] refactor connect - make this work like path currently does but if it encounters an explicit group then it treats them as 1 thing
	- we don't need connect - path should just behave differently for a "group" - if encountered it knows that each position in the group needs a seperate path through it
		- this is much more intuitive than having to remember which items are siblings
	- we've already got a group object to perform the task of acting on all children
		- is this how we want it to behave?
		- we still need it to resolve in the desired way

[] Phase 3: Connecting Connections
	[] Connect a position to a Connection
		[] var connect_b_to_connect_t_and_r

[] Phase 3: curves
	[] Curved lines
		- TODO

[] Milestone 2: mandala with curves

[] Phase 4: Connecting connections (fills)
	[] Connect a connection to a position
		[] var triangle = connect(line1.add(b))
		- TODO
	[] Connect a position to a connection
		[] var triangle = connect(b.add(line1))
		- TODO
	[] Connect a connection to a connection
		[] var square = connect(line1.add(line2))
		- TODO

[] Milestone 3: Union Jack Demo
	[] create a union jack then illustrate what this can do by turning the parent rectangle into a circle

[] Phase 5: Dynamic Library
	[] Create a dynamic library to replace the hardcoded library
		- Use something like my testLibrary to dynamically add getters (ie so with each call we get a new instance)

[] Phase 6. Split, Slot, Position and Random
	- TODO: fill this out a little more - this is where we make use of sequence behaviour - ie if next then repeat the same action (see the code in position)

- To sort

	- Questions
		- should I make all my actions a method of the object so that we're executing in the order we read ie
			- connect(c.add(l.add(r)) vs c.add(l.add(r)).connect
		- since a composite object is a wrapper and scaling applies to children of the thing being scaled have we made it tricky to do simple things
			- eg the code to achieve our simplest composite test of scaleX is: composite(this.c.add(this.c.add(this.l)).add(this.c.add(this.r))).scaleX(.5);
		- is there any difference between setting scaleX, scaleY and scale on a composite and setting it on the parent?
			- if we extend it so that we can go back from composite to position then yes but we're trying to keep things simple aren't we?
		- I'm unconvinced about the value of composite - can't we just have an addToChildren option?

	- Tech debt
		- decide on a testing strategy for the svg folder - currently not testing at all
		- ensure all unit tests use the sut convention
		- pointToSvg is inaccurate - its a path. Use the correct name
		- tweak the api for pointToSvg if needed - it seems like we're passing the resolution around a lot
			- does position need to resolve itself?
		- I'm currently using an _ to indicate private props - fix this
		- tidy up position and get some consistency - eg do I need all the getters, do I always have to use this etc
		- add in () syntax for groups eg xAbs:0,yAbs:1 - (xAbs:-1,yAbs:0 - xAbs:0,yAbs:-1 - xAbs:1,yAbs:0) and if necessary add this test back in from connect_b_to_l_t_r onwards
		- go through worked examples and rework with the correct algorithm once I've worked a little more on it
		- connect is very inefficient - maybe we need to store a dictionary locally (not inside position) of points for that position - we then ask an object - do you have the points already for this position - if not then generate them otherwise return what you've already got. Could do something similar for length
		- unhappy with connect working on the children of the child rather than the direct children - do it this way but consider alternatives
		- path and connect - think about these a little
		- randomisation - does this require that we can always resolve our shapes and then choose to add a child to each which adds the randomness?
		- consolidate connect and path
			- do we need path or do we just want to resolve then call connect?
		- fix pointToString
		- work out a consistent approach to modules - we have standalone functions, objects and functions returning functions - too inconsistent
		- revisit code organisation - especially for compositeShapes. Still not quite right
		- fix image creation - currently its putting a 600x600 mandala inside a 1200x800 image
		- see the .svg in my test project - is it possible to generate these? can these be displayed?
		- implement saveSvgAsPng (added into node modules)
			- https://spin.atomicobject.com/2014/01/21/convert-svg-to-png/

	- ideas
		- as part of the language can we have a shortcut way of saying to duplicate the point 1 or 2 back from the current position as the next position
		- proportion should return a wrapper object which just knows what its wrapping and which proportion to return once resolve is called. This saves us from having to every prematurely calculate abs values which only works when connecting positions
		- nicks idea: can I do random alpha'd fills?
