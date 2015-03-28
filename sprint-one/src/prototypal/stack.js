var prototypalStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.len = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {};
stackMethods.push = function(value){
  this.storage[this.len] = value;
  this.len++;
};
stackMethods.pop = function(){
  var result;
  if(this.len > 0){
    this.len--;
    result = this.storage[this.len];
    delete this.storage[this.len];
  }
  return result;
};
stackMethods.size = function(){
  return this.len;
};

var stack = prototypalStack();
