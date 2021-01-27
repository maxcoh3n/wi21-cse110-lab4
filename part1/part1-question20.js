
function printTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();    
    console.log(time)
}


var intervalID = setInterval(printTime, 1000 );
// setInterval(()=>clearInterval(intervalID), 3000)



// function myCallback(a, b)
// {
//  // Your code here
//  // Parameters are purely optional.
//  console.log(a);
//  console.log(b);
// }