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











c. stroke();
c.closePath();