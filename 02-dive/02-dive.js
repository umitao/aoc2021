data = require('./02-input');

const findEOL = new RegExp(/$/gm);
const findLB = new RegExp(/\r?\n|\r/g);

const placeCommas = data.replace(findEOL, ',');
const singleLineString = placeCommas.replace(findLB, '');

const arrayData = singleLineString.split(',');

let forward = 0;
let down = 0;

const mapped = arrayData.map((element) => {
  if (element.startsWith('f')) {
    forward = forward + Number(element[element.length - 1]);
  }

  if (element.startsWith('d')) {
    down = down + Number(element[element.length - 1]);
  }

  if (element.startsWith('u')) {
    down = down - Number(element[element.length - 1]);
  }
});

console.log(forward);
console.log(down);
console.log(2053 * 1033);
