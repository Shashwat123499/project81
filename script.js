const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


console.log(canvas);
console.log(ctx);

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(50, 30, 200, 100);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(98, 60, 20, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(120, 85, 20, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(148, 60, 20, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(175, 85, 20, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(198, 60, 20, 0, Math.PI * 2);
ctx.stroke();