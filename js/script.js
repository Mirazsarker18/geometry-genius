function calculateTriangleArea(){
    // get triangle base value

    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    const area = 0.5 * base * height;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText('triangle-area', areaToDecimal);
}

function calculateRectangleArea() {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    const area = width * length;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText('rectangle-area', areaToDecimal);
}

function calculateParallelogramArea(){
   const base = getInputValue('parallelogram-base');
   const height = getInputValue('parallelogram-height');
   const area = base * height;
   const areaToDecimal = area.toFixed(2);
   setElementInnerText('parallelogram-area', areaToDecimal);
}

function calculateEllipseArea(){
    const large = getInputValue('ellipse-major');
    const short = getInputValue('ellipse-minor');
    const area = Math.PI * large * short;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaToDecimal);
}