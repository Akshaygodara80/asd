// let inpu = "";

let i = 0;
const fun = () => {
  while (i < 10) {
    document.getElementById("if").innerHTML += i + "<br>";
    ++i;
  }
};
fun();

let d = 0;
const fundo = () => {
  do {
    document.getElementById("do").innerHTML += d + "<br>";
    d++;
  } while (d < 10);
};
fundo();

// let f = 0;
const funfor = () => {
  for (f = 0; f < 10; f++) {
    document.getElementById("for").innerHTML += f + "<br>";
  }
};
funfor();

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  else {
    document.getElementById("forif").innerHTML += i + "<br>"; // 1, then 3, 5, 7, 9
  }
}
