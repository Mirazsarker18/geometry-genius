function calculateTriangleArea(){
    // get triangle base value
    
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    const area = 0.5 * base * height;
    setElementInnerText('triangle-area', area);
}

function calculateRectangleArea() {
    const base = getInputValue('rectangle-width');
    const height = getInputValue('rectangle-length');
    const area = base * height;
    setElementInnerText('rectangle-area', area);
}

function calculateParallelogramArea(){
   const base = getInputValue('parallelogram-base');
   const height = getInputValue('parallelogram-height');
   const area = base * height;
   setElementInnerText('parallelogram-area', area);
}