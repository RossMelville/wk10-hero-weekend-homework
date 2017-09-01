var Hero = require("../hero.js");
var assert = require("assert");

describe("Hero Object", function(){

  beforeEach(function(){
    hero = new Hero("Batman", 100, "Pizza");
  });

  it("Should have name", function(){
    assert.strictEqual(hero.name, "Batman")
  });

  it("Should have health", function(){
    assert.strictEqual(hero.health, 100)
  });

  it("Should have favourite food", function(){
    assert.strictEqual(hero.favouriteFood, "Pizza")
  });

  it("Should have empty task array to start", function(){
    assert.deepEqual(hero.tasks, [])
  });

  it("Should be able to say name", function(){
    assert.strictEqual(hero.sayName(), "My name is Batman" )
  });

  it("Should be able to reduce health", function(){
    hero.reduceHealth(10);
    assert.strictEqual(hero.health, 90)
  });

  it("Should be able to increase health", function(){
    hero.reduceHealth(10);
    hero.increaseHealth(5);
    assert.strictEqual(hero.health, 95);
  })


})