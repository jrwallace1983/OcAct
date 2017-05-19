// AMD
require([
  "esri/map",
  "esri/layers/ArcGISDynamicMapServiceLayer",
  "esri/tasks/QueryTask",
  "esri/tasks/query",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/InfoTemplate",
  "dojo/_base/Color",
  "esri/SpatialReference",
  "dojo/dom",
  "dojo/on",
  "dojo/domReady!"
], function(Map, ArcGISDynamicMapServiceLayer, QueryTask, Query, SimpleMarkerSymbol, InfoTemplate, Color, SpatialReference, dom, on) {
  //create map and add layer
  map = new Map("mapDiv", {basemap:"streets",});
  sr = new SpatialReference(102100)
  var layer = new ArcGISDynamicMapServiceLayer(
    "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Water_Network/MapServer");
  map.addLayer(layer);

  //initialize query task
  queryTask = new QueryTask("https://sampleserver6.arcgisonline.com/arcgis/rest/services/Water_Network/MapServer/15");

  //initialize query
  query = new Query();
  query.returnGeometry = true;
  query.outFields = ["*"];
  query.outSpatialReference = sr;

  //initialize InfoTemplate
  infoTemplate = new InfoTemplate("Attributes","${*}");

  //create symbol for selected features
  symbol = new SimpleMarkerSymbol();
  symbol.setStyle(SimpleMarkerSymbol.STYLE_CIRCLE);
  symbol.setSize(20);
  symbol.setColor(new Color([200,255,0,0.5]));

  //write "Get Details" button's click event 
  on(dom.byId("runQuery"), "click", executeQueryTask);
  
  function executeQueryTask() {
  //set query based on what user typed in for population;
  query.where = "valvetype = " + dom.byId("population").value;
 
  //execute query
  queryTask.execute(query,showResults);
}
function showResults(featureSet) {
  //remove all graphics on the maps graphics layer
  map.graphics.clear();

  //Performance enhancer - assign featureSet array to a single variable.
  var resultFeatures = featureSet.features;

  //Loop through each feature returned
  for (var i=0, il=resultFeatures.length; i<il; i++) {
    //Get the current feature from the featureSet.
    //Feature is a graphic
    var graphic = resultFeatures[i];
    graphic.setSymbol(symbol);

    //Set the infoTemplate.
    graphic.setInfoTemplate(infoTemplate);

    //Add graphic to the map graphics layer.
    map.graphics.add(graphic);
  }
}
});