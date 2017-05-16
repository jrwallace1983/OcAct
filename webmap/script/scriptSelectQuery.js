// AMD
require([
  "esri/map",
  "esri/layers/ArcGISDynamicMapServiceLayer",
  "esri/tasks/QueryTask",
  "esri/tasks/query",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/InfoTemplate",
  "dojo/_base/Color",
  "dojo/dom",
  "dojo/on",
  "dojo/domReady!"
], function(Map, ArcGISDynamicMapServiceLayer, QueryTask, Query, SimpleMarkerSymbol, InfoTemplate, Color, dom, on) {
  //create map and add layer
  map = new Map("mapDiv");
  var layer = new ArcGISDynamicMapServiceLayer(
    "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer");
  map.addLayer(layer);

  //initialize query task
  queryTask = new QueryTask("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/0");

  //initialize query
  query = new Query();
  query.returnGeometry = true;
  query.outFields = ["CITY_NAME", "STATE_NAME", "POP1990"];

  //initialize InfoTemplate
  infoTemplate = new InfoTemplate("${CITY_NAME}", "Name : ${CITY_NAME}<br/> State : ${STATE_NAME}<br />Population : ${POP1990}");

  //create symbol for selected features
  symbol = new SimpleMarkerSymbol();
  symbol.setStyle(SimpleMarkerSymbol.STYLE_SQUARE);
  symbol.setSize(10);
  symbol.setColor(new Color([255,255,0,0.5]));

  //write "Get Details" button's click event 
  on(dom.byId("runQuery"), "click", executeQueryTask);
  
  function executeQueryTask() {
  //set query based on what user typed in for population;
  query.where = "POP1990 > " + dom.byId("population").value;
 
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