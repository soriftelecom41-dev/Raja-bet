let balance = 1000;

function play(game) {
  const result = Math.random() > 0.5 ? "WIN" : "LOSE";

  if (result === "WIN") {
    balance += 100;
    alert(game + " WIN! +100 টাকা");
  } else {
    balance -= 100;
    alert(game + " LOSE! -100 টাকা");
  }

  document.getElementById("balance").innerText = balance;
}
