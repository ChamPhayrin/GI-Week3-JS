function todaysExercise(dailyExercise) { 
  let exercise = `Today's exercise: ${dailyExercise}` 

  function exerciseAlert() { 
    console.log(exercise)
  }

  return exerciseAlert 
}

console.log(`${'*'.repeat(10)} Start of Easy challenge ${'*'.repeat(10)}`)

const exerciseAlert = todaysExercise('running')
exerciseAlert() 

console.log(`${'*'.repeat(10)} End of Easy challenge ${'*'.repeat(10)}`)