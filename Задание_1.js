const object = {a:1,b:2}
function fun (){

    for (let key in object) {

    if (object.hasOwnProperty(key)) {

        console.log( key, object[key])
}}}
fun(object);