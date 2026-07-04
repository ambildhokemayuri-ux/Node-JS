

var filename="./data/result.txt";
var fs=require('fs');

fs.readFile(filename,(err,data)=>{            //arrow function 
    if(err){
        throw err;
//console.log("something went wrong");
    }
    else{
console.log(data.toString());
    }
});


  