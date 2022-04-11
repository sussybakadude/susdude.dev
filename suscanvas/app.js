var canvas = document.getElementById("draw");
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
function save() {
const canvas = new Canvas("draw");
canvas.saveToStorage( 'mysussycanvas' );
}
function load() {
const canvas = new Canvas("draw");
canvas.restoreFromStorage( 'mysussycanvas' );
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
