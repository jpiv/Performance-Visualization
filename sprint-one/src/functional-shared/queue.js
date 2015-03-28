var functionalSharedQueue = function(){
  var queue = {};
  queue.storage = {};
  queue.sized = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.sized++;
  this.storage[this.sized] = value;
}
queueMethods.dequeue = function(){
  var size = Object.keys(this.storage);
  if (size.length > 0) {
    var result = this.storage[size[0]];
    delete this.storage[size[0]];
  } else {
    this.sized = 0
  }
  return result;
}
queueMethods.size = function(){
  return Object.keys(this.storage).length;
}


