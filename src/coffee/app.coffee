$(document).ready ->
  if $("#fullpage-wedding").length > 0
    $("#fullpage-wedding").fullpage
      sectionsColor: ["#A52928", "#A4BFDC", "#4A90E2", "#A4BFDC", "#4A90E2", "#A4BFDC", "#4A90E2", "#A52928", "#A4BFDC"],
      anchors: ["hey", "rsvp", "where", "plan", "trip", "stay", "stay-again", "registry", "thanks"],
      menu: "#menu",
      responsiveHeight: 600,
      css3: true,
      onLeave: -> $(".arrow--down").removeClass("bounce")
    $("#fullpage-wedding").css("opacity", 1);
    $(".halfmoon").click ->
      location.href = '/wopwf.html'
    setTimeout (->
      $('.halfmoon').css top: '-70px'
      return
    ), 5000
    return
  if $("#fullpage-wopwf").length > 0
    $("#fullpage-wopwf").fullpage
      sectionsColor: ["#69A169", "#E5675D", "#D8B952", "#E5675D", "#D8B952", "#E5675D", "#D8B952", "#E5675D", "#D8B952"],
      anchors: ["hey", "intro", "plan", "travel", "trip"],
      responsiveHeight: 600,
      css3: true,
      onLeave: -> $(".arrow--down").removeClass("bounce")
    $("#fullpage-wopwf").css("opacity", 1);
  return
