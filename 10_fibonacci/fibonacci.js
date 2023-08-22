const fibonacci = function(n) {
  if (n < 0) return "OOPS";
  if (n ==0 ) return 0;
  if(n == 1 || n == 2) { return 1 }

  let num1 = 0, num2 = 1, nextNum;

  for (let i = 1; i < n; i++) {
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
  
  return nextNum;
};

// Do not edit below this line
module.exports = fibonacci;
