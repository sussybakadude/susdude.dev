var canvas = document.getElementById("draw");
var img=new Image();
img.onload=function(){
    draw.drawImage(img,0,0);
}
img.src=localStorage.getItem("imgCanvas");
var ctx = canvas.getContext("2d");
window.checked = "round"
resize();
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
var pos = { x: 0, y: 0 };
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}
function draw(e) {
  if (e.buttons !== 1) return;
  ctx.beginPath();
  ctx.lineWidth = document.getElementById("size").value;;
  ctx.lineCap = window.checked;
  ctx.strokeStyle = document.getElementById("hex").value;
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}
window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);
