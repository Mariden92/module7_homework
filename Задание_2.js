//true
    const object = {string:1,b:2}
    const string = "string"
function first(){

if (string in object){
console.log (true)
}
else {
    console.log (false)
}
}
first(string,object);

//false
    const object = {a:1,b:2}
    const string = "string"
function second (){

if (string in object){
console.log (true)
}
else {
    console.log (false)
}
}
second(string,object);
