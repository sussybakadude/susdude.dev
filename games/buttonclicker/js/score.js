
      if (cookiea == "" || !cookiea) {
      var score = 0
      }
      else {
      var scorea = cookiea.replace("score=", "")
      var score = +(scorea);
      }
      var b = document.getElementById("b")
      b.innerHTML = "Score: " + score.toString()
      function addscore() {
      var b = document.getElementById("b")
        score += mult
        b.innerHTML = "Score: " + score.toString()
        document.cookie = "score=" + score.toString();
      }