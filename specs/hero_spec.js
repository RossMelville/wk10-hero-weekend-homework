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



})