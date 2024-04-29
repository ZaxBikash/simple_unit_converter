function convert() {
    var inputValue = document.getElementById("inputValue").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    // Conversion logic
    var result;
    if (fromUnit === "cm" && toUnit === "inch") {
        result = inputValue * 0.393701;
    } else if (fromUnit === "inch" && toUnit === "cm") {
        result = inputValue * 2.54;
    } else if (fromUnit === "cm" && toUnit === "m") {
        result = inputValue / 100;
    } else if (fromUnit === "m" && toUnit === "cm") {
        result = inputValue * 100;
    } else if (fromUnit === "km" && toUnit === "m") {
        result = inputValue * 1000;
    } else if (fromUnit === "m" && toUnit === "km") {
        result = inputValue / 1000;
    } else if (fromUnit === "ft" && toUnit === "cm") {
        result = inputValue * 30.48;
    } else if (fromUnit === "cm" && toUnit === "ft") {
        result = inputValue / 30.48;
    } else if (fromUnit === "mile" && toUnit === "km") {
        result = inputValue * 1.60934;
    } else if (fromUnit === "km" && toUnit === "mile") {
        result = inputValue / 1.60934;
    } else if (fromUnit === "yard" && toUnit === "m") {
        result = inputValue * 0.9144;
    } else if (fromUnit === "m" && toUnit === "yard") {
        result = inputValue / 0.9144;
    } else if (fromUnit === "mm" && toUnit === "inch") {
        result = inputValue * 0.0393701;
    } else if (fromUnit === "inch" && toUnit === "mm") {
        result = inputValue * 25.4;
    } else if (fromUnit === "mg" && toUnit === "g") {
        result = inputValue / 1000;
    } else if (fromUnit === "g" && toUnit === "mg") {
        result = inputValue * 1000;
    } else if (fromUnit === "kg" && toUnit === "lb") {
        result = inputValue * 2.20462;
    } else if (fromUnit === "lb" && toUnit === "kg") {
        result = inputValue / 2.20462;
    } else if (fromUnit === "oz" && toUnit === "g") {
        result = inputValue * 28.3495;
    } else if (fromUnit === "g" && toUnit === "oz") {
        result = inputValue / 28.3495;
    } else if (fromUnit === "sec" && toUnit === "min") {
        result = inputValue / 60;
    } else if (fromUnit === "min" && toUnit === "sec") {
        result = inputValue * 60;
    } else if (fromUnit === "hr" && toUnit === "min") {
        result = inputValue * 60;
    } else if (fromUnit === "min" && toUnit === "hr") {
        result = inputValue / 60;
    } else {
        result = inputValue;
    }

    document.getElementById("result").innerHTML = "Result: " + result.toFixed(2) + " " + toUnit;
}
