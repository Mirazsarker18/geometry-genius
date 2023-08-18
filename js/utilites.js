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

// add to calculation entry

/*
1. get the element where you want to add the dynamic HTML
2. create an element you want to add
3. if needed add some class
4. set inner HTML. it could be dynamically Template string
5. append the created element as a child element of the parent element


*/

function addToCalculationEntry(areaType, area){
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-6');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> 
    <button class="btn btn-success btn-sm">Covert to m <sup>2</sup></button>
    `;
    calculationEntry.appendChild(p);

}


/*

// Data validation
1. set the proper type pf the input field. (Number, data, email, etc)
2. check type using typeOf method
3. NAN means: Not a number. isNaN is checking whether the input is not a number or not


*/