const os = require("os")
const version = process.version;

osVersion = document.querySelector("[data-nodejs-integration] > span");
nodeVersion = document.querySelector("[data-nodejs-version] > span");

osVersion.innerHTML = os.platform();
nodeVersion.innerHTML = version;


