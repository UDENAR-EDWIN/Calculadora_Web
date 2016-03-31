$(document).on("ready",function()
{
  $("input#btn_more").click(function() {
    setupAnimation();
  })
});

function setupAnimation() {
  var contcal = document.getElementById('content-calc');
  var plano = document.getElementById('lienzo');

  $("#lienzo").addClass("appear");
  $("#content-calc").addClass("translate");
}
