
var progressBar = document.querySelector('.progress-bar')
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































// var elem = document.querySelector('.carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });

// var flkty = new Flickity( '.carousel', {

// });

// var flkty = new Flickity('.carousel');

// var progressBar = document.querySelector('.progress-bar')

// flkty.on( 'scroll', function( progress ) {
//   progress = Math.max( 0, Math.min( 1, progress ) );
//   progressBar.style.width = progress * 100 + '%';
// });

// var $carousel = $('.carousel').flickity();

// $('.button-group').on( 'click', '.button', function() {
//   var index = $(this).index();
//   $carousel.flickity( 'select', index );
// });

