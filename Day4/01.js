let a = 5
let b = 6
let c = 7

function area(a, b, c) {
  let d = (a + b + c) / 2;
  let val = d * (d - a) * (d - b) * (d - c)
  let area = Math.sqrt(val)
  console.log("Area: " + area)
}

area(a,b,c)
