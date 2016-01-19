$(document).ready ->
  $('#fullpage').fullpage
    sectionsColor: ['#A52928', '#A4BFDC', '#4A90E2', '#A4BFDC', '#4A90E2', '#A4BFDC', '#4A90E2', '#A4BFDC'],
    anchors: ['hey', 'rsvp', 'where', 'plan', 'trip', 'stay', 'stay-again', 'thanks'],
    menu: '#menu',
    responsiveHeight: 600,
    css3: true,
    onLeave: -> $('.arrow--down').removeClass('bounce')
  $('#fullpage').css('opacity', 1);
  return
