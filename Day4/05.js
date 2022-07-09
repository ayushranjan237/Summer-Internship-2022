let a = prompt("Enter first value : ")
let b = prompt("Enter second value : ")
let c = prompt("Enter third value : ")

function max(a,b,c){
    if(a>b){
        if(a>c)
            return a    
    }
    else{
        if(b>c)
            return a
    }
    return c
}

console.log("Largest is : ",max(a,b,c))
