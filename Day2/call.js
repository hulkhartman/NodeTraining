console.log("****Starting Calls****");

let time = 1500;
let code = "mewcode";
let name = "chads";

//Callback
/* getCode((returnedCode)=>{
    console.log(returnedCode);
    getName((returnedName)=>{
        console.log(returnedName + "'s code is "+returnedCode);
    });
}); */

//promise ES5
/* getCode()
    .then((returnedCode)=>{
        console.log(returnedCode); 
        getName()
            .then((returnedName)=>{
                console.log(returnedName + "'s code is "+returnedCode)})
            .catch((err)=>{
                console.log(err.message)
            });
    })
    .catch((err)=>{console.log(err.message)
}); */

/* getCode()
    .then((returnedCode)=>{
        console.log(returnedCode); 
        getName()
            .then((returnedName)=>{
                console.log(returnedName + "'s code is "+returnedCode)})
            .catch((err)=>{
                console.log(err.message)
            });
    })
    .catch((err)=>{console.log(err.message)
}); */

async function getUserCode(){
    try{
        let name1 = await getName();
        let code1 = await getCode();
        console.log("name1 is",name1);
        console.log("code1 is",code1);
    }
    catch(error){
        console.log(error.message)
    }
}
getUserCode();



//Callback
/* function getCode(callback){
    setTimeout(()=>{
        if (code != "")
        {
            callback(code)
        } else {
            callback("newcode")
        }
    },time);
}

function getName(callback){
    setTimeout(()=>{
        if (name != "")
        {
            callback(name)
        } else {
            callback("NotChad")
        }
    },time);
} */

//promise
function getCode(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (code != "code")
            {
                resolve(code)
            } else {
                reject(new Error("Unable to get code"))
            }
        },time);
    });
}

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (name != "chad")
            {
                resolve(name)
            } else {
                reject(new Error("Name is blank"))
            }
        },time);
    });
}