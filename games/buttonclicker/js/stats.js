function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
mc = document.getElementById("mc")
rc = document.getElementById("rc")
cc = document.getElementById("cc")   
if (getCookie("mult") == "") {
  var mult = 1
}
else {
      var multa = getCookie("mult")
      var mult = +(multa);
      }
if (getCookie("r") == "") {
  var r = 1
}
else {
      var ra = getCookie("r")
      var r = +(ra);
      }
if (getCookie("score") == "") {
var score = 0
}
else {
var scorea = getCookie("score")
var score = +(scorea);
}
mc.innerHTML = mult.toFixed(1)
rc.innerHTML = r.toFixed(1)
cc.innerHTML = cl.toFixed(1)
mb = document.getElementById("mb") 
rb = document.getElementById("rb")
cb = document.getElementById("cb")
multip = 200 * ((mult - 0.1) * 1.2)
multipl = multip.toFixed()
mb.innerHTML = "Add 0.1 to multi (Cost " + multipl + ")"
re = 3000 * ((r - 0.1) * 1.3)
reb = re.toFixed()
rb.innerHTML = "Set Multi And score to 1, Add 1 rebirth (Cost " + reb + ")"
function addmulti() {
  multip = 200 * ((mult - 0.1) * 1.2)
  if (score >= multip) {
  score -= multip
  mult += 0.1
  mc.innerHTML = mult.toFixed(1)
  stf = score.toFixed(1)
  b.innerHTML = "Score: " + stf.toString()
  document.cookie = "score=" + score;
  document.cookie = "mult=" + mult;
    multip = 200 * ((mult - 0.1) * 1.2)
    multipl = multip.toFixed()
  mb.innerHTML = "Add 0.1 to multi (Cost " + multipl + ")"
  }

  else {
    alert("Your score is not high enough")
  }
}
function Rebirth() {
  re = 200 * ((r - 0.1) * 1.3)
  if (score >= re) {
  score = 0
  r += 1
  car(r)
  rc.innerHTML = r.toFixed(1)
  stf = score.toFixed(1)
  b.innerHTML = "Score: 0"
  mult = 1
  mc.innerHTML = "1"
  multip = 200 * ((mult - 0.1) * 1.2)
  multipl = multip.toFixed()
  mb.innerHTML = "Add 0.1 to multi (Cost " + multipl + ")"
  document.cookie = "score=0";
  document.cookie = "r=" + r;
  document.cookie = "mult=1";
  re = 3000 * ((r - 0.1) * 1.2)  
  reb = re.toFixed()
  rb.innerHTML = "Set Multi And score to 1, Add 1 rebirth (Cost " + reb + ")"
  }

  else {
    alert("Your score is not high enough")
  }
}
function sclick() {
 addscore()
}
function saddcps() {
  clic = 1000
  if (score >= clic) {
  score -= clic
  alert(cl)
    cl += 1
  alert(cl)
  cc.innerHTML = cl.toFixed(1)
  stf = score.toFixed(1)
  b.innerHTML = "Score: " + stf.toString()
  document.cookie = "score=" + score;
  document.cookie = "cl=" + cl;
  interval = 2000
  setInterval(click, interval)
}
}