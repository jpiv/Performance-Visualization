var prototypalQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.len = 0;
  queue.storage = {};

  return queue;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.len++
  this.storage[this.len] = value;
};
queueMethods.dequeue = function(){
  var size = Object.keys(this.storage);
  if(size.length > 0){
    var result = this.storage[size[0]];
    delete this.storage[size[0]];
  } else {
    this.len = 0;
  }
  return result;
};
queueMethods.size = function(){
  return Object.keys(this.storage).length;
};
