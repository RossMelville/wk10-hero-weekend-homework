var Task = function(description, difficulty, priority, reward){
  this.description = description;
  this.difficulty = difficulty;
  this.priority = priority;
  this.reward = reward;
  this.complete = false;
};




module.exports = Task;