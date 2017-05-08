      var map;

      require(["esri/map","esri/dijit/Scalebar","esri/dijit/LocateButton","esri/dijit/Search",
	  "esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/FeatureLayer","esri/InfoTemplate",
	  "esri/dijit/Legend","dojo/_base/array","esri/dijit/BasemapGallery","esri/arcgis/utils",
	  "esri/geometry/webMercatorUtils","dojo/on","esri/tasks/query","esri/tasks/QueryTask", "dojo/dom","dojo/parser",
	  "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dijit/TitlePane","dijit/layout/AccordionContainer",
	  "dojo/domReady!"],
	  function(Map, Scalebar, LocateButton,
	  Search, ArcGISDynamicMapServiceLayer, FeatureLayer, InfoTemplate, Legend,
	  arrayUtils, BasemapGallery, arcgisUtils,webMercatorUtils, on, Query, QueryTask, dom, parser) {
		//The parser function allows the dojo to be configured within the html node
		parser.parse();
		
		//This is the new map object
        var map = new Map("map", {
          basemap: "streets",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
          center: [-88.158, 41.757], // longitude, latitude
          zoom: 13,
        });
		
		  //This is the scalebar object
		  var scalebar = new Scalebar({
          map: map,
          // "dual" displays both miles and kilometers
          // "english" is the default, which displays miles
          // use "metric" for kilometers
          scalebarUnit: "english"
        });
		
		//This is the geolocate object
		var geoLocate = new LocateButton({
		map: map
		}, "LocateButton");
		geoLocate.startup();
		
		//This is the address locator object
		var search = new Search({
        map: map
        }, "search");
		search.startup();
		
		//This is the basemap Gallery object
		var basemapGallery = new BasemapGallery({
        showArcGISBasemaps: true,
        map: map
      }, "basemapGallery");

		basemapGallery.on("error", function(msg) {
        console.log("basemap gallery error:  ", msg);
      });
		basemapGallery.startup();
	  
		//This is the dynamic Map Service layer objects
		var dynamicMapServiceLayer = new ArcGISDynamicMapServiceLayer(
		"https://sampleserver6.arcgisonline.com/arcgis/rest/services/Water_Network/MapServer", {
		});
		// This is the InfoTemplate popup object
		var template = new InfoTemplate("Attributes", "${*}");
	    
		//This is the feature layer object
		var featureLayer = new FeatureLayer("https://sampleserver6.arcgisonline.com/arcgis/rest/services/Water_Network/FeatureServer/8",{
			mode: FeatureLayer.MODE_SNAPSHOT,
            infoTemplate: template,
            outFields: ["*"]
		});
		var cityLayer = new FeatureLayer("http://dpw.gis.lacounty.gov/dpw/rest/services/CityBoundaries/MapServer/1",{
			mode: FeatureLayer.MODE_SNAPSHOT,
            infoTemplate: template,
            outFields: ["*"]
		});
		map.addLayers([featureLayer,cityLayer, dynamicMapServiceLayer]);
		
		//This is the query task and query object
		var queryTask = new QueryTask("http://dpw.gis.lacounty.gov/dpw/rest/services/CityBoundaries/MapServer/1");
		var queryTask2 = new QueryTask("https://sampleserver6.arcgisonline.com/arcgis/rest/services/Water_Network/FeatureServer/8");

        var query = new Query();
        query.returnGeometry = true;
        query.outFields = ["*"];
		        
		on(dom.byId("execute"), "click", execute);

        function execute () {
			//if you use query.text that looks for display field the query where you can write the query. Notice single quotes for the string fields
          query.where = "CITY_NAME = " + "'" + dom.byId("facilityid").value + "'";
          queryTask.execute(query, showResults);
        }

        function showResults (results) {
          var resultItems = [];
          var resultCount = results.features.length;
          for (var i = 0; i < resultCount; i++) {
            var featureAttributes = results.features[i].attributes;
            for (var attr in featureAttributes) {
              resultItems.push("<b>" + attr + ":</b>  " + featureAttributes[attr] + "<br>");
            }
            resultItems.push("<br>");
          }
          dom.byId("queryinfo").innerHTML = resultItems.join("");
        }
		//This is the query to get count results from the query
		on(dom.byId("execute2"), "click", execute2);
		
		  function execute2 () {
			//if you use query.text that looks for display field the query where you can write the query. Notice single quotes for the string fields
          query.where = dom.byId("fcfield").value + " " + dom.byId("operator").value + " '" + dom.byId("facilityid2").value + "'";
          queryTask2.executeForCount(query, function(count){dom.byId("CityCount").innerHTML = count});
        }
	
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

		//Function to  show the coordinates
        function showCoordinates(evt) {
          //the map is in web mercator but display coordinates in geographic (lat, long)
          var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
          //display mouse coordinates
          dom.byId("info").innerHTML = mp.x.toFixed(6) + ", " + mp.y.toFixed(6);
        }
      });