var Food = require("../food.js");
var assert = require("assert");

describe("Food object", function(){

  beforeEach(function(){
    pizza = new Food("Pizza", 10);
  });

  it("Should have a name", function(){
    assert.strictEqual(pizza.name, "Pizza")
  });

  it("Should have replenishment value", function(){
    assert.strictEqual(pizza.replenishment, 10)
  });


})