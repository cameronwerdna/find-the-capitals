//function which takes a word and returns the index of capitalized characters.
const capitals = function (word) {
    let letters = word.split('')
    let result = []
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === letters[i].toUpperCase()) {
      result.push(i)
      }
    }
    return result
  };



console.log(capitals('ChErRy')) // => [0, 2, 4]
console.log(capitals('CATASTROPhe')) // => [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(capitals('HappY')) // => [0, 4]