$(document).ready(function() {
  $("#open-menu").click(function() {
    $("aside").animate({
      "left":0}, 2000);
  });
});
$("#close-menu").click(function() {
  $("aside").animate({
    "left":-10000}, 2000);
});
