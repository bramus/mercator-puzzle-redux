/**
 * Check if a given path is contained in a google.maps.LatLngBounds instance
 * By Bramus! - http://www.bram.us/
 */
if (!google.maps.LatLngBounds.prototype.containsPath) {
	google.maps.LatLngBounds.prototype.containsPath = function(paths) {
		paths = paths.getArray();
		for (var i = 0, l = paths.length; i < l; i++) {
			var p = paths[i].getArray();
			for (var j = 0, k = p.length; j < k; j++) {
				if (!this.contains(p[j])) {
					return false;
				}
			}
		}
		return true;
	};
}