"use strict";
const data = new Array();
let currentValue = 0;
debugger;
for (let j = 0; j < 100; j++) {
    AddMultipleValues();
}
function AddMultipleValues() {
    for (let j = 0; j < 10; j++) {
        visualizeMix();
    }
}
//Single Values
function VisualizeIncLineGraph() {
    const delta = Math.random() * 2;
    data.push(currentValue);
    currentValue += delta;
}
function VisualizeDecLineGraph() {
    const delta = -Math.random() * 2;
    data.push(currentValue);
    currentValue += delta;
}
function visualizeMix() {
    var delta = Math.random();
    delta = (delta < 0.5) ? 1 : -1;
    data.push(currentValue);
    currentValue += delta;
}
//# sourceMappingURL=linegraph.js.map