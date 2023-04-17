const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const filePath = process.argv[3];

request(url, function (error, response, body) {
  console.error("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body.length); // Print the HTML for the Google homepage.

  const data = new Uint8Array(Buffer.from("Hello Node.js"));
  fs.writeFile(filePath, data, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});
