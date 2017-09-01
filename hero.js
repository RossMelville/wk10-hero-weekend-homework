var Hero = function(name, health, food){
  this.name = name;
  this.health = health;
  this.favouriteFood = food;
  this.tasks = [];
};

Hero.prototype = {
  sayName: function(){
    return "My name is " + this.name;
  },

  reduceHealth: function(decreaseValue){
    this.health -= decreaseValue;
  }

};


module.exports = Hero;