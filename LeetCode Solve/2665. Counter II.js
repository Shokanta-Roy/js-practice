/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  // current value (this will change over time)
  let current = init;

  return {
    increment: function () {
      current++;
      return current;
    },

    
    decrement: function () {
      current--;
      return current;
    },

    
    reset: function () {
      current = init;
      return current;
    },
  };
};



