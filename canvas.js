var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d')

c.beginPath()
c.moveTo(300,200);
c.lineTo(400,100);
c.lineTo(500,200);
c.lineTo(300,200);
c.moveTo(350,200);
c.lineTo(250,300);
c.lineTo(500,300);
c.lineTo(455,250);
c.lineTo(415,200);
c.moveTo(280,400);
c.moveTo(350,300);
c.lineTo(250,400);
c.lineTo(455,400);
c.lineTo(350,300);
c.moveTo(310,400);
c.lineTo(310,470);
c.moveTo(390,400);
c.lineTo(390,470);
c.lineTo(310,470);
c. stroke();
c.closePath();