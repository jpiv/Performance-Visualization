var functionalQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sized = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    sized++;
    storage[sized] = value;
  };

  someInstance.dequeue = function(){
    var size = Object.keys(storage);
    if (size.length > 0) {
      var result = storage[size[0]];
      delete storage[size[0]];
    } else {
      sized = 0;
    }
    return result;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
