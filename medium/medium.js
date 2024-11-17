function sharePizza(numPeople, numSlices) { 
  let slicePerPerson = Math.ceil((parseInt(numSlices) / parseInt(numPeople)) * 100) / 100

  console.log(`There are ${numPeople} people and ${numSlices} pizza slices. Each person will get ${slicePerPerson} each.`) 
}

console.log(`${'*'.repeat(5)} Start of Medium challenge ${'*'.repeat(5)}`)

sharePizza(3, 10)

console.log(`${'*'.repeat(5)} End of Medium challenge ${'*'.repeat(5)}`)