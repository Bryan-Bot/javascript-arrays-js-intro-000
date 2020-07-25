var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

<<<<<<< HEAD
function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
=======
var addElementToBeginningOfArray = chocolateBars, fudge => fudge, ...chocolateBars

>>>>>>> 5e89f29b50c944440d1495b9612a15b5fe1720bd
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
<<<<<<< HEAD
function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString];
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
  return chocolateBars;
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}
function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
=======

var accessElementInArray = chocolateBars => chocolateBars[2]

var destructivelyRemoveElementFromBeginningOfArray = chocolateBars => chocolateBars.shift()

var removeElementFromBeginningOfArray = chocolateBars => chocolateBars.splice(1)

var destructivelyRemoveElementFromEndOfArray = chocolateBars => chocolateBars.pop()

var removeElementFromEndOfArray = chocolateBars => chocolateBars.splice(0, chocolateBars.length - 1)
>>>>>>> 5e89f29b50c944440d1495b9612a15b5fe1720bd
