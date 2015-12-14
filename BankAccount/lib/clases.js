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
  this.history = []
  this.tracking = function(amount, pin, memo){
    this.amount = name;
    this.pin = pin;
    this.memo = memo;
  }

}
