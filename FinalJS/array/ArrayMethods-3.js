// every() returns true if all elements in an array pass a test (provided as a function).  every() method does not change the original array


// Check if all the answers in the array is the same:
const survey = [
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "No"}
  ];
 
  const result =  survey.every((el, index) => {
      return index === 0 || el.answer === survey[0].answer
  })
  console.log("🚀 ~ result:", result)


  const arr = [12,70,30,90,20];

  const adult = (age) => {
      return age > 18;
  }
  const  isOdd = (num) => {
   return num % 2 === 1;
  }
  const  isEven = (num) => {
   return num % 2 === 0;
  }
  const checkAdult = arr.every(adult);
  console.log("🚀 ~ checkAdult:", checkAdult)
  const checkOdd = arr.every(isOdd);
  console.log("🚀 ~ checkOdd:", checkOdd)
  const checkEven = arr.every(isEven);
  console.log("🚀 ~ checkEven:", checkEven)
 
// filter 

const arr1 = [12,70,30,90,20];

const not12 = arr1.filter((item) => item !== 12)
console.log("🚀 ~ not12:", not12)

console.log("🚀 ~  Array.from:", Array.from(arr1, (x) => x+1))
console.log("🚀 ~  Array.isArray:", Array.isArray(arr1))
console.log("🚀 ~  join:",arr1.join("*"))

// keys
const keys = Object.keys(arr1)
for (const x of keys) {
     console.log("🚀 ~ x:", x)
}


const reducerFun = (total, num) => {
    return total + num;
}
const  totalFung = arr1.reduce(reducerFun)
console.log("🚀 ~ totalFung:", totalFung)

// with array
const months = ["Januar", "Februar", "Ma", "April"];
const myMonths = months.with(2, "March");
console.log("🚀 ~ myMonths:", myMonths)

const age18 = (value) => {
    return  value > 18;
}
console.log("🚀 ~ some:", arr1.some(age18))
