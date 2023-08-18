function calculateTriangleArea(){
    // get triangle base value

    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    // Validation
    if(isNaN(base) || isNaN(height)){
        alert('Please enter a valid Number');
        return;
    }
    const area = 0.5 * base * height;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText('triangle-area', areaToDecimal);

    // add to calculation entry
    addToCalculationEntry('Triangle', areaToDecimal);
}

function calculateRectangleArea() {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    // Validation
    if(isNaN(width) || isNaN(length)){
        alert('Please enter a valid Number');
        return;
    }
    const area = width * length;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText('rectangle-area', areaToDecimal);

    // add to calculation entry
    addToCalculationEntry('Rectangle', areaToDecimal);
}

function calculateParallelogramArea(){
   const base = getInputValue('parallelogram-base');
   const height = getInputValue('parallelogram-height');
   // Validation
   if(isNaN(base) || isNaN(height)){
    alert('Please enter a valid Number');
    return;
    }
   const area = base * height;
   const areaToDecimal = area.toFixed(2);
   setElementInnerText('parallelogram-area', areaToDecimal);

   // add to calculation entry
   addToCalculationEntry('Parallelogram', areaToDecimal);
}



function calculatePentagonArea(){
    const pentagonP = getInputValue('pentagon-p');
    const pentagonB = getInputValue('pentagon-b');
    // Validation
    if(isNaN(pentagonP) || isNaN(pentagonB)){
        alert('Please enter a valid Number');
        return;
    }
    const area = 0.5 * pentagonP * pentagonB;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText('pentagon-area', areaToDecimal);

    // add to calculation entry
    addToCalculationEntry('Pentagon', areaToDecimal);
}

function calculateEllipseArea(){
    const large = getInputValue('ellipse-major');
    const short = getInputValue('ellipse-minor');
    // Validation
    if(isNaN(large) || isNaN(short)){
        alert('Please enter a valid Number');
        return;
    }
    const area = Math.PI * large * short;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaToDecimal);

    // add to calculation entry
    addToCalculationEntry('Ellipse', areaToDecimal);
}