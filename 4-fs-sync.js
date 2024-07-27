const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./folder/first.txt", "utf8");
const second = readFileSync("./folder/second.txt", "ascii");
console.log(first, second);

writeFileSync(
  "./folder/result-sync.txt",
  `Here is text : ${first} & ${second}`
);
