function PII(name, ssn) { 
  let personName = name; 
  let personSSN = ssn; 

  this.getName = function() { 
    return personName;
  };

  this.getSSN = function() { 
    return personSSN;
  };
}

let person = new PII('Lisa', '123-456-7890') 

console.log(`${'*'.repeat(10)} Start of Hard challenge ${'*'.repeat(10)}`)

console.log(person.name) 
console.log(person.ssn) 
console.log(person.getName()) 
console.log(person.getSSN()) 

console.log(`${'*'.repeat(10)} End of Hard challenge ${'*'.repeat(10)}`)