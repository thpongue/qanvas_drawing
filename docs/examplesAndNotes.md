These examples show what gets returned when we call the points method of any given point (usually the root point)

In the following examples I use:
- x for a Position
- c for a Connection
- p is a point (returned when a statement is evaluated)

There is always a single topmost parent (with no siblings)
The output is shown in a different syntax whereby adjacent p's indicate siblings, -'s indicate a connection (ie it is implied that you get a load of p's filing the gap in between) and fills are shown using a new line


parentage
-----------------------------

A point returns its lowest-most children. This example shows 2 siblings, one of which has a child

x
|
x   x
    |
    x

I have capitalised the returned Positions

x
|
X   x
    |
    X

Note that the absolute value of every point is modified by its parent (x, y, scaleX, scaleY, rotation) and that parents can be infinitely nested

Hence what gets returned is 2 points:

pp



Connecting 2 positions
-----------------------------

A connection will connect each of its immediate descendants. The simplest example of this is wrapping 2 simple positions as below

x
|
c
|
x   x

I have capitalised the Positions returned

x
|
c
|
X   X

This fills in the points in between

p-p


Connecting a group of positions
-----------------------------

If the first child has no child positions and the next child has 2 children then we connect the first position to the 2 child positions

x
|
c
|
x   x
		|
		xx

I have capitalised the Positions returned

x
|
c
|
X   x
		|
		XX

2 Paths are drawn as below

p-p
 -p


Connection followed by Position
-----------------------------

If a Connection object is followed by a Position then the position follows the connect (as you might expect!)

x
|
c   x
|
x   x
		
I have capitalised the Positions returned

x
|
c   X
|
X   X

We return a path followed by a point

p-pp


Connecting a group of positions followed by a position
-----------------------------

Combining the previous 2 examples, here we show a connection of multiple positions followed by a position

x
|
c   x
|
x   x
    |
    xx
		
I have capitalised the Positions returned

x
|
c   X
|
X   x
    |
    XX

Here we first return the Connection followed by the extra position
p-p
 -pp


Connection with no children
-----------------------------

This example shows that a connection is still a position and will behave as such even if no children are added

x
|
c   x

Here are the returned positions

x
|
C   X

And here is the result

pp


Nested Connections 1: Connecting a Connection and a Position (or Fills version 1)
-----------------------------

This example shows a connection being created then this being connected to a position

x
|
c
|
c   x
|
x   x

I have capitalised the returned positions

x
|
c
|
c   X
|
X   X

Here we make the first connection, then connect every point within that to the end position

p-p
|
p


Nested connections 2: Connecting a Connection and a Connection (or Fills version 2)
-----------------------------

This builds on the last example by showing how we can have 2 nested connections which are themselves connected

x
|
c
|       |
c       c
|       |
x   x   x   x

I have capitalised the returned Positions

x
|
c
|       |
c       c
|       |
X   X   X   X

Both of these instances get calculated (it doesn't matter which order)

c
|
X   X

Then every point of each of these connections gets connected

Switching to the other syntax this gives us

X-X
|-|
X-X



Nested connections 3: Connecting a Connection and a Connection... then connection that...
-----------------------------

I'm not going to illustrate this with an example as this is processor intensive and doesn't achieve anything visually.

The idea is that you can create a fill by connecting a connection to another connection or position. Then it's possible to connect each point in this fill to a connection or point.

Actually you can do this infnitely just as you can create an infinite loop in code (though this isn't infinite, just big) there's just little reason for it and it'll kill the processor!



Adding
-----------------------------

When add is called we create a child object then add the children to the child. This is so that we can call add multiple times on the same parent without messing up how connect works

Starting with a blank slate
x

When <my position>.add(l) is called we gain a child 
x
|
x

Then if we call <my position>.add(r) we do the same again so that the added child is last in the sequence
x
|
x   x


Split / Slot
-----------------------------

See objectsAndHierarchy.md



Split / Slot on nested connections
-----------------------------

See workedExamples.md



Grouping
-----------------------------

See objectsAndHierarchy.md



Patterns
-----------------------------

These allow us to load up a constructor object with a bunch of points which get returned in order when create() is called
