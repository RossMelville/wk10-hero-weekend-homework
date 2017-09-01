var Food = require("../food.js");
var assert = require("assert");

describe("Food object", function(){

  beforeEach(function(){
    food = new Food("Pizza", 10);
  });

  it("Should have a name", function(){
    assert.strictEqual(food.name, "Pizza")
  });

  it("Should have replenishment value", function(){
    assert.strictEqual(food.replenishment, 10)
  });


})