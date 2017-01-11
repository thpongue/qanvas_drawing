The number of points in a connections is determined at draw time by the resolution eg the distance between -1,0 and 1,0 may comprise 50 points or 500 depending on the resolution

Using connect means that we have no need to distinguish between a line and a fill - we just connect the points in all children
eg if we are connected 3 shapes: shape 1 has 50 points; shape 2 has 1 point; shape 3 has 20 points whichever shape has the most points determines how many connections we create - in this case 50 for each of these connections we start at the first shape and extract a point using the formula: (current iteration [in this example 0-50] / max [in this example 50]) * max in current shape [in this example 50 or 1 or 20]) we then create a connection through all these points before moving onto the next one each of these paths is a child shape in the returned shape

curving in
----------------
if point.curveIn is set to true and there is a preceeding and following point in the sequence then an incoming bezier point is created
the bezier point is calculated as follows:
continue the line backwards from the next point to this point by multiplying this distance by pi/8 (as this for some reason gives us a perfect circle with 4 points)


curving out
----------------
if point.curveOut is set to true and there is a preceeding and following point in the sequence then an outgoing bezier point is created
the bezier point is calculated as follows:
continue the line forwards from the previous point to this point by multiplying this distance by pi/8 (as this for some reason gives us a perfect circle with 4 points)


quadratic bezier points
----------------
when connecting a point to another point, if we have an outgoing bezier point from point 1 OR an incoming bezier point to point 2 then we use that as the control point in a quadratic bezier point
note that we then smooth out bezier points - ie shift them around depending on which other bezier points we have - see below


cubic bezier points
----------------
when connecting a point to another point, if we have an outgoing bezier point from point 1 AND an incoming bezier point to point 2 then we use these as the control points in a cubic bezier point
note that we then smooth out bezier points - ie shift them around depending on which other bezier points we have - see below


bezier point smoothing
----------------
once we have created all the bezier points we then tweak them so that the lines go smoothly into and out of each of our main control points
we smooth by taking 2 bezier points plus our current point and adjust them by the shortest possible equal amount so that we can draw a straight line from the first bezier point through our current point to our second bezier point
if we have an incoming bezier point angle and and outgoing bezier point angle we use these points
otherwise if we have an incoming bezier point angle and the next point has an incoming bezier point angle then we use these points
