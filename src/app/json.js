const input = document.querySelector("input[id='file']");
const path = document.querySelector("input[id='path']");
const forFile = document.querySelector("label[id='forFile']");
const foPath = document.querySelector("label[id='forPath']");
const sheetName = document.querySelector("input[id='sheetName']");
const execute = document.querySelector("button[id='execute']");
const outputInfo = document.querySelector("div[id='outputInfo']");

var generateJSONExample = require('../node_modules/@hugorper/excel-2-jsonschema/lib/generate-json-example.js');

outputInfo.innerHTML = "";

var option = {
    inputExcelFile: '',
    sheetName: 'Schema',
    outputDir: ''
}; 


sheetName.value = option.sheetName;


input.addEventListener("change", () => {
    // Get the native path of the file selected by user
    const file = input.value;
    forFile.innerHTML = file;
});

path.addEventListener("change", () => {
    // Get the native path of the file selected by user
    const file = input.value;
    
    forPath.innerHTML = path.value;
  
});

execute.addEventListener("click", () => {
    var error = false;
    outputInfo.innerHTML = "";

    if (forFile.innerHTML == 'Choose excel input file') {
        error = true;
        outputInfo.innerHTML += "Excel file not selected<br>";
    }
    if (foPath.innerHTML == 'Choose output folder') {
        error = true;
        outputInfo.innerHTML += "Output foldere not selected<br>";
    }
    if (sheetName.value == '') {
        error = true;
        outputInfo.innerHTML += "Enter sheet name<br>";
    }    

    if (!error) {

        option.inputExcelFile = forFile.innerHTML;
        option.outputDir = forPath.innerHTML;
        option.sheetName = sheetName.value;

        generateJSONExample(option.inputExcelFile, option.sheetName, option.outputDir);

        outputInfo.innerHTML += "Terminated";
    }

});


