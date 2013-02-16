/**
 * Expand/Grow a google.maps.LatLngBounds by a given percentage
 * By Bramus! - http://www.bram.us/
 */
if (!google.maps.LatLngBounds.prototype.expand) {
	google.maps.LatLngBounds.prototype.expand = function(percentage) {
		var ne = this.getNorthEast(),
			sw = this.getSouthWest(),
			dLat, dLng;

		if ((ne.lat() > 0) && (sw.lat() > 0)) {
			dLat = Math.abs(ne.lat() - sw.lat());
		} else {
			dLat = Math.abs(ne.lat()) + Math.abs(sw.lat());
		}

		if ((ne.lng() > 0) && (sw.lng() > 0)) {
			dLng = Math.abs(ne.lng() - sw.lng());
		} else {
			dLng = Math.abs(ne.lng()) + Math.abs(sw.lng());
		}

		var ne_new = new google.maps.LatLng(ne.lat() + dLat / 100 * percentage, ne.lng() + dLng / 100 * percentage);
		var sw_new = new google.maps.LatLng(sw.lat() - dLng / 100 * percentage, sw.lng() - dLng / 100 * percentage);

		this.extend(ne_new);
		this.extend(sw_new);

		return this;
	};
}