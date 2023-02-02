/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var cavm = ee.Image("projects/master-thesis-375622/assets/CAVMmap"),
    table = ee.FeatureCollection("projects/master-thesis-375622/assets/aga_circumpolar_geobotanical_2003_shp");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var bioVars_df = ee.Image("WORLDCLIM/V1/BIO");

var test = bioVars_df.clip(cavm)
Map.centerObject(cavm);

Map.setCenter(-5, 75, 2);

//Map.addLayer(cavm, {bands: "b1"});

var annualMeanTemp = test.select('bio01');
var visParams = {
  min: -230.0,
  max: 300.0,
  palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
};

var warmestMonth = bioVars_df.select('bio05');
var visParamsWarmestMonth = {
  min: -96,
  max: 490,
  palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
};

print(cavm)

//Map.addLayer(cavm, "Cavm");
//Map.addLayer(annualMeanTemp, visParams, 'Annual Mean Temperature');
//Map.addLayer(warmestMonth, visParamsWarmestMonth, 'Warmest Month');

