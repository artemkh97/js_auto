let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

// 1st Function

let order = (fruit_name: string, call_production: () => void) =>{

    let fruitIndex:number = stocks.Fruits.indexOf(fruit_name)

    setTimeout(function(){
  
      console.log(`${stocks.Fruits[fruitIndex]} was selected`)
  
  // Order placed. Call production to start
     call_production();
    },2000)
  };
  
  // 2nd Function
  
  let production = () =>{
    // blank for now
    setTimeout(()=>{
        console.log("production has started")
        setTimeout(()=>{
          console.log("The fruit has been chopped")
          setTimeout(()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
            setTimeout(()=>{
              console.log("start the machine")
              setTimeout(()=>{
                console.log(`Ice cream placed on ${stocks.holder[1]}`)
                setTimeout(()=>{
                  console.log(`${stocks.toppings[0]} as toppings`)
                  setTimeout(()=>{
                    console.log("serve Ice cream")
                  },10000)
                },3000)
              },2000)
            },1000)
          },1000)
        },2000)
      },0)
  };
  
  // Trigger 👇
  order('strawberry', production);