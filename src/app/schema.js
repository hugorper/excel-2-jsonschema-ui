const input = document.querySelector("input[id='file']");
const path = document.querySelector("input[id='path']");
const sheetName = document.querySelector("input[id='sheetName']");
const version = document.querySelector("input[id='version']");
const forFile = document.querySelector("label[id='forFile']");
const foPath = document.querySelector("label[id='forPath']");
const execute = document.querySelector("button[id='execute']");
const outputInfo = document.querySelector("div[id='outputInfo']");
const embeded = document.querySelector("input[type='checkbox']");

const generateJSONSchema = require('../node_modules/@hugorper/excel-2-jsonschema/lib/generate-json-schema.js');

outputInfo.innerHTML = "";

var option = {
    inputExcelFile: '',
    sheetName: 'Schema',
    outputDir: '',
    versionSchema: 'http://json-schema.org/draft-07/schema#'
}; 


sheetName.value = option.sheetName;
version.value = option.versionSchema;


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
    if (version.value == '') {
        error = true;
        outputInfo.innerHTML += "Enter Json-Schema version<br>";
    }

    if (!error) {

        option.inputExcelFile = forFile.innerHTML;
        option.outputDir = forPath.innerHTML;
        option.sheetName = sheetName.value;
        option.versionSchema = version.value;

        generateJSONSchema(option.inputExcelFile, option.sheetName, option.outputDir, embeded.checked, option.versionSchema);

        outputInfo.innerHTML += "Terminated";
    }

});


