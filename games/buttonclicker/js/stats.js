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
  if (cname == "score" || cname ==  "cl" || cname ==  "r") {
    return 0;
  }
  else {
    return 1;    
  }
}
data = getCookie("data").split(":")
mult = +getCookie("mult") || data[0]
score = +getCookie("score")  || data[1]
r = +getCookie("r") || data[2]
cl = +getCookie("cl") || data[3]
window.onbeforeunload = {
  document.cookie = "data=" + mult.toString().toFixed() + ":" + score.toString().toFixed() + ":" + r.toString().toFixed() + ":" + cl.toString().toFixed()
}
mc = document.getElementById("mc");
rc = document.getElementById("rc");
cc = document.getElementById("cc");  
mb = document.getElementById("mb"); 
rb = document.getElementById("rb");
cb = document.getElementById("cb");
mc.innerHTML = mult.toFixed(1);
rc.innerHTML = r.toFixed(1);
cc.innerHTML = cl.toFixed(1);
multip = 200 * ((mult - 0.1) * 1.2);
multipl = multip.toFixed();
mb.innerHTML = "Add 0.1 to multi (Cost " + multipl + ")";
re = 3000 * ((r + 0.1) * 1.3);
reb = re.toFixed();
rb.innerHTML = "Set Multi And score to 1, Add 1 rebirth (Cost " + reb + ")";
function addmulti() {
  multip = 200 * ((mult - 0.1) * 1.2);
  if (score >= multip) {
  score -= multip;
  mult += 0.1;
  mc.innerHTML = mult.toFixed(1);
  stf = score.toFixed(1);
  b.innerHTML = "Score: " + stf.toString();
    multip = 200 * ((mult - 0.1) * 1.2);
    multipl = multip.toFixed();
  mb.innerHTML = "Add 0.1 to multi (Cost " + multipl + ")";
  }

  else {
    alert("Your score is not high enough");
  }
}
function Rebirth() {
  re = 3000 * ((r - 0.1) * 1.3);
  if (score >= re) {
  score = 0;
  r += 1;
  rc.innerHTML = r;
  stf = score.toFixed(1);
  b.innerHTML = "Score: 0";
  mult = 1;
  mc.innerHTML = "1";
  multip = 200 * ((mult - 0.1) * 1.2);
  multipl = multip.toFixed();
  mb.innerHTML = "Add 0.1 to multi (Cost " + multipl + ")";
  re = 3000 * ((r - 0.1) * 1.2);  
  reb = re.toFixed();
  rb.innerHTML = "Set Multi And score to 1, Add 1 rebirth (Cost " + reb + ")";
  }

  else {
    alert("Your score is not high enough");
  }
}
function sclick() {
 addscore();
}
function saddcps() {
  clic = 1000;
  if (score >= clic) {
  score -= clic;
  alert(cl);
    cl += 1;
  alert(cl);
  cc.innerHTML = cl.toFixed(1);
  stf = score.toFixed(1);
  b.innerHTML = "Score: " + stf.toString();
  interval = 2000;
  setInterval(click, interval);
}
}