/**
 * Converts an integer to its base 7 representation.
 *
 * @param {number} num - The input integer (-10^7 <= num <= 10^7)
 * @return {string} - Base 7 representation of the number
 *
 * Example:
 * convertToBase7(100) => "202"
 * convertToBase7(-7)  => "-10"
 */
var convertToBase7 = function (num) {
  // Edge case
  if (num === 0) return "0";

  // Check if negative
  let isNegative = num < 0;

  // Work with positive value
  num = Math.abs(num);

  let result = "";

  // Convert to base 7
  while (num > 0) {
    result = (num % 7) + result;
    num = Math.floor(num / 7);
  }

  // Add negative sign if needed
  return isNegative ? "-" + result : result;
};
