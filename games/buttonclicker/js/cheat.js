      function cheat(type) {
        if (type == "set") {
        score = parseInt(prompt("Score"))
        b.innerHTML = "Score: " + score.toString()
        document.cookie = "score=" + score;
        }
        if (type == "add") {
        score += parseInt(prompt("Score"))
        b.innerHTML = "Score: " + score.toString()
        document.cookie = "score=" + score;
        }
      }