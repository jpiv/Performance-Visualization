var test = function(testCount, dataPattern, dataSets) {
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
    var startTime = window.performance.now();
    for(var i = 0; i < testCount; i++)
    {
        var queue = queueInstantiator();
    }
    var endTime = window.performance.now() - startTime;
    dataSets[0].data.push(endTime.toFixed(2));

    startTime = window.performance.now();
    var queue = queueInstantiator();
    for(var j = 0; j < testCount; j++)
    {
        queue.enqueue(j.toString());
        queue.dequeue();
    }
    endTime = window.performance.now() - startTime;
    dataSets[1].data.push(endTime.toFixed(2));


    startTime = window.performance.now();
    for(var i = 0; i < testCount; i++)
    {
        var stack = stackInstantiator();
    }
    endTime = window.performance.now() - startTime;
    dataSets[2].data.push(endTime.toFixed(2));

    startTime = window.performance.now();
    var stack = stackInstantiator();
    for(var j = 0; j < testCount; j++)
    {
        stack.push(j.toString());
        stack.pop();
    }
    endTime = window.performance.now() - startTime;
    dataSets[3].data.push(endTime.toFixed(2));

}

var chart1 = null;

var testAll = function(value)
{
    var ctx = document.getElementById('canvas').getContext('2d');
    
    var data = {
    labels: ["Functional", "Functional Shared", "Prototypal", "Pseudoclassical"],
    datasets: [
        {
            label: "Queue Instantiation",
            fillColor: "rgba(124, 21, 29,0.5)",
            strokeColor: "rgba(124, 21, 29,0.8)",
            highlightFill: "rgba(207, 104, 112,0.75)",
            highlightStroke: "rgba(207, 104, 112,1)",
            data: []
        },
        {
            label: "Enqeue/Dequeue",
            fillColor: "rgba(170, 105, 57,0.5)",
            strokeColor: "rgba(170, 105, 57,0.8)",
            highlightFill: "rgba(212, 151, 106,0.75)",
            highlightStroke: "rgba(212, 151, 106,1)",
            data: []
        },
        {
            label: "Stack Instantiation",
            fillColor: "rgba(35, 106, 98,0.5)",
            strokeColor: "rgba(35, 106, 98,0.8)",
            highlightFill: "rgba(106, 158, 152,0.75)",
            highlightStroke: "rgba(106, 158, 152,1)",
            data: []
        },
        {
            label: "Push/Pop",
            fillColor: "rgba(60, 141, 47,0.5)",
            strokeColor: "rgba(60, 141, 47,0.8)",
            highlightFill: "rgba(151, 211, 141,0.75)",
            highlightStroke: "rgba(151, 211, 141,1)",
            data: []
        }
    ]
};
var options = {
            scaleLabel: "<%=value%> ms",
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= datasetLabel %>: <%= value %> ms"
          };
test(value, 'functional', data.datasets);
test(value, 'functionalShared', data.datasets);
test(value, 'prototypal', data.datasets);
test(value, 'pseudoclassical', data.datasets);
$('#canvas').replaceWith("<canvas id='canvas' width='500' height='300'></canvas>");
ctx = document.getElementById('canvas').getContext('2d');
chart1 = new Chart(ctx).Bar(data, options);

};
