const faces = ["⚀","⚁","⚂","⚃","⚄","⚅"];
let you = 0, cpu = 0;
document.getElementById("roll").onclick = () => {
  const a = Math.floor(Math.random() * 6);
  const b = Math.floor(Math.random() * 6);
  document.getElementById("you").textContent = faces[a];
  document.getElementById("cpu").textContent = faces[b];
  let msg = "Tie!";
  if (a > b) { you++; msg = "You win!"; }
  if (b > a) { cpu++; msg = "Computer wins!"; }
  document.getElementById("result").textContent = msg;
  document.getElementById("score").textContent = "You " + you + " - " + cpu + " Computer";
};
