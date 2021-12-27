if (true){
    var x = "var";
}
console.log(`var: ${x}`);

if (true){
    let y = "let";
    const z = "const";
    console.log(y);
    console.log(z);
}
//console.log(y);
//console.log(z);        block scope라 적용 x

function colorFunctions(){
    if(true){
        var color = "blue";
        console.log(color);
    }
    //console.log(color);   function scope라 적용 x
}

colorFunctions();
//console.log(color);       function scope라 적용 x