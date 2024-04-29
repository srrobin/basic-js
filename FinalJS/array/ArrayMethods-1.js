// Array length  ----------------


const play = ['bat', 'ball', 'mat', 'pad', 'man'];
const mode = ['good', 'bad', 'night', 'light'];
const string = "Javascript Length";

console.log("🚀 ~ length:",  play.length) 
console.log("🚀 ~ typeof length:", typeof play.length) 
console.log("🚀 ~ 1:",  string.length) 

console.log("🚀 ~ toString:",  play.toString()) 
console.log("🚀 ~ typeof toString:", typeof play.toString()) 

console.log("🚀 ~ at:",  play.at(2)) 
console.log("🚀 ~ at:",  play.at(-1)) 
console.log("🚀 ~ at:",  play[2]) 

console.log("🚀 ~ join:",play.join("-")) 

console.log("🚀 ~ pop:", play.pop()) 
console.log("🚀 ~ push:",play.push("robin")) 
console.log("🚀 ~ push:",play) 

console.log("🚀 ~ shift:",play.shift()) 
console.log("🚀 ~ shift:",play.unshift("robin")) 
console.log("🚀 ~ shift:",play) 




const playing = ['bat', 'ball', 'mat', 'pad', 'man'];
console.log("🚀 ~ copyWithin:", playing.copyWithin(3,0,2))
console.log("🚀 ~ copyWithin:", playing.splice(3,0,2))




console.log("🚀 ~ splice:",playing.splice(3,1,"robin","am"))
console.log("🚀 ~ splice 111 :",playing)
console.log("🚀 ~ toSpliced :",playing.toSpliced(0,2))
console.log("🚀 ~ array----- :",playing)
console.log("🚀 ~ slice:",playing.slice(0,3))


const arr1 = [1, 2, [3, 4]];
const arr2 = [1, 2, [3, 4, [5, 6]]];
const arr3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

console.log("🚀 ~ flat 1:",arr1.flat()) 
console.log("🚀 ~ flat 2:",arr2.flat(2)) 
console.log("🚀 ~ flat 3:",arr3.flat(4))  
console.log("🚀 ~ flat 4:",arr3.flat(Infinity))  