function addTwo(num:number){
    return num+2;
}

function getValue(myVal:number):string{
    return "shukla";
}

const shukla=(s:string):number=>{
    return 10;
}

function consoleError(errmsg:string):void{
    console.log(errmsg)
}

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}

addTwo(5);

export {}