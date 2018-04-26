window.onload = function() {


  //1 - Mapa centrado em Curitiba
	var map = L.map("meumapa", {
		center: [-25.45, -49.25],
		zoom: 12,
		zoomSnap: 0.5,
		zoomDelta: 0.5,
		minZoom: 4.5,
		maxZoom: 18
	});

  //2 - Camadas base

	var osmColorido = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

	var basemap1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

  //Adicionar camada WMS ao mapa
	var wms1 = L.tileLayer.wms("http://www.idea.ufpr.br/geoserver/geonode/wms", {
             layers: "geonode:altimetria_ippuc_curitiba_wgs84",
						 transparent: "true",
             format: "image/png"
             }).addTo(map);

  //Adicionar GeoJson
	var estilogeojson1 = {
      color: "#41ae76",
			fillColor: "#ccebc5",

			weight: 1,
			opacity: 1,
			fillOpacity: 0.1
	    };

  //Aplicar estilos ao criar as camadas GeoJSON
	L.geoJSON(geojson1, {
      style: estilogeojson1
	    }).addTo(map);

  //Adicionar barra de ferramentas
	var barraferramentas = L.control.navbar({
                position: "topleft"
	              }).addTo(map);

	/*//Adicionar segunda barra de barraferramentas
	new L.Toolbar2.Control({
		       positions: "topleft"
	         //actions: [MyAction1, MyAction2]
				 }).addTo(map);*/

				 map.on('click', function(e) {var lat= e.latlng.lat ;
				   var long = e.latlng.lng;
				  alert ("LONGITUDE: " + long + "\nLATITUDE: " + lat)


				});


}
