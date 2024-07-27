const path = require("path");
console.log(path.sep);
const filepath = path.join("/folder", "subfolder", "test");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const resolve = path.resolve(__dirname, "/folder", "subfolder", "test");
console.log(resolve);
