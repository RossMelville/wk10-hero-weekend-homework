var Food = function(name, replenishment){
  this.name = name;
  this.replenishment = replenishment;
  this.poisonous = false;
};

Food.prototype = {
  
  nowPoisonous: function(){
    this.poisonous = true;
  }



}





module.exports = Food;