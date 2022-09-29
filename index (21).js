//HACKERRANK CERTIFICATION Q DATA FINDER


function dataFinder(data) {
  // Write your code here
  return function find(minRange, maxRange, value) {

    if (maxRange > data.length - 1) {
      throw new Error('invalid Range')
    }

    if (maxRange < minRange) {
      throw new Error('invalid Range')
    }

    if (data.length === 0) {
      throw new Error('invalid Range')
    }

    for (let i = minRange; i <= maxRange; i++) {
      if (data[i] === value) {
        return true;
      }

    }
    return false

  }
}






