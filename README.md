# Mercator Puzzle Redux

Dynamic take on the original Mercator Puzzle by Google.
Built by Bramus! - [http://www.bram.us/](http://www.bram.us/)

## About

The [the orignal Mercator Puzzle by Google](http://gmaps-samples.googlecode.com/svn/trunk/poly/puzzledrag.html) is a nice one, yet it's static: you always get presented the same 15 countries at the same 15 starting positions.

This is a dynamic take on that, in which you get to place 15 countries chosen from a set of 178 in total. If you don't know the anwser, just double click a country to let the computer place it. Above that you'll get to know the name of the country when it's placed.

## Acknowledgements

* Thanks to @thijsvandevelde for sparking this idea after [complaining](https://twitter.com/thijsvandevelde/status/302332324492763136) about the fact that the original version was static
* The country data is loaded from [a GeoJSON file containing all countries](https://raw.github.com/johan/world.geo.json/master/countries.geo.json). Antarctica has been omitted from the list (sorry ATA!) due to it coloring the whole world instead of the continent itself.
* The Polygons are moved using [`google.maps.Polygon.moveTo()`](https://github.com/bramus/google-maps-polygon-moveto), a Google Maps Extension which I wrote especially for this project. The source is available on GitHub