# Milwaukee Sanborn Discovery Appliation

The [Milwaukee Sanborn Discovery Applicaiton](http://webgis.uwm.edu/agsl/sanborn/) was created in 2017 and allows users to access a seamless mosaic of 1910 Sanborn Fire Insurance Atlas pages.  The pages were scanned from the held volumes at the American Geographical Society Library at UW-Milwaukee, georeferenced by the Milwaukee County Land Information Office, and then made available in this web application by AGSL Intern Belle Lipton and Lauren Winkler.

## About the Maps

The Sanborn Maps of Milwaukee are fire insurance atlases held by the American Geographical Society Library (AGSL). This 1910 atlas includes eight volumes, consisting of 830 map sheets. Sanborn maps were designed to assist fire insurance agents with insuring property. Produced for over 12,000 urbanized areas in the United States, Sanborn maps have been described by the Library of Congress as "the single most important record of urban growth and development in the United States during the past one hundred years." The American Geographical Society Library holds Sanborn maps dating back to 1894.

## About the Project

In their original format, the 830 sheets are 25 inches tall by 22.5 inches wide. Each sheet exists as an individual map item, and a particular city block can be found by referencing a paper key. The maps were digitized and uploaded to the library’s [Digital Collections](https://uwm.edu/lib-collections/sanborn/) in 2007. To find an area, one must reference a digitized map key.

Finding information in these incredibly detailed and valuable map sheets is hindered by the segmented viewing process of having to cross-reference map sheets with keys. This process of navigating thumbnails in a digital collection does not lend itself to a truly immersive experience, where one can get a feel for what the city was like at the time, or conceptualize how one map sheet fits in with others. For that reason, the American Geographical Society Library identified this project as a goal for the library.

In 2017 Milwaukee County Land Information Office (MCLIO) georeferenced the American Geographical Society’s 1910 Sanborn atlas sheets. Adding geographic location to these library items has opened doors for many exciting ways that scholars can access historic information from these sources. Now, the sheets appear as one seamless map, but each sheet can be isolated and linked to the individual item in the digital collection. This project is one of many the AGSL is envisioning for these resources, so stay tuned for more to come.

## About the Software

Have an idea for a mapping project using this atlas? The mosaiced sheets are published and available as a map service [here](http://webgis.uwm.edu/arcgisuwm/rest/services/AGSL/SanbornMaps/MapServer).

These sheets were georeferenced using ArcMap, and published on the UWM ArcGIS server. The application was built using Leaflet, a light-weight, flexible Javascript library created for web mapping.

[Original Project Github](https://github.com/bellegis/sanborn-agsl)

[Forked active repository](https://github.com/srappel/sanborn)

# Credits

Belle Lipton: Designer / Developer - [About Belle](https://www.linkedin.com/in/belle-lipton-81a90493)

Lauren Winkler: Designer / Developer - [About Lauren](http://skeetidot.github.io/)

Bob Cowling: Developer for 1894 layer updates to app - [About Bob](https://rcowling.github.io/)

Marker based on a design created by Alex Kwa from the [Noun Project](https://thenounproject.com/)

## Special Thanks

[Stephen Appel](https://srappel.github.io/) – Geospatial Information Specialist, American Geographical Society Library

[Chris Scheele](http://chrisscheele.com/) – Department of Geography, University of Wisconsin Madison

Emily Berth – GIS Technician, Milwaukee County Land Information Office

Kurt Meigast – IT Manager, UWM School of Architecture and Urban Planning
