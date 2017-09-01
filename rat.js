var Rat = function(){
  this.health = 10;
  this.dead = false;
};

Rat.prototype = {

  reduceHealth: function(decreaseValue){
    this.health -= decreaseValue;
  }


};

module.exports = Rat;