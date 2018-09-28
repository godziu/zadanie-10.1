var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
var progressBar = document.querySelector('.progress-bar')


var flkty = new Flickity( '.main-carousel', {
  pageDots: false,
  hash: true,
  cellAlign: 'left',
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

document.querySelector('#reset').addEventListener('click', function() {
  flkty.select(0);
});

