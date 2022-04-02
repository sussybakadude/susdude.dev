
mc = document.getElementById("mc")
rc = document.getElementById("rc")      
cookies = document.cookie
cookiea = cookies.split(";")[1]
cookieb = cookies.split(";")[0]
if (cookieb.length == cookieb.replace("score=", "").length){
if (cookieb == "" || !cookieb) {
  var mult = 1
}
else {
      var multa = cookieb.replace("mult=", "")
      var mult = +(multa);
      }
}
else {
if (cookiea == "" || !cookiea) {
  var mult = 1
}
else {
      var multa = cookiea.replace("mult=", "")
      var mult = +(multa);
      }
  cookiea = cookieb
}
mc.innerHTML = mult.toFixed(1)
function addmulti() {
  if (score > 199) {
  score -= 200
  mult += 0.1
  mc.innerHTML = mult.toFixed(1)
  stf = score.toFixed(1)
  b.innerHTML = "Score: " + stf.toString()
  document.cookie = "score=" + score;
  document.cookie = "mult=" + mult;
  }
  else {
    alert("Your score is not high enough")
  }
}