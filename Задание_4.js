function Devices (name){
    this.type = "Electric device"
}

Devices.prototype.getStatus = function(status){
    console.log (`Device is ${status}`)
}

function TypeOfDevice (name,brand,current,quantity) {
    this.name=name,
    this.brand=brand,
    this.power=current*230
    this.getQuantity = function (){
      console.log (`Quantity is ${quantity}`)
    }
}



TypeOfDevice.prototype = new Devices ()

const lamp = new TypeOfDevice("lamp","Buro",0.2,1)
lamp.getStatus("on")
lamp.getQuantity("2")

const PC = new TypeOfDevice("PC","Acer",3,2)
PC.getStatus("off")
PC.getQuantity("1")

console.log (lamp,PC)