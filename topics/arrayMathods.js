const array = [1, 2, 3, 4, 5]

// метод forEach

// array.forEach((num) => {
//     console.log(num * num)
// })  


// const add3 = (a) => {
//     return a + 3
// }

// array.forEach((num) => {
//     console.log(add3(num))
// })

// const animals = ['cat', 'dog', 'rat', 'bat']

// animals.forEach((entry, index) => {
//     console.log(index)
//     console.log(entry)
// })

// Map()

// const newArr = []
// for (elem of array){
//     newArr.push(elem * elem)
// }

console.log(array.map((elem) => {
    return elem * elem
}))
// console.log(newArr)


