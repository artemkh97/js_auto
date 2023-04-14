function greet() {
    console.log('Hello!')
  }

setTimeout(function greet() {
    console.log('Hello!')
  }, 5000)
  
  console.log("I'm being called before greet function.")