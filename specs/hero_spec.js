var Hero = require("../hero.js");
var assert = require("assert");

describe("Hero Object", function(){

  beforeEach(function(){
    hero = new Hero("Link", 100, "Pizza");
  });

  it("Should have name", function(){
    assert.strictEqual(hero.name, "Link")
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
    assert.strictEqual(hero.sayName(), "My name is Link" )
  });

  it("Should be able to reduce health", function(){
    hero.reduceHealth(10);
    assert.strictEqual(hero.health, 90)
  });

  it("Should be able to increase health", function(){
    hero.reduceHealth(10);
    hero.increaseHealth(5);
    assert.strictEqual(hero.health, 95);
  });

  it("Should start with dead set to false", function(){
    assert.strictEqual(hero.dead, false);
  });

  it("Can set dead to true", function(){
    hero.setToDead();
    assert.strictEqual(hero.dead, true);
  });

  it("When heros health gets to 0 dead set to true", function(){
    hero.reduceHealth(100);
    assert.strictEqual(hero.dead, true);
  });

  it("When heros health increased it cant go past max health", function(){
    hero.increaseHealth(10);
    assert.strictEqual(hero.health, 100);
  })


})