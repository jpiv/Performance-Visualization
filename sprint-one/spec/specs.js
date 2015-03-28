var test = function(testCount, dataPattern) {
    var queueInstatiator, stackInstantiator;

    if(dataPattern === "pseudoclassical")
    {
        queueInstantiator = function() { return new pseudoclassicalQueue(); };
        stackInstantiator = function() { return new pseudoclassicalStack(); };
    }
    else if(dataPattern === "functional")
    {
        queueInstantiator = function() { return functionalQueue();};
        stackInstantiator = function() { return functionalStack();};
    }
    else if(dataPattern === "functionalShared")
    {
        queueInstantiator = function() { return functionalSharedQueue();};
        stackInstantiator = function() { return functionalSharedStack();};
    }
    else if(dataPattern === "prototypal")
    {
        queueInstantiator = function() { return prototypalQueue();};
        stackInstantiator = function() { return prototypalStack();};
    }
    
    for(var i = 0; i < testCount; i++)
    {
        console.log("run " + dataPattern + "Queue");
        var queue = queueInstantiator();
        for(var j = 0; j < testCount; j++)
        {
            queue.enqueue(j.toString());
            queue.dequeue();
        }
    }

    for(var i = 0; i < testCount; i++)
    {
        var stack = stackInstantiator();
        for(var j = 0; j < testCount; j++)
        {
            stack.push(j.toString());
            stack.pop();
        }
    }
}

test(10, 'functional');
test(10, 'functionalShared');
test(10, 'prototypal');
test(10, 'pseudoclassical');