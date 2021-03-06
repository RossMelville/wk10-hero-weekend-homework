var Hero = function(name, health, food){
  this.name = name;
  this.health = health;
  this.maxHealth = 100;
  this.dead = false;
  this.favouriteFood = food;
  this.tasks = [];
};

Hero.prototype = {
  sayName: function(){
    return "My name is " + this.name;
  },

  reduceHealth: function(decreaseValue){
    this.health -= decreaseValue;
    if(this.health <= 0){
      this.dead = true;
    }
  },

  increaseHealth: function(increaseValue){
    this.health += increaseValue;
    if(this.health <= 0){
      this.dead = true;
    };
    if(this.health > this.maxHealth){
      this.health = this.maxHealth;
    }
  },

  eat: function(food){
    if(this.favouriteFood === food.name){
      this.increaseHealth(food.replenishment * 1.5)
    } else {
      this.increaseHealth(food.replenishment);
    }
  },

  addTask: function(task){
    this.tasks.push(task);
  },

  sortTasksByDifficulty: function(){
    this.tasks.sort(function(taskA, taskB){
      return taskA.difficulty - taskB.difficulty;
    }).reverse()
  },

  sortTasksByPriority: function(){
    this.tasks.sort(function(taskA, taskB){
      return taskA.priority - taskB.priority;
    })
  },

  sortTasksByReward: function(){
    this.tasks.sort(function(a, b){
      var taskA = a.reward.toUpperCase();
      var taskB = b.reward.toUpperCase();
      if(taskA < taskB){
        return -1;
      } 
      if(taskA > taskB){
        return 1;
      }
      else{
        return 0;
      }
    })
  },

  taskCompleted: function(task){
    this.tasks.forEach(function(job){
      if(job === task){
        job.completed();
      }
    })
  },

  CompletedTasks: function(status){
    var sortedArray = [];

    this.tasks.forEach(function(task){
      if(task.complete === status){
        sortedArray.push(task);
      }
    })
    return sortedArray;
  },

  setToDead: function(){
    this.dead = true;
  }



};


module.exports = Hero;