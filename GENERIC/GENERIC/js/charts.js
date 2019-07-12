var chart = new CanvasJS.Chart("chartbarContainer",
    {
        // Construct options first and then pass it as a parameter
        animationEnabled: true,
        title: {
            //text: "Chart inside a jQuery Resizable Element"
        },
        data: [{
            type: "column", //change it to line, area, bar, pie, etc
            //legendText: "Try Resizing with the handle to the bottom right",
            showInLegend: false,
            dataPoints: [
                { y: 10 },
                { y: 6 },
                { y: 14 },
                { y: 12 },
                { y: 19 },
                { y: 14 },
                { y: 26 },
                { y: 10 },
                { y: 22 }
            ]
        }]
    });
chart.render();

var chart = new CanvasJS.Chart("ellipsebarContainer",
    {
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Gold Medals Won in Olympics"
        },
        axisY: {
            //title: "Number of Medals"
        },
        toolTip: {
            shared: false
        },
        legend: {
            cursor: "pointer",
            //itemclick: toggleDataSeries
        },
        data: [{
            type: "spline",
            //name: "US",
            showInLegend: false,
            dataPoints: [
                { y: 44 },
                { y: 37 },
                { y: 36 },
                { y: 36 },
                { y: 46 },
                { y: 46 }
            ]
        },
        {
            type: "spline",
            //name: "China",
            showInLegend: false,
            dataPoints: [
                { y: 16 },
                { y: 28 },
                { y: 32 },
                { y: 48 },
                { y: 38 },
                { y: 26 }
            ]
        },
        {
            type: "spline",
            //name: "Britain",
            showInLegend: false,
            dataPoints: [
                { y: 1 },
                { y: 11 },
                { y: 9 },
                { y: 19 },
                { y: 29 },
                { y: 27 }
            ]
        }
        ]
    });
chart.render();

var chart = new CanvasJS.Chart("drillbarContainer",
    {
        title: {
            text: "28%",
            verticalAlign: "center",
            dockInsidePlotArea: true
        },
        legend: {
            maxWidth: 100
        },
        data: [{
            type: "doughnut",
            showInLegend: false,
            dataPoints: [
                { y: 53 },
                { y: 35 },
                { y: 7 }
            ]
        }]

    });
chart.render();

