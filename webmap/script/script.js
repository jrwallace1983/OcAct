      var map;

      require(["esri/map","esri/dijit/Scalebar","esri/dijit/LocateButton","esri/dijit/Search","esri/layers/ArcGISDynamicMapServiceLayer","esri/dijit/Legend",
      "dojo/_base/array", "esri/dijit/BasemapGallery", "esri/arcgis/utils", "esri/geometry/webMercatorUtils", "dojo/dom",
      "dojo/parser", "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dijit/TitlePane","dijit/layout/AccordionContainer",
	  "dojo/domReady!"], function(Map, Scalebar, LocateButton,
	  Search, ArcGISDynamicMapServiceLayer, Legend, arrayUtils, BasemapGallery, arcgisUtils,webMercatorUtils, dom, parser) {
		parser.parse();
        var map = new Map("map", {
          basemap: "streets",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
          center: [-88.158, 41.757], // longitude, latitude
          zoom: 13,
        });
		
		  var scalebar = new Scalebar({
          map: map,
          // "dual" displays both miles and kilometers
          // "english" is the default, which displays miles
          // use "metric" for kilometers
          scalebarUnit: "english"
        });
		
		var geoLocate = new LocateButton({
		map: map
		}, "LocateButton");
		
		var search = new Search({
        map: map
        }, "search");
		
		var basemapGallery = new BasemapGallery({
        showArcGISBasemaps: true,
        map: map
      }, "basemapGallery");

		      
		basemapGallery.on("error", function(msg) {
        console.log("basemap gallery error:  ", msg);
      });
	  
		var dynamicMapServiceLayer = new ArcGISDynamicMapServiceLayer("https://sampleserver6.arcgisonline.com/arcgis/rest/services/Water_Network/MapServer", {
        });
		
		//add the legend
		map.on("layers-add-result", function (evt) {
        var layerInfo = arrayUtils.map(evt.layers, function (layer, index) {
          return {layer:layer.layer, title:layer.layer.name};
        });
        if (layerInfo.length > 0) {
          var legendDijit = new Legend({
            map: map,
            layerInfos: layerInfo
          }, "legendDiv");
          legendDijit.startup();
		}
		});
		  map.on("load", function() {
          //after map loads, connect to listen to mouse move & drag events
          map.on("mouse-move", showCoordinates);
          map.on("mouse-drag", showCoordinates);
        });

        function showCoordinates(evt) {
          //the map is in web mercator but display coordinates in geographic (lat, long)
          var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
          //display mouse coordinates
          dom.byId("info").innerHTML = mp.x.toFixed(6) + ", " + mp.y.toFixed(6);
        }
		geoLocate.startup();
        search.startup();
		basemapGallery.startup();
		map.addLayers([dynamicMapServiceLayer]);
      });