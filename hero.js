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
  },

  increaseHealth: function(increaseValue){
    this.health += increaseValue;
  },

  eat: function(food){
    if(this.favouriteFood === food.name){
      this.health += (food.replenishment * 1.5)
    } else {
      this.health += food.replenishment;
    }
  },

  addTask: function(task){
    this.tasks.push(task);
  }

};


module.exports = Hero;