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
        if (type == "setm") {
        mult = parseInt(prompt("Multiplier"))
        mc.innerHTML = mult.toString()
        document.cookie = "mult=" + mult;
        }
        if (type == "addm") {
        mult += parseInt(prompt("Multiplier"))
        mc.innerHTML = mult.toString()
        document.cookie = "mult=" + mult;
        }
        if (type == "setr") {
        r = parseInt(prompt("Rebirth"))
        rc.innerHTML = r.toString()
        document.cookie = "r=" + r;
        }
        if (type == "addr") {
        r += parseInt(prompt("Rebirth"))
        rc.innerHTML = r.toString()
        document.cookie = "r=" + r;
        }
      }