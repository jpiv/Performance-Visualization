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
    var ctx = document.getElementById('canvas0').getContext('2d');
    
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
$('#canvas0').replaceWith("<canvas id='canvas0' width='500' height='300'></canvas>");
ctx = document.getElementById('canvas0').getContext('2d');
chart1 = new Chart(ctx).Bar(data, options);

};

var oN = function (n)
{
    var startTime;
    var endTime;
    startTime = window.performance.now();
    for (var i = 0; i <= n; i++) {
        console.log('cactus');
    };
    endTime = window.performance.now() - startTime;
    return endTime.toFixed(2);
}
var oNSquared = function (n)
{
    var startTime;
    var endTime;
    startTime = window.performance.now();
    for (var i = 0; i <= n; i++) {
        for (var j = 0; j <= n; j++) {
          console.log('cactus');  
        };
    };
    endTime = window.performance.now() - startTime;
    return endTime.toFixed(2);
}
var oCN = function (n)
{
    var startTime;
    var endTime;
    n = Math.pow(2, n);
    startTime = window.performance.now();
    for (var i = 0; i <= n; i++) {
          console.log('cactus');  
    };
    endTime = window.performance.now() - startTime;
    return endTime.toFixed(2);
}
var oC = function ()
{
    var startTime;
    var endTime;
    startTime = window.performance.now();
    for (var i = 0; i < 500; i++) {
        console.log('cactus');        
    };
    endTime = window.performance.now() - startTime;
    return endTime.toFixed(2);
}

var showTimeComps = function ()
{
    var ctx = [];
    var charts = [];
    
    var data = {
    labels: [],
    datasets: [
            {
                fillColor: "rgba(124, 21, 29,0.5)",
                strokeColor: "rgba(124, 21, 29,0.8)",
                highlightFill: "rgba(207, 104, 112,0.75)",
                highlightStroke: "rgba(207, 104, 112,1)",
                data: []
            }
        ]
    };
    var options = {
            scaleLabel: "<%=value%> ms",
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %> ms",
            multiTooltipTemplate: "<%= datasetLabel %>: <%= value %> ms"
          };

    data.labels = ["c=500", "c=500", "c=500", "c=500"];
    data.datasets[0].data.push(oC(5000));
    data.datasets[0].data.push(oC(50000));
    data.datasets[0].data.push(oC(500000));
    data.datasets[0].data.push(oC(5000000));
    ctx[0] = document.getElementById('canvas0').getContext('2d');
    charts[0] = new Chart(ctx[0]).Bar(data, options);
    data.datasets[0].data = [];
    data.labels = ["n=5000", "n=10000", "n=15000", "n=25000"];
    data.datasets[0].data.push(oN(5000));
    data.datasets[0].data.push(oN(10000));
    data.datasets[0].data.push(oN(15000));
    data.datasets[0].data.push(oN(25000));
    ctx[1] = document.getElementById('canvas1').getContext('2d');
    charts[1] = new Chart(ctx[1]).Bar(data, options);
    data.labels = ["n=50", "n=100", "n=150", "n=250"];
    data.datasets[0].data = [];
    data.datasets[0].data.push(oNSquared(50));
    data.datasets[0].data.push(oNSquared(100));
    data.datasets[0].data.push(oNSquared(150));
    data.datasets[0].data.push(oNSquared(250));
    ctx[2] = document.getElementById('canvas2').getContext('2d');
    charts[2] = new Chart(ctx[2]).Bar(data, options);
    data.labels = ["n=5", "n=10", "n=15", "n=16"];
    data.datasets[0].data = [];
    data.datasets[0].data.push(oCN(5));
    data.datasets[0].data.push(oCN(10));
    data.datasets[0].data.push(oCN(15));
    data.datasets[0].data.push(oCN(16));
    ctx[3] = document.getElementById('canvas3').getContext('2d');
    charts[3] = new Chart(ctx[3]).Bar(data, options);
}

var loadCompare = function ()
{
    var ctx = [];
    var charts = [];

    $('#jscript').val("To test one algorithm paste it in and click test."
            + "\n\nTo compare two algorithms paste one, "
            + "click compare, then paste the other and click compare again.");
    
    var data = {
    labels: [],
    datasets: [
            {
                fillColor: "rgba(124, 21, 29,0.5)",
                strokeColor: "rgba(124, 21, 29,0.8)",
                highlightFill: "rgba(207, 104, 112,0.75)",
                highlightStroke: "rgba(207, 104, 112,1)",
                data: []
            }
        ]
    };
    var options = {
            scaleLabel: "<%=value%> ms",
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %> ms",
            multiTooltipTemplate: "<%= datasetLabel %>: <%= value %> ms"
          };

    data.labels = ["c=500", "c=500", "c=500", "c=500"];
    data.datasets[0].data.push(oC(5000));
    data.datasets[0].data.push(oC(50000));
    data.datasets[0].data.push(oC(500000));
    data.datasets[0].data.push(oC(5000000));
    ctx[0] = document.getElementById('canvas0').getContext('2d');
    charts[0] = new Chart(ctx[0]).Bar(data, options);    

};

var iterate = function (vvvvbbbnnn, fffffdddddsss){
if(!vvvvbbbnnn)return 0;
    var uuuuiiikt;
    var ppppwwwwxxxxx;
    uuuuiiikt = window.performance.now();
    for (var gggggzzzzzy = 0; gggggzzzzzy < fffffdddddsss; gggggzzzzzy++) {
        eval(vvvvbbbnnn);
    };
    ppppwwwwxxxxx = window.performance.now() - uuuuiiikt;
    return ppppwwwwxxxxx;
};

var testAndCompare = function () 
{
    $('#canvas0').replaceWith("<canvas id='canvas0' width='500' height='300'></canvas>");
    var ctx = [];
    var charts = [];
    
    var data = {
    labels: [],
    datasets: [
            {
                fillColor: "rgba(124, 21, 29,0.5)",
                strokeColor: "rgba(124, 21, 29,0.8)",
                highlightFill: "rgba(207, 104, 112,0.75)",
                highlightStroke: "rgba(207, 104, 112,1)",
                data: []
            }
        ]
    };
    var options = {
            scaleLabel: "<%=value%> ms",
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %> ms",
            multiTooltipTemplate: "<%= datasetLabel %>: <%= value %> ms"
          };


    var jscript = $('#jscript').val();

    data.labels = ["c=500", "c=5000", "c=25000", "c=50000"];
    data.datasets[0].data.push(iterate(jscript, 500));
    data.datasets[0].data.push(iterate(jscript, 5000));
    data.datasets[0].data.push(iterate(jscript, 25000));
    data.datasets[0].data.push(iterate(jscript, 50000));
    ctx[0] = document.getElementById('canvas0').getContext('2d');
    charts[0] = new Chart(ctx[0]).Bar(data, options);    

};
var compareCount = 0;
var lastData = "";
var compare = function (iterationCount)
{
    iterationCount = iterationCount.split(',');
    $('#canvas0').replaceWith("<canvas id='canvas0' width='500' height='300'></canvas>");
    var ctx = [];
    var charts = [];
    
    var data = {
    labels: [],
    datasets: [
            {
                label:"First",
                fillColor: "rgba(124, 21, 29,0.5)",
                strokeColor: "rgba(124, 21, 29,0.8)",
                highlightFill: "rgba(207, 104, 112,0.75)",
                highlightStroke: "rgba(207, 104, 112,1)",
                data: []
            },
            {
                label: "Second",
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
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %> ms",
            multiTooltipTemplate: "<%= datasetLabel %>: <%= value %> ms"
          };
    var jscript = $('#jscript').val();
        var jscript2 = $('#jscript2').val();

        //jscript = $('#jscript').val();
        $('#canvas0').replaceWith("<canvas id='canvas0' width='500' height='300'></canvas>");
        data.labels = ["n="+iterationCount[0], "n="+iterationCount[1], "n="+iterationCount[2], "n="+iterationCount[3]];

        data.datasets[0].data.push(iterate(jscript, iterationCount[0]).toFixed(2));
        data.datasets[0].data.push(iterate(jscript, iterationCount[1]).toFixed(2));
        data.datasets[0].data.push(iterate(jscript, iterationCount[2]).toFixed(2));
        data.datasets[0].data.push(iterate(jscript, iterationCount[3]).toFixed(2));

        data.datasets[1].data.push(iterate(jscript2, iterationCount[0]).toFixed(2));
        data.datasets[1].data.push(iterate(jscript2, iterationCount[1]).toFixed(2));
        data.datasets[1].data.push(iterate(jscript2, iterationCount[2]).toFixed(2));
        data.datasets[1].data.push(iterate(jscript2, iterationCount[3]).toFixed(2));
        ctx[0] = document.getElementById('canvas0').getContext('2d');
        charts[0] = new Chart(ctx[0]).Bar(data, options);
        compareCount++;
        lastData = data.datasets[0].data.slice();

}
