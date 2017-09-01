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

  


})