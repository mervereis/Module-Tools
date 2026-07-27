const fs = require("fs");

const args = process.argv.slice(2);

let numberLines = false;
let numberNonBlank = false;
const files = [];

for (const arg of args) {
  if (arg === "-n") {
    numberLines = true;
  } else if (arg === "-b") {
    numberNonBlank = true;
  } else {
    files.push(arg);
  }
}

if (numberNonBlank) {
  numberLines = false;
}

let lineNumber = 1;

for (const file of files) {
  try {
    const contents = fs.readFileSync(file, "utf8");
    const lines = contents.split("\n");

    lines.forEach((line, index) => {
      const output = index < lines.length - 1 ? line + "\n" : line;

      if (numberNonBlank) {
        if (line.trim() === "") {
          process.stdout.write(output);
        } else {
          process.stdout.write(`${String(lineNumber).padStart(6)}\t${output}`);
          lineNumber++;
        }
      } else if (numberLines) {
        process.stdout.write(`${String(lineNumber).padStart(6)}\t${output}`);
        lineNumber++;
      } else {
        process.stdout.write(output);
      }
    });
  } catch (err) {
    console.error(`cat: ${file}: ${err.message}`);
  }
}
