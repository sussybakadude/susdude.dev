
      if (cookiea == "" || !cookiea) {
      var score = 0
      }
      else {
      var scorea = cookiea.replace("score=", "")
      var score = +(scorea);
      }
      var b = document.getElementById("b")
  stf = score.toFixed(1)
  b.innerHTML = "Score: " + stf.toString()
      function addscore() {
      var b = document.getElementById("b")
        score += mult
  stf = score.toFixed(1)
  b.innerHTML = "Score: " + stf.toString()
        document.cookie = "score=" + score.toString();
      }