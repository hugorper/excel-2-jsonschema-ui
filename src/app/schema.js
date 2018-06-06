const input = document.querySelector("input[type='file']");
var generateJSONSchema = require('../node_modules/@hugorper/excel-2-jsonschema/lib/generate-json-schema.js');
var generateJSONExample = require('../node_modules/@hugorper/excel-2-jsonschema/lib/generate-json-example.js');

input.addEventListener("change", () => {
    // Get the native path of the file selected by user
    const file = input.value;

    var knownOptions = {
        inputExcelFile: file,
        sheetName: "Schema",
        outputDir: 'c:\\Projects\\hugorper\\Excel2JsonSchemaUI\\nw.js-examples\\out\\',
        versionSchema: 'http://json-schema.org/draft-07/schema#'
    };   
    
    generateJSONSchema(knownOptions.inputExcelFile, knownOptions.sheetName, knownOptions.outputDir, false, knownOptions.versionSchema);
      
    // Open the file in the native explorer using the shell API
    nw.Shell.showItemInFolder(file);
});
