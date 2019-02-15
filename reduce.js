let arr=[12,13,89,99,67,68];
let arr2=arr.reduce(function(accum,item) {
    
     return accum+item;
})
console.log(arr2);