class Devices {
    constructor (status) {
      this.type="Electric device"
      this.status=status
    }
    getStatus (){
    }
  }
  
  class TypeOfDevice extends Devices {
      constructor (name,brand,current,quantity,status){
        super(status);
        this.name=name;
        this.brand=brand;
        this.power=current*230;
        this.quantity=quantity
      }
      getQuantity (){
      }
    
  
  }
  const lamp = new TypeOfDevice ("lamp","Buro",0.2,2,"on");
  lamp.getQuantity(2)
  const PC = new TypeOfDevice ("PC","Acer",3,1,"off");
  PC.getQuantity(1)
  
  console.log (lamp,PC)