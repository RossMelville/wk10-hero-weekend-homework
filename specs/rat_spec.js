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



})
