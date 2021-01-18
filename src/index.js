var names = require("./names.json");
var uniqueRandomArray = require("unique-random-array");

const obj = {
  all: names
};

Object.defineProperty(obj, "random", {
  get: uniqueRandomArray(names),
});

module.exports = obj;