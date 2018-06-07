const version = process.version;

nodeVersion = document.querySelector("[data-nodejs-version] > span");

nodeVersion.innerHTML = version;
