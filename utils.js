const fs = require("fs");
const csv = require("csv-parser");

function readCsvWithPagination(filePath, pageSize = 10, pageNumber = 1) {
  let results = [];
  let start = pageSize * (pageNumber - 1);
  let end = pageSize * pageNumber;

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", () => {
        let paginatedResults = results.slice(start, end);
        resolve(paginatedResults);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}
module.exports = { readCsvWithPagination };
