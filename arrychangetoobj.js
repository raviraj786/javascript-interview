const arry = ["a","b","c","d"]

const obj = arry.reduce((v ,it , i) => ({...v , [i] : it})  , {})

console.log(obj)