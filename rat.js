var Rat = function(){
  this.health = 10;
  this.dead = false;
};

Rat.prototype = {

  reduceHealth: function(decreaseValue){
    this.health -= decreaseValue;
    if(this.health <= 0){
      this.setToDead();
    }
  },

  setToDead: function(){
    this.dead = true;
  },

  touchFood: function(food){
    food.nowPoisonous();
  }


};

module.exports = Rat;