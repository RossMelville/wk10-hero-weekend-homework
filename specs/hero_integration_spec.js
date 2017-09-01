var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");
var Rat = require("../rat.js");
var assert = require("assert");

describe("Hero, Task and Food integration", function(){

  beforeEach(function(){
    link = new Hero("Link", 100, "Apple");
    apple = new Food("Apple", 10);
    bread = new Food("Bread", 5);
    task1 = new Task("Save Zelda", 10, 1, "Big pat on the back");
    task2 = new Task("Defeat Ganon", 9, 2, "Pint in the pub");
    task3 = new Task("Collect Master Sword", 3, 3, "Better kill rate");
    rat1 = new Rat();
  });

  it("Hero can eat food to replenish health", function(){
    link.reduceHealth(50);
    link.eat(bread);
    assert.strictEqual(link.health, 55)
  });

  it("Hero health increased by 1.5*replenishment value when favourite food consumed", function(){
    link.reduceHealth(50);
    link.eat(apple);
    assert.strictEqual(link.health, 65);
  });

  it("Can add task to heros tasks", function(){
    link.addTask(task1);
    assert.strictEqual(link.tasks[0], task1);
  });

  it("Sort hero tasks by difficulty", function(){
    link.addTask(task2);
    link.addTask(task3);
    link.addTask(task1);
    link.sortTasksByDifficulty();
    assert.deepStrictEqual(link.tasks, [task1, task2, task3]);
  });

  it("Sort hero tasks by priority", function(){
    link.addTask(task3);
    link.addTask(task1);
    link.addTask(task2);
    link.sortTasksByPriority();
    assert.deepStrictEqual(link.tasks, [task1, task2, task3]);
  });

  it("Sort hero tasks by reward", function(){
    link.addTask(task1);
    link.addTask(task2);
    link.addTask(task3);
    link.sortTasksByReward();
    assert.deepStrictEqual(link.tasks, [task3, task1, task2]);
  });

  it("can change a heros task to completed", function(){
    link.addTask(task1);
    link.taskCompleted(task1);
    assert.strictEqual(link.tasks[0].complete, true);
  });

  it("Show hero tasks that are completed", function(){
    link.addTask(task1);
    link.addTask(task2);
    link.addTask(task3);
    link.taskCompleted(task1);
    link.taskCompleted(task3);
    assert.deepStrictEqual(link.CompletedTasks(true), [task1, task3]);
  });

  it("Show hero tasks that are uncompleted", function(){
    link.addTask(task1);
    link.addTask(task2);
    link.addTask(task3);
    link.taskCompleted(task1);
    link.taskCompleted(task3);
    assert.deepStrictEqual(link.CompletedTasks(false), [task2]);
  });

  it("Rat can touch food and then becomes poisonous", function(){
    rat1.touchFood(apple);
    assert.strictEqual(apple.poisonous, true);
  });

  it("Poisoned food replenishment value changed to negative value", function(){
    rat1.touchFood(apple);
    assert.strictEqual(apple.replenishment, -10);
  });

  it("When poisoned food consumed health decreases", function(){
    rat1.touchFood(bread);
    link.eat(bread);
    assert.strictEqual(link.health, 95);
  });

  it("When favourite food poisoned and eaten reduces health * 1.5 replenishment value", function(){
    rat1.touchFood(apple);
    link.eat(apple);
    assert.strictEqual(link.health, 85);
  });




})