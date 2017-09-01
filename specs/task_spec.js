var Task = require("../task.js");
var assert = require("assert");

describe("Task Object", function(){

  beforeEach(function(){
    task = new Task("Catch the Joker", 10, 1, "Big pat on the back");
  });

  it("Should have description", function(){
    assert.strictEqual(task.description, "Catch the Joker")
  });

  it("Should have difficulty", function(){
    assert.strictEqual(task.difficulty, 10)
  });

  it("Should have priority", function(){
    assert.strictEqual(task.priority, 1)
  });

  it("Should have reward", function(){
    assert.strictEqual(task.reward, "Big pat on the back")
  });

  it("Should be able to set task as complete", function(){
    task.completed();
    assert.strictEqual(task.complete, true)
  });

})