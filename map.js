mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnNhaXRhIiwiYSI6ImNtM2ZkZ2MzbjAyeG4ybXM5a2RudGxvaGoifQ.VlAqmK3KOPW0QCtBgia6Tw';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [0, 0],
  zoom: 2
});

map.on('load', () => {

    //1. Global Canopy Height
  //--------------------------------------------------------
  map.addSource('canopy_height-geotiff', {
    type: 'raster',
    url: 'mapbox://johnsaita.9pmkw92a',
    tileSize: 256
  });
  map.addLayer({
    id: 'canopy_height-layer',
    type: 'raster',
    source: 'canopy_height-geotiff',
    layout: {
        visibility: 'none' // initially hidden
    },
    paint: {}
  });

        //2. Esri LULC 2020
  //--------------------------------------------------------
  map.addSource('esri_lulc-geotiff', {
    type: 'raster',
    url: 'mapbox://johnsaita.8x0n3yw5',
    tileSize: 256
  });
  map.addLayer({
    id: 'esri_lulc-layer',
    type: 'raster',
    source: 'esri_lulc-geotiff',
    layout: {
        visibility: 'none' // initially hidden
    },
    paint: {}
  });
  map.addSource('esri_lulc1-geotiff', {
    type: 'raster',
    url: 'mapbox://johnsaita.8c3mfusf',
    tileSize: 256
  });
  map.addLayer({
    id: 'esri_lulc1-layer',
    type: 'raster',
    source: 'esri_lulc1-geotiff',
    layout: {
        visibility: 'none' // initially hidden
    },
    paint: {}
  });


  //3. Add the GSOC WMS layer as a raster source
  //--------------------------------------------------------
  map.addSource('gsoc-wms', {
    'type': 'raster',
    'tiles': [
      'https://data.apps.fao.org/map/gsrv/gsrv1/gsoc/wms?service=WMS&request=GetMap&layers=GSOCmap1.5.0&styles=&format=image/png&transparent=true&version=1.1.1&srs=EPSG:3857&width=256&height=256&bbox={bbox-epsg-3857}'
    ],
    'tileSize': 256
  });
  map.addLayer({
    'id': 'gsoc-layer',
    'type': 'raster',
    'source': 'gsoc-wms',
    'layout': {
      visibility: 'none' // initially hidden
    },
    'paint': {}
  });

  //4. Global Tree Cover 2000
  //--------------------------------------------------------
  map.addSource('tree_cover2000-geotiff', {
    type: 'raster',
    url: 'mapbox://johnsaita.aepus5p7',
    tileSize: 256
  });
  map.addLayer({
    id: 'tree_cover2000-layer',
    type: 'raster',
    source: 'tree_cover2000-geotiff',
    layout: {
        visibility: 'none' // initially hidden
    },
    paint: {}
  });

   //5. Global Tree Cover 2010
  //--------------------------------------------------------
  map.addSource('tree_cover2010-geotiff', {
    type: 'raster',
    url: 'mapbox://johnsaita.3ulm5jwh',
    tileSize: 256
  });
  map.addLayer({
    id: 'tree_cover2010-layer',
    type: 'raster',
    source: 'tree_cover2010-geotiff',
    layout: {
        visibility: 'none' // initially hidden
    },
    paint: {}
  });

  //6. Global Tree Cover loss
  //--------------------------------------------------------
  map.addSource('tree_cover_loss-geotiff', {
    type: 'raster',
    url: 'mapbox://johnsaita.bmqkfhgu',
    tileSize: 256
  });
  map.addLayer({
    id: 'tree_cover_loss-layer',
    type: 'raster',
    source: 'tree_cover_loss-geotiff',
    layout: {
        visibility: 'none' // initially hidden
    },
    paint: {}
  });

  // 7. tree_potential   
  //--------------------------------------------------------
  map.addSource('tree_potential-geotiff', {
    type: 'raster',
    url: 'mapbox://johnsaita.6uto52r3',
    tileSize: 256
  });
  map.addLayer({
    id: 'tree_potential-layer',
    type: 'raster',
    source: 'tree_potential-geotiff',
    layout: {
        visibility: 'none' // initially hidden
    },
    paint: {}
  });


  //8. Human Modification Index
  //--------------------------------------------------------
  map.addSource('geotiff-source', {
    type: 'raster',
    url: 'mapbox://johnsaita.59qbf4mb',
    tileSize: 256
  });
  map.addLayer({
    id: 'human-modification-layer',
    type: 'raster',
    source: 'geotiff-source',
    layout: {
      visibility: 'none' // initially hidden
    },
    paint: {}
  });


  //9. ELEVATION
  //--------------------------------------------------------
  map.addSource('elevation-geotiff', {
    type: 'raster',
    url: 'mapbox://johnsaita.bzjxvxqn',
    tileSize: 256
  });
  map.addLayer({
    id: 'elevation-layer',
    type: 'raster',
    source: 'elevation-geotiff',
    layout: {
        visibility: 'none' // initially hidden
    },
    paint: {}
  });


  //10. Population Density
  //--------------------------------------------------------
  map.addSource('population_density-geotiff', {
    type: 'raster',
    url: 'mapbox://johnsaita.ala4d3je',
    tileSize: 256
  });
  map.addLayer({
    id: 'population_density-layer',
    type: 'raster',
    source: 'population_density-geotiff',
    layout: {
        visibility: 'none' // initially hidden
    },
    paint: {}
  });


 //11.wetland
 //--------------------------------------------------------
  map.addSource('wetlands', {
    type: 'raster',
    tiles: [
        'https://tiles.arcgis.com/tiles/P8Cok4qAP1sTVE59/arcgis/rest/services/TROP_SUBTROP_WetlandV3_2016_CIFOR3b/MapServer/tile/{z}/{y}/{x}'
    ],
    tileSize: 256
  });
  map.addLayer({
      id: 'wetlands-layer',
      type: 'raster',
      source: 'wetlands',
      layout: {
        visibility: 'none' // initially hidden
    },
      paint: { 'raster-opacity': 1 }
  });


  //12.soil ph
  //--------------------------------------------------------
  map.addSource('soil_ph-geotiff', {
    type: 'raster',
    url: 'mapbox://johnsaita.51ipg5u9',
    tileSize: 256
  });
  map.addLayer({
    id: 'soil_ph-layer',
    type: 'raster',
    source: 'soil_ph-geotiff',
    layout: {
        visibility: 'none' // initially hidden
    },
    paint: {}
  });
});


// Ensure the checkbox is unchecked initially
document.getElementById('toggle-canopy_height-layer').checked = false;
document.getElementById('toggle-gsoc-layer').checked = false;
document.getElementById('toggle-tree_potential-layer').checked = false;
document.getElementById('toggle-human-modification-layer').checked = false;
document.getElementById('toggle-elevation-layer').checked = false;
document.getElementById('toggle-population_density-layer').checked = false;
document.getElementById('toggle-wetlands-layer').checked = false;
document.getElementById('toggle-soil_ph-layer').checked = false;
document.getElementById('toggle-esri_lulc-layer').checked = false;
document.getElementById('toggle-tree_cover2000-layer').checked = false;
document.getElementById('toggle-tree_cover2010-layer').checked = false;
document.getElementById('toggle-tree_cover_loss-layer').checked = false;



// Toggle the layer menu visibility when the button is clicked
//--------------------------------------------------------
document.getElementById('toggle-button').addEventListener('click', () => {
  const layerMenu = document.getElementById('layer-menu');
  layerMenu.style.display = layerMenu.style.display === 'none' ? 'block' : 'none';
});


// Function to show or update the information panel based on the layer ID
function showLayerInfo(layer) {
  const infoPanel = document.getElementById('info-panel');
  const legendImage = document.getElementById('legend-image');
  const description = document.getElementById('description');
  const source = document.getElementById('source');

  // Set the content for each layer
    switch (layer) {
      case 'canopy_height':
        legendImage.src = 'legend/canopy_height.PNG';
        description.innerText = 'This layer shows the global canopy height data, providing information on forest structure and biomass.';
        source.innerText = 'Lang, N., Jetz, W., Schindler, K., & Wegner, J. D. (2022). A high-resolution canopy height model of the Earth. arXiv preprint arXiv:2204.08322';
        break;
  
      case 'esri_lulc':
        legendImage.src = 'legend/esri_lulc.PNG';
        description.innerText = 'The Esri LULC 2020 layer provides land use and land cover data for 2020, useful for environmental and urban studies.';
        source.innerText = 'Esri/Karra, Kontgis, et al. “Global land use/land cover with Sentinel-2 and deep learning.” IGARSS 2021-2021 IEEE International Geoscience and Remote Sensing Symposium. IEEE, 2021.';
        break;
  
      case 'gsoc':
        legendImage.src = 'legend/gsoc.PNG';
        description.innerText = 'This layer represents global soil organic carbon stocks, which is important for studying carbon storage and emissions.';
        source.innerText = 'FAO and ITPS. 2018. Global Soil Organic Carbon Map (GSOCmap) Technical Report. Rome. 162 pp.';
        break;
  
      case 'tree_cover2000':
        legendImage.src = 'legend/tree_cover2000.PNG';
        description.innerText = 'The Global Tree Cover 2000 layer provides data on forest cover at the beginning of the 21st century.';
        source.innerText = 'Hansen et al. / Global Forest Watch/Sexton, J. O et al';
        break;
  
      case 'tree_cover2010':
        legendImage.src = 'legend/tree_cover2010.PNG';
        description.innerText = 'The Global Tree Cover 2010 layer shows forest cover data from 2010, useful for forest change studies.';
        source.innerText = 'Hansen et al. / Global Forest Watch/Hansen et al. / Global Forest Watch/Sexton, J. O et al';
        break;
  
      case 'tree_cover_loss':
        legendImage.src = 'legend/tree_cover_loss.PNG';
        description.innerText = 'This layer shows global tree cover loss over time, helping to monitor deforestation trends.';
        source.innerText = 'Global Forest Watch/Hansen et al. / Global Forest Watch/Sexton, J. O et al';
        break;
  
      case 'tree_potential':
        legendImage.src = 'legend/tree_cover_potential.PNG';
        description.innerText = 'This layer shows the potential for tree cover globally, useful for reforestation studies.';
        source.innerText = 'Global Forest Watch/Hansen et al. / Global Forest Watch/Sexton, J. O et al';
        break;
  
      case 'human-modification':
        legendImage.src = 'legend/human_modification.PNG';
        description.innerText = 'The Human Modification Index layer shows the extent of human impact on natural landscapes.';
        source.innerText = 'NASA, Global Human Modification of Terrestrial Systems https://doi.org/10.7927/edbc-3z60';
        break;
  
      case 'elevation':
        legendImage.src = 'legend/elevation.PNG';
        description.innerText = 'This layer displays elevation data, useful for topographic and terrain analysis.';
        source.innerText = 'SOLARGIS and provided by the Global Solar Atlas (GSA), ';
        break;
  
      case 'population_density':
        legendImage.src = 'legend/population_density.PNG';
        description.innerText = 'This layer shows global population density, useful for demographic and urban planning studies.';
        source.innerText = 'NASA/Goddard Space Flight Center Scientific Visualization Studio, Gridded Population of the World (GPW), Version 3: 1990, 1995, 2000. Gridded Population of the World: Future Estimates, 2015. Center for International Earth Science Information Network (CIESIN), Columbia University; Food and Agricultural Organization (FAO); and Centro Internacional de Agricultura Tropical (CIAT), 2005. Available at (http://sedac.ciesin.columbia.edu/gpw).';
        break;
  
      case 'wetlands':
        legendImage.src = 'legend/wetlands.PNG';
        description.innerText = 'The wetlands layer identifies areas classified as wetlands, important for ecological and conservation studies.';
        source.innerText = 'Gumbricht et al. (2017) An expert system model for mapping tropical wetlands and peatlands reveals South America as the largest contributor. Global Change Biology.DOI: 10.1111/gcb.13689';
        break;
  
      case 'soil_ph':
        legendImage.src = 'legend/soil_ph.PNG';
        description.innerText = 'This layer represents global soil pH levels, essential for agricultural and environmental studies.';
        source.innerText = 'ISRIC/Hengl et at. (2017) DOI: 10.1371/journal.pone.0169748. Data provided as GeoTIFFs with internal compression (co=\'COMPRESS=DEFLATE\'). Measurement units: ';
        break;
  
      default:
        infoPanel.style.display = 'none';
        return;
    }

  // Show the panel if there's valid data
  infoPanel.style.display = 'block';
}

let visibleLayers = []; // Array to keep track of visible layers
// Function to update the information panel for the top visible layer
function updateInfoPanel() {
  if (visibleLayers.length > 0) {
    // Show info for the topmost visible layer
    const topLayer = visibleLayers[visibleLayers.length - 1];
    showLayerInfo(topLayer);
  } else {
    // Hide the info panel if no layers are visible
    document.getElementById('info-panel').style.display = 'none';
  }
}
// Event listeners for each layer checkbox
/// Event listeners for each layer checkbox
document.getElementById('toggle-canopy_height-layer').addEventListener('change', (event) => {
  const layerId = 'canopy_height-layer';
  map.setLayoutProperty(layerId, 'visibility', event.target.checked ? 'visible' : 'none');

  if (event.target.checked) {
    visibleLayers.push('canopy_height');
  } else {
    visibleLayers = visibleLayers.filter(layer => layer !== 'canopy_height');
  }

  updateInfoPanel();
});
document.getElementById('toggle-esri_lulc-layer').addEventListener('change', (event) => {
  const layerId = 'esri_lulc-layer';
  map.setLayoutProperty(layerId, 'visibility', event.target.checked ? 'visible' : 'none');

  if (event.target.checked) {
    visibleLayers.push('esri_lulc');
  } else {
    visibleLayers = visibleLayers.filter(layer => layer !== 'esri_lulc');
  }

  updateInfoPanel();
});



document.getElementById('toggle-gsoc-layer').addEventListener('change', (event) => {
  const layerId = 'gsoc-layer';
  map.setLayoutProperty(layerId, 'visibility', event.target.checked ? 'visible' : 'none');

  if (event.target.checked) {
    visibleLayers.push('gsoc');
  } else {
    visibleLayers = visibleLayers.filter(layer => layer !== 'gsoc');
  }

  updateInfoPanel();
});

document.getElementById('toggle-tree_cover2000-layer').addEventListener('change', (event) => {
  const layerId = 'tree_cover2000-layer';
  map.setLayoutProperty(layerId, 'visibility', event.target.checked ? 'visible' : 'none');

  if (event.target.checked) {
    visibleLayers.push('tree_cover2000');
  } else {
    visibleLayers = visibleLayers.filter(layer => layer !== 'tree_cover2000');
  }

  updateInfoPanel();
});

document.getElementById('toggle-tree_cover2010-layer').addEventListener('change', (event) => {
  const layerId = 'tree_cover2010-layer';
  map.setLayoutProperty(layerId, 'visibility', event.target.checked ? 'visible' : 'none');

  if (event.target.checked) {
    visibleLayers.push('tree_cover2010');
  } else {
    visibleLayers = visibleLayers.filter(layer => layer !== 'tree_cover2010');
  }

  updateInfoPanel();
});

document.getElementById('toggle-tree_cover_loss-layer').addEventListener('change', (event) => {
  const layerId = 'tree_cover_loss-layer';
  map.setLayoutProperty(layerId, 'visibility', event.target.checked ? 'visible' : 'none');

  if (event.target.checked) {
    visibleLayers.push('tree_cover_loss');
  } else {
    visibleLayers = visibleLayers.filter(layer => layer !== 'tree_cover_loss');
  }

  updateInfoPanel();
});

document.getElementById('toggle-tree_potential-layer').addEventListener('change', (event) => {
  const layerId = 'tree_potential-layer';
  map.setLayoutProperty(layerId, 'visibility', event.target.checked ? 'visible' : 'none');

  if (event.target.checked) {
    visibleLayers.push('tree_potential');
  } else {
    visibleLayers = visibleLayers.filter(layer => layer !== 'tree_potential');
  }

  updateInfoPanel();
});

document.getElementById('toggle-human-modification-layer').addEventListener('change', (event) => {
  const layerId = 'human-modification-layer';
  map.setLayoutProperty(layerId, 'visibility', event.target.checked ? 'visible' : 'none');

  if (event.target.checked) {
    visibleLayers.push('human-modification');
  } else {
    visibleLayers = visibleLayers.filter(layer => layer !== 'human-modification');
  }

  updateInfoPanel();
});

document.getElementById('toggle-elevation-layer').addEventListener('change', (event) => {
  const layerId = 'elevation-layer';
  map.setLayoutProperty(layerId, 'visibility', event.target.checked ? 'visible' : 'none');

  if (event.target.checked) {
    visibleLayers.push('elevation');
  } else {
    visibleLayers = visibleLayers.filter(layer => layer !== 'elevation');
  }

  updateInfoPanel();
});

document.getElementById('toggle-population_density-layer').addEventListener('change', (event) => {
  const layerId = 'population_density-layer';
  map.setLayoutProperty(layerId, 'visibility', event.target.checked ? 'visible' : 'none');

  if (event.target.checked) {
    visibleLayers.push('population_density');
  } else {
    visibleLayers = visibleLayers.filter(layer => layer !== 'population_density');
  }

  updateInfoPanel();
});

document.getElementById('toggle-wetlands-layer').addEventListener('change', (event) => {
  const layerId = 'wetlands-layer';
  map.setLayoutProperty(layerId, 'visibility', event.target.checked ? 'visible' : 'none');

  if (event.target.checked) {
    visibleLayers.push('wetlands');
  } else {
    visibleLayers = visibleLayers.filter(layer => layer !== 'wetlands');
  }

  updateInfoPanel();
});

document.getElementById('toggle-soil_ph-layer').addEventListener('change', (event) => {
  const layerId = 'soil_ph-layer';
  map.setLayoutProperty(layerId, 'visibility', event.target.checked ? 'visible' : 'none');

  if (event.target.checked) {
    visibleLayers.push('soil_ph');
  } else {
    visibleLayers = visibleLayers.filter(layer => layer !== 'soil_ph');
  }

  updateInfoPanel();
});





