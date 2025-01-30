"use strict";

require("core-js/modules/es.promise.js");
console.log('Module.js');
async function start() {
  await new Promise.resolve();
}
start();