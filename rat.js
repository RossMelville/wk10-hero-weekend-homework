var Rat = function(){
  this.health = 10;
  this.dead = false;
};

Rat.prototype = {

  reduceHealth: function(decreaseValue){
    this.health -= decreaseValue;
  },

  setToDead: function(){
    this.dead = true;
  }


};

module.exports = Rat;