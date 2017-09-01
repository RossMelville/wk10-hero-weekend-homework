var Rat = require("../rat.js");
var assert = require("assert");

describe("Rat Object", function(){

  beforeEach(function(){
    rat = new Rat();
  });

  it("Should start with health of 10", function (){
    assert.strictEqual(rat.health, 10);
  });

  it("Should start with dead as false", function() {
    assert.strictEqual(rat.dead, false);
  });

  it("Should be able to reduce health", function(){
    rat.reduceHealth(5);
    assert.strictEqual(rat.health, 5);
  });

  it("Should be able to set rat to dead", function(){
    rat.setToDead();
    assert.strictEqual(rat.dead, true);
  });



})
