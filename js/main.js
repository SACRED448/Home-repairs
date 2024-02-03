// Slider before and after
$(function() {
  $('.before-and-after').beforeAfter({
    movable: true,
    clickMove: true,
    alwaysShow: true,
    position: 50,
    opacity: 0.4,
    activeOpacity: 1,
    hoverOpacity: 0.8,
    separatorColor: '#fff',
    bulletColor: '#fff',
    arrowColor: '#333',
  });

  $('.before-and-after').beforeAfter();
});
