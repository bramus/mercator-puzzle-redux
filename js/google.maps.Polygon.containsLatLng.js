// Polygon containsLatLng - method to determine if a latLng is within a polygon
google.maps.Polygon.prototype.containsLatLng = function(latLng) {
	// Exclude points outside of bounds as there is no way they are in the poly
	var bounds = this.getBounds();

	if((bounds !== null) && !bounds.contains(latLng)) {
		return false;
	}

	// Raycast point in polygon method
	var inPoly = false;

	var numPaths = this.getPaths().getLength();
	for(var p = 0; p < numPaths; p++) {
		var path = this.getPaths().getAt(p);
		var numPoints = path.getLength();
		var j = numPoints-1;

		for(var i=0; i < numPoints; i++) {
			var vertex1 = path.getAt(i);
			var vertex2 = path.getAt(j);

			if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng())	{
				if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
					inPoly = !inPoly;
				}
			}

			j = i;
		}
	}

	return inPoly;
};
