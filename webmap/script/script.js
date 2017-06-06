      require(["esri/map",
	  "esri/dijit/Scalebar",
	  "esri/dijit/LocateButton",
	  "esri/dijit/Search",
	  "esri/layers/ArcGISDynamicMapServiceLayer",
	  "esri/layers/FeatureLayer",
	  "esri/InfoTemplate",
	  "esri/dijit/Legend",
	  "dojo/_base/array",
	  "esri/dijit/BasemapGallery",
	  "esri/arcgis/utils",
	  "esri/geometry/webMercatorUtils",
	  "dojo/on","esri/tasks/query",
	  "esri/tasks/QueryTask",
	  "esri/symbols/SimpleMarkerSymbol",
	  "dojo/_base/Color",
	  "esri/SpatialReference",
	  "dojo/dom","dojo/parser",
	  "dijit/layout/BorderContainer",
	  "dijit/layout/ContentPane",
	  "dijit/TitlePane",
	  "dijit/layout/AccordionContainer",
	  "dojo/domReady!"],
	  function(Map, Scalebar, LocateButton,
	  Search, ArcGISDynamicMapServiceLayer, FeatureLayer, InfoTemplate, Legend,
	  arrayUtils, BasemapGallery, arcgisUtils,webMercatorUtils, on, Query, QueryTask, SimpleMarkerSymbol, Color, SpatialReference, dom, parser) {
		  //declare variables
		  var map,
		  sr,
		  scalebar,
		  geoLocate,
		  search,
		  basemapGallery,
		  template,
		  symbol,
		  symbol2,
		  dynamicMapServiceLayer,
		  hydrant_string,
		  sysvalve_string,
		  hydrantLayer,
		  sysvalveLayer,
		  query,
		  valveclick,
		  hydrantclick;
		  		
		  //This is the new map object
		  map = new Map("map", {
          basemap: "streets",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
          center: [-88.158, 41.757], // longitude, latitude
          zoom: 13,
          });
		  
		  //Spatial reference for query otherwise this will be projected incorrectly
		  sr = new SpatialReference(102100);

		  //This is the scalebar object
		  scalebar = new Scalebar({
          map: map,
          // "dual" displays both miles and kilometers
          // "english" is the default, which displays miles
          // use "metric" for kilometers
          scalebarUnit: "english"
          });
		
		//This is the geolocate object
		geoLocate = new LocateButton({
		map: map
		}, "LocateButton");
		
		//This is the address locator object
		search = new Search({
        map: map
        }, "search");

		//This is the basemap Gallery object
		basemapGallery = new BasemapGallery({
        showArcGISBasemaps: true,
        map: map
      }, "basemapGallery");

		basemapGallery.on("error", function(msg) {
        console.log("basemap gallery error:  ", msg);
      });
	  
		// This is the InfoTemplate popup object
		template = new InfoTemplate("Attributes", "${*}");

		  //create symbol for selected features
		symbol = new SimpleMarkerSymbol();
		
		symbol2 = new SimpleMarkerSymbol();

		//This is the dynamic Map Service layer objects
		dynamicMapServiceLayer = new ArcGISDynamicMapServiceLayer(
		"https://sampleserver6.arcgisonline.com/arcgis/rest/services/Water_Network/MapServer", {
		});
	    hydrant_string = "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Water_Network/FeatureServer/8"
		sysvalve_string = "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Water_Network/FeatureServer/15"
		//This is the feature layer object
		hydrantLayer = new FeatureLayer(hydrant_string,{
			mode: FeatureLayer.MODE_SNAPSHOT,
            infoTemplate: template,
            outFields: ["*"]
		});
		sysvalveLayer = new FeatureLayer(sysvalve_string,{
			mode: FeatureLayer.MODE_SNAPSHOT,
            infoTemplate: template,
            outFields: ["*"]
		});
        query = new Query();
		
		function execute (evt) {
			var asset,
			task,
			symboltype;
			if(evt.currentTarget.id == "execute-query-valve"){
				asset = "valve";
				task = new QueryTask(sysvalve_string);
				symboltype = symbol;
			}
			else if (evt.currentTarget.id == "execute-query-hydrant"){
				asset = "hydrant";
				task = new QueryTask(hydrant_string);
				symboltype = symbol2;
			};
			console.log(evt.currentTarget.id)
			
			//if you use query.text that looks for display field the query where you can write the query. Notice single quotes for the string fields
			query.where = dom.byId("field-" + asset).value + " " + dom.byId("operator-" + asset).value + " '" + dom.byId("value-" + asset).value + "'";
			task.executeForCount(query, function(count){dom.byId("count-" + asset).innerHTML = count});
			//this executes a function based on the query results the input of the function is a featureset of the query
			task.execute(query, showResults);

			function showResults (results) {
				map.graphics.clear();
				console.log(results);
				var resultItems = [],
				resultCount = results.features.length,
				resultFeatures = results.features;
				for (var i=0; i<resultCount; i++){
					var graphic = resultFeatures[i];
					graphic.setSymbol(symboltype);
					//graphic.setInfoTemplate(template);
					map.graphics.add(graphic);
				}
				for (var i = 0; i < resultCount; i++) {
					var featureAttributes = results.features[i].attributes;
					for (var attr in featureAttributes) {
					if(attr == "facilityid"){
					resultItems.push("<b>" + attr + ":</b>  " + featureAttributes[attr] + "<br>")};
					};
					resultItems.push("<br>");
				};
				dom.byId("queryinfo-" + asset).innerHTML = resultItems.join("");
			};
		
			function showResults2 (results) {
				map.graphics.clear();
				var resultItems = [];
				var resultCount = results.features.length;
				resultFeatures = results.features;
				for (var i=0; i<resultCount; i++){
					var graphic = resultFeatures[i];
					graphic.setSymbol(symbol2);
					//graphic.setInfoTemplate(template);
					map.graphics.add(graphic);
				}
				for (var i = 0; i < resultCount; i++) {
					var featureAttributes = results.features[i].attributes;
					for (var attr in featureAttributes) {
						resultItems.push("<b>" + attr + ":</b>  " + featureAttributes[attr] + "<br>");
					}
					resultItems.push("<br>");
				}
				dom.byId("queryinfo-" + asset).innerHTML = resultItems.join("");
			}
		};
	
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
		};
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
		//methods to start geolocator, search, basemapGallery, and add layers
		geoLocate.startup();
		search.startup();
		basemapGallery.startup();
		map.addLayers([hydrantLayer,sysvalveLayer, dynamicMapServiceLayer]);
		
		//Set default symbol properties
		symbol.setStyle(SimpleMarkerSymbol.STYLE_CIRCLE);
		symbol.setSize(25);
		symbol.setColor(new Color([200,255,0,0.5]));
		
		symbol2.setStyle(SimpleMarkerSymbol.STYLE_CIRCLE);
		symbol2.setSize(25);
		symbol2.setColor(new Color([251,104,105,0.5]));
		
		//Set default query properties
		query.returnGeometry = true;
        query.outFields = ["*"];
		query.outSpatialReference = sr;
		
		// These are the query handlers
		valveclick = on(dom.byId("execute-query-valve"), "click", execute)
		hydrantclick = on(dom.byId("execute-query-hydrant"), "click", execute);
		
		//The parser function allows the dojo to be configured within the html node
		parser.parse();
      });