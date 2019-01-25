//โจทย์
//let add = x=>y => x+y
//add(2)(3) //5

// non-arrow curry function
function add(x){
   return function(y){
   	return x+y;
   }
}
console.log(add(2)(3));
//traditional function

let add1 = function(x,y){
    return x+y;
}
console.log(add1(2,3))

