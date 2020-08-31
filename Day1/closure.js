

let number1 = 10;

function show(param){
    let number2 =20;
    //console.log("Number 1:" + number1);
    //console.log("Number 2:" + number2);

    function innerFunc(){
        console.log("Number 1:" + number1);
        console.log("Number 2:" + number2);
        console.log("Param is: " + param);
    }
    innerFunc();
}

show(30);