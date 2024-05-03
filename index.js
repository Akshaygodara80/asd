const evenodd = () => {
  var number = document.getElementById("num").value;
  // var result = document.getElementById("result");
  if (number % 2 === 0) {
    document.getElementById("result").innerHTML = number + "is even";
  } else {
    document.getElementById("result").innerHTML = number + " is odd";
  }
};

let tab = "";
for (let i = 1; i <= 10; i++) {
  tab += 8 * i + "<br>";
  document.getElementById("table").innerHTML = tab;
}

let x = 10;
let y = 20;

if (x > y && y < x) {
  document.querySelector("#op").innerHTML = "x1";
} else if (x < y && y > x) {
  document.querySelector("#op").innerHTML = "y2";
} else {
  document.querySelector("#op").innerHTML = "nothing";
}


