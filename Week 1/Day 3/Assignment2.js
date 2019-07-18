a = [1,2,3,4,5];

//myEach prototype
Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

console.log("myEach() prototype test:");
a.myEach(function(element) {
  console.log(element);
})


//myEach standalone
function myEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

console.log("\nmyEach() standalone test:");
myEach(a, function(element) {
  console.log(element);
})

//___________________________________________

//myMap prototype
Array.prototype.myMap = function(callback) {
  let result = []

  for (let i = 0; i < this.length; i++) {
    result[result.length] = callback(this[i]);
  }

  return result;
}

console.log("\nmyMap() prototype test:");
console.log(a.myMap(x => x * 2), a.myMap(x => x * 3));

//myMap standalone
function myMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[result.length] = callback(array[i]);
  }
  return result;
}

console.log("\nmyMap() standalone test:");
console.log(myMap(a, x => x * 3), myMap(a, x => x * 4));

//_______________________________________________________

// myFilter prototype
Array.prototype.myFilter = function(callback) {
  let result = [];
  
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result[result.length] = this[i];
    }
  }
  return result;
}

console.log("\nmyFilter prototype test:");
console.log(a.myFilter(x => x > 3), a.myFilter(x => x > 5))

//myFilter standalone
function myFilter(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result[result.length] = array[i];
    }
  }
  return result;
}

console.log("\nmyFilter standalone test:");
console.log(myFilter(a, x => x > 0), myFilter(a, x => x === 3));

//_________________________________________________________________

//mySome prototype

Array.prototype.mySome = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  return false;
}

console.log("\nmySome prototype test:");
console.log(a.mySome(x => x > 5), a.mySome(x => x === 5));

//mySome standalone
function mySome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}

console.log("\nmySome standalone test:");
console.log(mySome(a, x => x > 5), mySome(a, x => x === 5));

//_________________________________________________________________

//myEvery prototype

Array.prototype.myEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  return true;
}

console.log("\nmyEvery prototype test:");
console.log(a.myEvery(x => x > 0), a.myEvery(x => x > 3));

//myEvery standalone
function myEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

console.log("\nmyEvery standalone test:");
console.log(myEvery(a, x => x > 0), myEvery(a, x => x > 3));

//_________________________________________________________________

//myIncludes prototype
Array.prototype.myIncludes = function(value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == value) {
      return true;
    }
  }
  return false;
}

console.log("\nmyIncludes prototype test:");
console.log(a.myIncludes(62), a.myIncludes(3));

//myIncludes standalone
function myIncludes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return true;
    }
  }
  return false;
}

console.log("\nmyIncludes standalone test:");
console.log(myIncludes(a, 62), myIncludes(a, 3));

//_________________________________________________________________

//myIndexOf prototype
Array.prototype.myIndexOf = function(value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == value) {
      return i;
    }
  }
  return -1;
}

console.log("\nmyIndexOf prototype test:");
console.log(a.myIndexOf(62), a.myIndexOf(3));

//myIndexOf standalone
function myIndexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

console.log("\nmyIndexOf standalone test:");
console.log(myIndexOf(a, 62), myIndexOf(a, 3));

//_________________________________________________________________

//myPush prototype
Array.prototype.myPush = function(value) {
  this[this.length] = value;
}

console.log("\nmyPush prototype test:");
a.myPush(6);
console.log(a);

//myPush standalone
function myPush(array, value) {
  array[array.length] = value
}

console.log("\nmyPush standalone test:");
a.myPush(3);
console.log(a);

//_________________________________________________________________

//myLastIndexOf prototype
Array.prototype.myLastIndexOf = function(value) {
  let result = -1;
  for (let i = 0; i < this.length; i++) {
    if (this[i] == value) {
      result = i
    }
  }
  return result;
}

console.log("\nmyLastIndexOf prototype test:");
console.log(a.myLastIndexOf(62), a.myLastIndexOf(3), a.myLastIndexOf(2));

//myIndexOf standalone
function myLastIndexOf(array, value) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      result = i;
    }
  }
  return result;
}

console.log("\nmyIndexOf standalone test:");
console.log(myLastIndexOf(a, 62), myLastIndexOf(a, 3), myLastIndexOf(a, 2));

//__________________________________________________________________________
let o = {
  "Day": "Night",
  "Up": "Down",
  "Left": "Right"
}

// getKeys() prototype
Object.prototype.getKeys = function() {
  let result = []

  for (var i in this) {
    result[result.length] = i;
  }

  return result;
}

console.log("\ngetKeys prototype test:");
console.log(o.getKeys());

// getKeys() standalone
function getKeys(object) {
  let result = []

  for (var i in object) {
    result[result.length] = i;
  }

  return result;
}

console.log("\ngetKeys standalone test:");
console.log(getKeys(o));

//__________________________________________________________________________
// getValues() prototype
Object.prototype.getValues = function() {
  let result = []

  for (var i in this) {
    result[result.length] = this[i];
  }

  return result;
}

console.log("\ngetValues prototype test:");
console.log(o.getValues());

// getValues() standalone
function getValues(object) {
  let result = []

  for (var i in object) {
    result[result.length] = object[i];
  }

  return result;
}

console.log("\ngetValues standalone test:");
console.log(getValues(o));
