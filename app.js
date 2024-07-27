const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((res, rej) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        rej(err);
      } else {
        res(data);
      }
    });
  });
};

getText("./folder/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
