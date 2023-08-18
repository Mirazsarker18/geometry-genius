// Global functions
// Use to Reusable functions --> reduce duplicate code

// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '';
    return value;
}

// reusable set span, p, div etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}


/*

// Data validation
1. set the proper type pf the input field. (Number, data, email, etc)
2. check type using typeOf method
3. NAN means: Not a number. isNaN is checking whether the input is not a number or not


*/