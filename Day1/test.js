let user = {
    name: 'chad',
    phone: '654654',
    color: 'blue',
    drink: 'water',
    food: 'beef'    
};

console.log(user.color);
function changeColor(param) {
    user.color = param
    return ( user.name + "'s color changed to " + user.color)
};

res = changeColor("yellow");

console.log(res);