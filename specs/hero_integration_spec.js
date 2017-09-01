var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");
var assert = require("assert");

describe("Hero, Task and Food integration", function(){

  beforeEach(function(){
    link = new Hero("Link", 100, "Apple");
    apple = new Food("Apple", 10);
    bread = new Food("Bread", 5);
    task1 = new Task("Save Zelda", 10, 1, "Big pat on the back");
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
  })


})