let _ = require('./assets/lodash');

let objArray1 = [
  {
    id: 1,
    name: 'A'
  },
  {
    id: 2,
    name: 'B',
    length: 12
  },
  {
    prop1: 1,
    prop2: 2,
    prop3: 3
  },
  {
    age: 23,
    hair: 'brown'
  }
]

let objArray2 = []

let objArray3 = undefined


let isEqual = _.isEmpty(objArray1);
console.log(isEqual)

let isEqual2 = _.isEmpty(objArray2);
console.log(isEqual2)

let isEqual3 = _.isEmpty(objArray3);
console.log(isEqual3)
