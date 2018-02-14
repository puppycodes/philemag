// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    rsvp: '[data-rsvp]'
  }
});

// filter functions
var filterFns = {};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

var players = plyr.setup({ "controls": [ "play" ] });

document.querySelector('.js-plyr').addEventListener('playing', function(event) {
        console.log('im playing');
        $(this).addClass('playing');
      });

document.querySelector('.js-plyr').addEventListener('pause', function(event) {
        console.log('im paused');
        $(this).removeClass('playing');
      });
