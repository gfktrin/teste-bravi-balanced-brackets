
function isBalanced (bracketSequence) {
    const brackets = "[]{}()"
    const stack = []
  
    for(let bracket of bracketSequence) {
      const bracketsIndex = brackets.indexOf(bracket)
  
      if (bracketsIndex === -1){
        continue
      }
      if (bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
      } else {
        if (
            stack.length === 0 ||
            stack.pop() !== bracketsIndex
        ) {
          return false;
        }
      }
    }
    return stack.length === 0
}

module.exports = isBalanced;