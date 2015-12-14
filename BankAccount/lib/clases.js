function Account(balance){
  this.balance = balance;

  this.deposit = function(amount){
     this.balance += amount;
     return this.balance;
  }
  this.retire = function(amount){
    if(this.balance < amount){
      return "Error";
    }else{
      this.balance -= amount;
      return this.balance;
    }
  }
}

function User(name, pin){

  this.name = name;
  this.pin = pin;

}
