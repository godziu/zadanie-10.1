
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

// var $carousel = $('.carousel').flickity();

// $('.button-group').on( 'click', '.button', function() {
//   var index = $(this).index();
//   $carousel.flickity( 'select', index );
// });

