function getFullName(firstName, lastName) {
  let fullName = firstName + lastName;
  return fullName;
}
let result = getFullName("Arti", "Gupta");

let expected = "Arti Gupta";

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

let final = getFullName("Arti", "Gupta");

let expected = "ArtiGupta";

let final = getFullName("Arti", "Gupta");
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

function totalAmount(amount, taxRate) {
  let totalAmt = amount + amount * taxRate;
}
