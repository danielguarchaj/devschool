function Account(balance){
  this.balance = balance;

  this.deposit = function(amount){
     this.balance += amount;
     return this.balance;
  }
  this.retire = function(amount){
    if(this.balance < amount){
      alert("Insufficient balance!");
      return false;
    }else{
      this.balance -= amount;
      return true;
    }
  }
}

function User(name, pin){
  this.name = name;
  this.pin = pin;
  this.history = []
  this.tracking = function(newTransfer){
    this.history.push(newTransfer);
  }
}
