'use strict';

var tmplMain = document.getElementById('main-carousel').innerHTML;
var tmplItm = document.getElementById('template-items').innerHTML;

Mustache.parse(tmplItm);

var listItems = '';

for(var i = 0; i < carouselItems.length; i++) {
  listItems += Mustache.render(tmplItm, carouselItems[i]);
}


var infos = document.getElementById('infos');

window.initMap = function() {
	// W zmiennej map zapisujemy nowa instancje obiektu Map. 
	var map = new google.maps.Map(document.getElementById('map'), {
		// Podajemy opcje mapy, np zoom i punkt wycentrowania mapy.
		zoom: 4,
		center: carouselItems[0].coords
	});
	
	document.getElementById('center-map').addEventListener('click', function(event){
		event.preventDefault();
		map.panTo(carouselItems[0].coords);
		map.setZoom(10);
	})

	// petla dodajaca marker do kazdego slajdu
	for (var i = 0; i < carouselItems.length; i++) {
		var marker = new google.maps.Marker({
			position: carouselItems[i].coords,
			map: map
		});
		(function(i){
			marker.addListener('click', function(event){
			infos.innerHTML = 'You clicked - ' + carouselItems[i].description;
			flkty.select(i);

			
		});
		
		flkty.on('change', function(i){
				flkty.select(i);
				map.panTo(carouselItems[i].coords);
				map.setZoom(10);
		});
		
		})(i);
		

	}
}

var fullProductList = Mustache.render(tmplMain, {carousel: listItems});
result.innerHTML = fullProductList;


var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});


var flkty = new Flickity('.carousel');

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
