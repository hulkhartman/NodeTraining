//es5 var = global

//es6 let, const (block scope)
// index is usable outside the loop
for(var index = 0; index < 10; index++) {
    console.log(index);
}
console.log(index);

//Index is only scoped to the for loop
for(let index = 0; index < 10; index++) {
    console.log(index);
}
console.log(index);