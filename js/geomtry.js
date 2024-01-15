
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  inputNumber = parseFloat(inputValue);
  inputField.value ='';
  return inputNumber;
}

function getTotalIntoHalf(inputId1, inputId2) {
  const inputFieldTotal = 0.5 * inputId1 * inputId2;
  return inputFieldTotal;
}
function getTotal(inputId1, inputId2) {
  const inputFieldTotal = inputId1 * inputId2;
  return inputFieldTotal;
}

function setTotal(elementId, value) {
 const element = document.getElementById(elementId);
  element.innerText = value;
}

// Triangle part
document.getElementById('triangle-btn').addEventListener('click', function () {
  const inputBase = getInputValue('triangle-b');
  const inpuHeight = getInputValue('triangle-h');
  const inputTotal =getTotalIntoHalf(inputBase, inpuHeight)
  setTotal('area1', inputTotal);
})
// Rectangle part
document.getElementById('rectangle-btn').addEventListener('click', function () { 
 const inputWidth = getInputValue('rectangle-w');
const inputLength = getInputValue('rectangle-l')
const inputTotal = getTotal(inputWidth, inputLength);
  setTotal('area2', inputTotal);
})
// parallelogram part
document.getElementById('parallelogram-btn').addEventListener('click', function () {
  const inputWidth = getInputValue('parallelogram-b');
const inputLength = getInputValue('parallelogram-h')
const inputTotal = getTotal(inputWidth, inputLength);
  setTotal('area3', inputTotal);
})
// Rhombus part
document.getElementById('rhombus-btn').addEventListener('click', function () {
  const inputBase = getInputValue('rhombus-d1');
  const inpuHeight = getInputValue('rhombus-d2');
  const inputTotal =getTotalIntoHalf(inputBase, inpuHeight)
  setTotal('area4', inputTotal);
})
// Pentagon part
document.getElementById('pentagon-btn').addEventListener('click', function () { 
 const inputWidth = getInputValue('pentagon-p');
const inputLength = getInputValue('pentagon-b')
const inputTotal = getTotal(inputWidth, inputLength);
  setTotal('area5', inputTotal);
})
// Ellipse part
document.getElementById('ellipse-btn').addEventListener('click', function () { 
 const inputWidth = getInputValue('ellipse-a');
  const inputLength = getInputValue('ellipse-b');
  const inputTotal = 3.14 * inputWidth * inputLength;
  setTotal('area6', inputTotal);
})








// document.getElementById('rectangle-btn').addEventListener('click', function () {
  
//   const inputWidth = getInputValue('rectangle-w');
//   const inputLength = getInputValue('rectangle-l');
//   const inputTotal = inputWidth * inputLength;
//   setTotal('area-field', inputTotal);
// })