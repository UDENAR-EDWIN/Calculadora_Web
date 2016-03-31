$(document).on("ready",function(){
  var plane = document.getElementById('lienzo');
  var lienzo = plane.getContext('2d');
  var a =  plane.width;
  var l = plane.height;
  var x = 0;
  var y = 0;
  var num = -6;

  lienzo.setLineDash([5, 15]);
  lienzo.lineWidth = 0.8;
  lienzo.globalAlpha = 0.4;
  lienzo.font = "20px Georgia";

  lienzo.beginPath();
  for(var i =0; i<=(a/40); i++){
    lienzo.moveTo(x,0);
    lienzo.lineTo(x,l);
    if(num != 0)lienzo.fillText(num+"",x-5,(l/2)+20);
    x += 40;
    num += 1;
  }
  lienzo.closePath();
  lienzo.stroke();
  num = 6;

  lienzo.beginPath();
  for(var i =0; i<=(l/44); i++){
    lienzo.moveTo(0,y);
    lienzo.lineTo(a,y);
    if(num != 0)lienzo.fillText(num+"",(a/2)+20,y+5);
    num -= 1;
    y += 44;
  }
  lienzo.closePath();
  lienzo.stroke();

  lienzo.globalAlpha = 1;
  lienzo.setLineDash([]);
  lienzo.lineWidth = 3;

  lienzo.beginPath();
  lienzo.moveTo(0,l/2);
  lienzo.lineTo(a,l/2);
  lienzo.closePath();
  lienzo.stroke();

  lienzo.beginPath();
  lienzo.moveTo(a/2,0);
  lienzo.lineTo(a/2,l);
  lienzo.closePath();
  lienzo.stroke();
})
