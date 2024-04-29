const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

  const name =  staffsDetails.forEach((item) => {
    console.log("🚀 ~ name:", item.name)
  });
  

  let total = 0;

  staffsDetails.forEach(({salary}) => {
    total +=salary
  })
  console.log("🚀 ~ total:", total + "TK")

  const numbers1 = [1,2,3,4,5,6];
 
  const mapFun = (value) => {
   return value * 2
  }
  const newmap = numbers1.map(mapFun);
  console.log("🚀 ~ newmap:", newmap)
