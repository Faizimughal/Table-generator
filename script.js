function table() {
  let a = document.getElementById("input").value;
  a.innerHTML = "";
  let number = Number(a);
  let span = document.getElementById("number");
  span.innerHTML = number;
  let output = document.getElementById("output");
  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    output.innerHTML += number + " x " + i + " = " + result + "<br>";
  }
  if (output.innerHTML.trim() === " ") {
    output.style.border = "none";
  } else {
    output.style.border = "2px solid rgb(212, 38, 67)";
  }
}
