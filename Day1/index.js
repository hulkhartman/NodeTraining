console.log("Before");

//setTimeout(function(){ same as below
/* setTimeout(()=>{
    console.log('Done!');
},3000); */
let user = getUser();
//doesnt work because result isnt ready yet
console.log(user.id);

console.log("After");

function getUser(){
    //setTimeout(function(){ same as below
    setTimeout(()=>{
        //console.log('Done!');
        return {
            id : 1,
            name: 'John',
            email: 'john@example.com'
        }
    },3000);
}

/* //Array - element
let colors = ['Green','Red', 'Yellow'];
console.log(colors[2]);

//Object - property
let user = {
    name: 'john',
    phone: '58585',
    office: '98749087'
};
console.log(user.name); */