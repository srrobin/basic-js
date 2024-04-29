const fruits = ["apples", "oranges", "mango","apples", "carrots", "onions", "brocoli"]
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

console.log("🚀 ~ indexOf:", fruits.indexOf("oranges"))
console.log("🚀 ~ last indexOf:", fruits.lastIndexOf("apples"))
console.log("🚀 ~ includes():", fruits.includes("apples"))



const isapples = (i)=> {
     return i.name === "apples"
}
console.log("🚀 ~ find():", inventory.find(isapples))
console.log("🚀 ~ find(22):", inventory.find((i) => i.name === "apples"))




const indexFun = (value) => {
 return value === "apples"
}
console.log("🚀 ~ findIndex:", fruits.findIndex(indexFun))
console.log("🚀 ~ findIndex:", fruits.findLastIndex(indexFun))


const forShort = ["apples", "oranges", "mango","apples", "carrots", "onions"] 


console.log("🚀 ~ short:", forShort.sort())
console.log("🚀 ~ reverse:", forShort.reverse())
console.log("🚀 ~ reverse:", forShort)

const forShorts = ["apples", "oranges", "mango", "carrots", "onions"] 
console.log("🚀 ~ toSorted:", forShorts.toSorted())
console.log("🚀 ~ toSorted:", forShorts)


console.log("🚀 ~ toReversed:", forShorts.toReversed())
console.log("🚀 ~ toReversed:", forShorts)


const points = [40, 100, 1, 5, 25, 10];
console.log("🚀 ~ sort:", points.sort((a,b) => (a-b) ))
console.log("🚀 ~ sort:", points.sort((a,b) => (b-a) ))
console.log("🚀 ~ sort:", typeof points)

const minValue = (arr) => {
    return Math.min.apply(null, arr)
}
console.log("🚀 ~ minValue ~ minValue:", minValue(points))

const maxValue = (arr) => {
    return Math.max.apply(null, arr)
}
console.log("🚀 ~ maxValue ~ maxValue:", maxValue(points))



const carss = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  const carSort =  cars.sort((a,b) => a.year - b.year)
  console.log("🚀 ~ carSort:", carSort)


