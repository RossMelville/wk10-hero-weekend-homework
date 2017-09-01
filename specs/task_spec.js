var Task = require("../task.js");
var assert = require("assert");

describe("Task Object", function(){

  beforeEach(function(){
    task = new Task("Catch the Joker", 10, 1, "Big pat on the back");
  });

  it("Should have description", function(){
    assert.strictEqual(task.description, "Catch the Joker")
  });

})