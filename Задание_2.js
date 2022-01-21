//true
function first(){
    const object = {string:1,b:2}
    const string = "string"
if (string in object){
console.log (true)
}
else {
    console.log (false)
}
}
first(string,object);

//false

function second (){
    const object = {a:1,b:2}
    const string = "string"
if (string in object){
console.log (true)
}
else {
    console.log (false)
}
}
second(string,object);