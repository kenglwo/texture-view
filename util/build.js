const fs = require("fs-extra");
const childProcess = require("child_process");

try {
  // Remove current build
  fs.removeSync("./dist/");
  // Copy front-end files
  fs.copySync("./src/public", "./dist/public");
  fs.copySync("./src/views", "./dist/views");
  // Transpile the typescript files
  childProcess.exec(
    "tsc --build tsconfig.prod.json",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`[ERROR] ${error}`);
        return;
      }
      fs.renameSync("./dist/src/Server.js", "./dist/Server.js");
      fs.renameSync("./dist/src/start.js", "./dist/start.js");
      fs.renameSync("./dist/src/routes", "./dist/routes");
      fs.removeSync("./dist/src");
    }
  );
} catch (err) {
  console.log(err);
}
