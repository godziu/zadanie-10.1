
var progressBar = document.querySelector('.progress-bar');
var tmplMain = document.getElementById('main-carousel').innerHTML;
var tmplItm = document.getElementById('template-items').innerHTML;

Mustache.parse(tmplItm);

var listItems = '';

for(var i = 0; i < carouselItems.length; i++) {
  listItems += Mustache.render(tmplItm, carouselItems[i]);
}

var fullProductList = Mustache.render(tmplMain, {carousel: listItems});
result.innerHTML = fullProductList;

var flkty = new Flickity( '.main-carousel', {
  pageDots: false,
  hash: true,
  cellAlign: 'left',
});

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

document.querySelector('#reset').addEventListener('click', function() {
  flkty.select(0);
});

window.initMap = function() {
	var map = new google.maps.Map(document.getElementById('map'),{
		zoom: 8, center: carouselItems[0].coords
	});

	for (var i = 0; i < carouselItems.length; i++) {
		var marker = new google.maps.Marker({
			position: carouselItems[i].coords,
			map: map
		});

		flkty.on('change', function(i){
			map.panTo(carouselItems[i].coords);
			map.setZoom(10);
		});		
	};

 	for(let key in carouselItems){
        var allMarkers = new google.maps.Marker({position: carouselItems[key].coords, map: map});
        allMarkers.addListener('click', function(){
        	flkty.select(key);
    	});  
    }
}