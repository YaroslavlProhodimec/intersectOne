let arrOne = [1, 1, 3, 9, 8];
let arrTwo = [1, 7, 8];

const intersect = (arrOne, arrTwo) => {
  let arrNew = [];

  let map = arrOne.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < arrTwo.length; i++) {
    let current = arrTwo[i];
    let count = map[current];
    if (count && count > 0) {
      arrNew.push(current);
      map[current] -= 1;
    }
  }
  return arrNew;
};
console.log(intersect(arrOne, arrTwo));
