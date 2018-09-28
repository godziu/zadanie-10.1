'use strict';

var tmplMain = document.getElementById('main-carousel').innerHTML;
var tmplItm = document.getElementById('template-items').innerHTML;

Mustache.parse(tmplItm);

var listItems = '';

for(var i = 0; i < carouselItems.length; i++) {
  // console.log(myObject);
  listItems += Mustache.render(tmplItm, carouselItems[i]);
  // console.log(listItems);
}

var fullProductList = Mustache.render(tmplMain, {carousel: listItems});
// console.log(listItems);
result.innerHTML = fullProductList;


var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

var flkty = new Flickity( '.carousel', {

});


var flkty = new Flickity('.carousel');

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// ====================================================

var smoothPanAndZoom = function(map, zoom, coords){
	var jumpZoom = zoom - Math.abs(map.getZoom() - zoom);
		jumpZoom = Math.min(jumpZoom, zoom -1);
		jumpZoom = Math.max(jumpZoom, 3);
		smoothZoom(map, jumpZoom, function(){
			smoothPan(map, coords, function(){
				smoothZoom(map, zoom); 
			});
		});
	};

var smoothZoom = function(map, zoom, callback) {
		var startingZoom = map.getZoom();
		var steps = Math.abs(startingZoom - zoom);

if(!steps) {
	if(callback) {
		callback();
		}
	return;
}

var stepChange = - (startingZoom - zoom) / steps;

var i = 0;

var timer = window.setInterval(function(){
	if(++i >= steps) {
		window.clearInterval(timer);
		if(callback) {
			callback();
			}
}

map.setZoom(Math.round(startingZoom + stepChange * i));
		}, 80);
	};

// =====================================================


var infos = document.getElementById('infos');

window.initMap = function() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  var coords2 = {lat: -25.363, lng: 134.044};
  var coords3 = {lat: -25.363, lng: 137.044};

  document.getElementById('center-map').addEventListener('click', function(event){
	event.preventDefault();
	map.panTo(coords2);
	map.setZoom(10);
});

  document.getElementById('center-smooth').addEventListener('click', function(event){
	event.preventDefault();
	smoothPanAndZoom(map, 7, uluru);
});
		

  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});

  var markerOne = new google.maps.Marker({
			position: uluru,
			map: map
		});

  markerOne.addListener('click', function(){
  	infos.innerHTML = 'you clicked markerOne';

		});

  var markerTwo = new google.maps.Marker({
			position: coords2,
			map: map
		});

  markerTwo.addListener('click', function(){
			infos.innerHTML = 'You clicked markerTwo';
		});
  
  var markerThree = new google.maps.Marker({
			position: coords3,
			map: map
		});

  markerThree.addListener('click', function(){
			infos.innerHTML = 'You clicked markerThree';
		});
}
