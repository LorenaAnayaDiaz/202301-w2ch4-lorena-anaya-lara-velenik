class CodersArray {
  constructor(...values) {
    let myArray = {};
    this.myArray = myArray;
    for (let i in values) {
      this.myArray[i] = values[i];
    }
    console.log(myArray);
  }

  //LENGTH
  pseudoLength() {
    let counter = 0;
    for (let i in this.myArray) {
      counter++;
    }
    return counter;
  }

  //PUSH
  pseudoPush(...values) {
    for (let i in values) {
      this.myArray[this.pseudoLength()] = values[i];
    }
    return this.pseudoLength();
  }

  //SOME
  pseudoSome(value) {
    for (let i of Object.values(this.myArray)) {
      if (i === value) {
        return true;
      }
    }
    return false;
  }

  //FIND
  pseudoFind(value) {
    for (let i of Object.values(this.myArray)) {
      if (i === value) {
        return value;
      }
    }
  }

  //FILTER
  pseudoFilter(condition) {
    let myFilteredArray = {};
    this.myFilteredArray = myFilteredArray;
    let counter = 0;

    for (let i of Object.values(this.myArray)) {
      if (condition(i)) {
        this.myFilteredArray[counter] = i;
        counter++;
      }
    }
    return myFilteredArray;
  }

  //MAP
  pseudoMap(condition) {
    let myMappedArray = {};
    this.myMappedArray = myMappedArray;
    let counter = 0;

    for (let i of Object.values(this.myArray)) {
      this.myMappedArray[counter] = condition(i);
      counter++;
    }
    return myMappedArray;
  }
}

const numbers = new CodersArray(3, 8, 10, 2);

console.log(numbers.pseudoLength());
console.log(numbers.pseudoPush(1, 3, 44));
console.log(numbers);
console.log(numbers.pseudoSome(44));
console.log(numbers.pseudoFind(10));
console.log(numbers.pseudoFilter((num) => num % 2 === 0));
console.log(numbers.pseudoMap((num) => num * 3));
