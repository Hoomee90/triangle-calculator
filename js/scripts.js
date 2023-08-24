//Business Logic
function calculateTriangle(a, b, c) {
  return a && b && c ?
  a + b <= c || a + c <= b || c + b <= a ? "not a triangle"
  : a === b && b === c ? "equilateral"
  : a === b || a === c || b === c ? "isosceles"
  : "scalene" : "nonexistent";
}

//UI logic
window.addEventListener("load", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const sideAInput = parseInt(document.querySelector("#sideA").value);
    const sideBInput = parseInt(document.querySelector("#sideB").value);
    const sideCInput = parseInt(document.querySelector("#sideC").value);
    const outputNode = document.querySelector("h3#output");

    const result = calculateTriangle(sideAInput, sideBInput, sideCInput);
    outputNode.innerHTML = "That triangle is " + result;
  })
});