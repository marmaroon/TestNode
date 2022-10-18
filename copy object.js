const personOne = {
    name: 'Bob',
    age: 21 
  }
  
  
function increasePersonAge (person) {
    const updatePerson = Object.assign({},person) // person - название переменной
    updatePerson.age += 1
    return updatePerson
  }
  
const updatePersonOne = increasePersonAge(personOne)

console.log(personOne.age)
console.log(updatePersonOne.age)


// const personTwo = Object.assign({},person)