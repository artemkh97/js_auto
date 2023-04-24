let stocks1 = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = true;
let orderPromise = ( time: number, work: () => void ) => {

    return new Promise( ( resolve, reject )=>{
  
      if( is_shop_open ){
  
        setTimeout(()=>{
  
         // work is 👇 getting done here
          resolve( work(
          ) )
  
  // Setting 👇 time here for 1 work
         }, time)
  
      }
  
      else{
        reject( console.log("Our shop is closed") )
      }
  
    })
  }

  // step 1
  orderPromise(2000,()=>console.log(`${stocks1.Fruits[0]} was selected`))

// step 2
.then(()=>{
  return orderPromise(0,()=>console.log('production has started'))
})

// step 3
.then(()=>{
  return orderPromise(2000, ()=>console.log("Fruit has been chopped"))
})

// step 4
.then(()=>{
  return orderPromise(1000, ()=>console.log(`${stocks1.liquid[0]} and ${stocks1.liquid[1]} added`))
})

// step 5
.then(()=>{
  return orderPromise(1000, ()=>console.log("start the machine"))
})

// step 6
.then(()=>{
  return orderPromise(2000, ()=>console.log(`ice cream placed on ${stocks1.holder[1]}`))
})

// step 7
.then(()=>{
  return orderPromise(3000, ()=>console.log(`${stocks1.toppings[0]} as toppings`))
})

// Step 8
.then(()=>{
  return orderPromise(2000, ()=>console.log("Serve Ice Cream"))
})

.catch(()=>{
    console.log("Customer left")
  })

// finally
// .finally(()=>{
//     console.log("end of day")
//   })