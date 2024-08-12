
const myNums = [1 , 2 , 3 , 4 , 5 , 6]

let newNums = myNums.reduce( (acc , currentVal) => {
  console.log(`acc is : ${acc} & Current Value is : ${currentVal}`)
  return acc + currentVal ;
},2 )

console.log(newNums)

const shouPing = [
  {
    itemName : "Js course",
    price : 2999,
  },
  {
    itemName : "Phthon",
    price : 5999,
  },
  {
    itemName : "Data Science",
    price : 7999,
  }
]

 let newShouPing = shouPing.reduce( ( acc ,item) =>acc + item.price, 0 )

console.log(newShouPing)











