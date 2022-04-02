
mc = document.getElementById("mc")
rc = document.getElementById("rc")      
cookies = document.cookie
cookiea = cookies.split(";")[1]
cookieb = cookies.split(";")[0]
if (cookieb.length == cookieb.replace("score=", "").length){
if (cookieb == "" || !cookieb) {
  var mult = 1
  alert(mult)
}
else {
      var multa = cookieb.replace("mult=", "")
      alert(multa)
      var mult = +(multa);
  alert(mult)
      }
}
else {
if (cookiea == "" || !cookiea) {
  var mult = 1
  alert(mult)
}
else {
      var multa = cookiea.replace("mult=", "")
      alert(multa)
      var mult = +(multa);
  alert(mult)
      }
  cookiea = cookieb
}
mc.innerHTML = mult
function addmulti() {
  if (score > 199) {
  score -= 200
  mult += 0.1
  mc.innerHTML = mult.toFixed(1)
  b.innerHTML = "Score: " + score.toString()
  document.cookie = "score=" + score;
  document.cookie = "mult=" + mult;
  }
  else {
    alert("Your score is not high enough")
  }
}