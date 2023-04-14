const arr = [1, 2, 3]
// const arr = [3, 4, 5]


// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for (let el in arr){
//     console.log(el)
// }

const arrSqr = []
for (let el of arr){
    el = el * el
    arrSqr.push(el)
    console.log(arrSqr)
}



// const developer = {
//     name: 'Ваня',
//     language: 'JavaScript',
//     company: 'Google'
//   }

//   for (const key in developer) {
//     console.log(key)
//     // console.log(developer[key])
//   }
