      var b = document.getElementById("b")
  stf = score.toFixed(1)
  b.innerHTML = "Score/Money: " + stf.toString()
      function addscore() {
      var b = document.getElementById("b")
        score += mult
  stf = score.toFixed(1)
  b.innerHTML = "Score/Money: " + stf.toString()
        document.cookie = "score=" + score.toString();
        
      }