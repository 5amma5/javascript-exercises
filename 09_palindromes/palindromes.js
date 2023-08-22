const palindromes = function (string) {
  const cleanedStr = string.toLowerCase().replace(/[^a-z0-9]/g,"");
  const reversedString = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
