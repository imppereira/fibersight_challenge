async function loadMultipleData() {
    const temperatureData = await d3.json("./assets/data/temperature.json"); //a json file is an array (list of objects)
    const moistureData = await d3.json("./assets/data/moisture_sorted.json");

    //Creating the temperature array
    const temperatureArray = arrayByMeter(temperatureData, "temperature");

    //Creating the moisture array
    const moistureArray = arrayByMeter(moistureData, "moisture");

    return { temperatureArray, moistureArray };
}

//MAIN FUNCTION - CALLS OBJECT
loadMultipleData().then(data => {
    const svgVis = d3.select('#visAnalytics');

    svgVis.attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", "0 -250 500 500") // Define a fixed coordinate system
        .attr("preserveAspectRatio", "xMidYMid meet"); // Keeps proportion and centres; xMidYMid - forces uniform scaling

    const g = svgVis.append("g")
        .attr("transform", "translate(0,0)");

    //Cable
    const rect = g.append("rect")
        .attr("id", "cable");

    //Container with info about each meter
    const infoGroup = g.append("g")
        .style("opacity", 0);
    const backgroundHeight = 20;
    const backgroundWidth = 50;
    const infoBackground = infoGroup.append("rect")
        .attr("width", backgroundWidth)
        .attr("height", backgroundHeight)
        .attr("fill", "#BBD38E")
        .attr("color", "#1E3E1D")
    const meterValue = infoGroup.append("text")
        .attr("font-size", "12px")
        .attr("fill", "black")
        .attr("text-anchor", "middle")

    //Temperature representation
    const rectTemp = g.append("rect")
        .attr("id", "cableTemp");

    //Moisture representation
    const rectMoist = g.append("rect")
        .attr("id", "cableMoist");

    //Legend
    const axis = g.append("g")
        .attr("id", "axisGraphic");

    const unit = g.append("text")
        .attr("id", "labelGraphic");

    const totalMeters = 500;

    //temperature-----------------------------------------------------------------------------------
    const temperatureArray = data.temperatureArray;
    const colorTemp = getColor("º", "legend_min_t", "legend_max_t", "#FFED5F", "#FF6139");
    temperatureArray.forEach(d => d.color = colorTemp(d.mean)); //add color on object

    //moisture
    const moistureArray = data.moistureArray;
    const colorMoist = getColor("%", "legend_min_m", "legend_max_m", "#97DCF5", "#3F53A4");
    moistureArray.forEach(d => d.color = colorMoist(d.mean)); //add color on object

    //color-----------------------------------------------------------------------------------
    const defs = svgVis.append("defs");
    const gradientTemp = defs.append("linearGradient").attr("id", "gradT"); //create degrade color
    const gradientMoist = defs.append("linearGradient").attr("id", "gradM");

    temperatureArray.forEach((d, i) => {
        let meterValue = d.meter;
        let offset = (meterValue * 100) / totalMeters;

        gradientTemp.append("stop")
            .attr("offset", offset + '%')
            .attr("stop-color", d.color);
    });

    moistureArray.forEach((d, i) => {
        let meterValue = d.meter;
        let offset = (meterValue * 100) / totalMeters;

        gradientMoist.append("stop")
            .attr("offset", offset + '%')
            .attr("stop-color", d.color);
    });

    //position-----------------------------------------------------------------------------------

    //temp rect
    const dataLengthT = temperatureArray.length; // 954 entries
    const firstMeterT = temperatureArray[0].meter; // 92.2
    const lastMeterT = temperatureArray[dataLengthT - 1].meter; // 282.8
    const widthTemp = lastMeterT - firstMeterT;

    console.log("temperatureArray", temperatureArray);

    //moist rect
    const dataLengthM = moistureArray.length; // 954 entries
    const firstMeterM = moistureArray[0].meter; // 92.2
    const lastMeterM = moistureArray[dataLengthM - 1].meter; // 282.8
    const widthMoist = lastMeterM - firstMeterM;

    console.log("moistureArray", moistureArray);

    //DRAW---------------------------------------------------------------------------------------
    rect.attr("width", totalMeters)
        .attr("height", 20)
        .attr("x", 0)
        .attr("y", 0)
        .attr("fill", "#F1F1F1")

    //temperature
    rectTemp.attr("width", widthTemp)
        .attr("height", 10)
        .attr("x", firstMeterT)
        .attr("y", 0)
        .attr("fill", "url(#gradT)")

    //moisture
    rectMoist.attr("width", widthMoist)
        .attr("height", 10)
        .attr("x", firstMeterM)
        .attr("y", 10)
        .attr("fill", "url(#gradM)")

    //legend
    const xscale = d3.scaleLinear()
        .domain([0, 500])
        .range([0, totalMeters]);
    axis.attr("transform", "translate(0,25)")
        .call(d3.axisBottom(xscale))
        .attr("color", "#202020")

    unit.attr("transform", "translate(515,41)")
        .text("(m)")
        .attr("font-size", "10")
        .attr("font-family", "Arial")

    //INTERACTION---------------------------------------------------------------------------------------
    rectTemp.on("mousemove", function (event) {
        const [mouseX, mouseY] = d3.pointer(event, g.node()); // Posição relativa ao <g>
        const valueMouse = mouseX.toFixed(1);
        infoGroup.style("opacity", 1);

        infoBackground.attr("transform", "translate(" + Number(mouseX - backgroundWidth / 2) + "," + Number(-backgroundHeight - 5) + ")")

        meterValue.attr("id", "meterNumber" + mouseX)
            .text(valueMouse + "m")
            .attr("transform", "translate(" + mouseX + "," + Number(-backgroundHeight / 2) + ")")
    })
        .on("mouseout", function (event) {
            infoGroup.style("opacity", 0);
        });
});

function arrayByMeter(data, type) {
    const meters = Object.keys(data[0]);

    return meters.map(meter => {
        const values = data.map(section => parseFloat(section[meter].replace(',', '.'))); // Convert string to number
        const mean = d3.mean(values); // mean of values at same meter
        const index = meter.indexOf(" ");
        const newMeters = meter.substring(index);

        return {
            meter: newMeters, // meter name. ex: 92.2
            type: type,   // temperature or moisture
            mean: mean,   // mean of values
            sections: data.map((index) => ({
                section: index + 1, // section id
                value: values[index] // value
            }))
        };
    });
}

function getColor(indexOf, minId, maxId, minColor, maxColor) {
    //get min value from legend
    const tempScaleMinText = document.getElementById(minId).textContent;
    const indexMin = tempScaleMinText.indexOf(indexOf);
    const tempScaleMin = tempScaleMinText.substring(0, indexMin);

    //get max value from legend
    const tempScaleMaxText = document.getElementById(maxId).textContent;
    const indexMax = tempScaleMaxText.indexOf(indexOf);
    const tempScaleMax = tempScaleMaxText.substring(0, indexMax);

    //out of range color
    const outOfRangeColor = "#AFAFAF";

    // create a linear scale
    const colorScale = d3.scaleLinear()
        .domain([tempScaleMin, tempScaleMax]) //gradient limit
        .range([minColor, maxColor]); //gradient color

    return function (value) {
        if (value < tempScaleMin || value > tempScaleMax) {
            return outOfRangeColor;
        }
        return colorScale(value);
    };
}



