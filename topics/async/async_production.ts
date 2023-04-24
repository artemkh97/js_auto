let async_stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_async_shop_open = false;

function time(ms: number) {

    return new Promise( (resolve, reject) => {
 
       if(is_async_shop_open){
          setTimeout(resolve,ms);
       }
 
       else{
          reject(console.log("Shop is closed"))
       }
     });
 }

//  async/await

async function kitchen(){
    try{
	await time(2000)
	console.log(`${async_stocks.Fruits[0]} was selected`)

	await time(0)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(`${async_stocks.liquid[0]} and ${async_stocks.liquid[1]} added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on ${async_stocks.holder[1]}`)

	await time(3000)
	console.log(`${async_stocks.toppings[0]} as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")
    }

    catch(error){
	 console.log("customer left")
    }
}

kitchen()