const { spawn } = require("child_process");
const moment = require("moment");
const fs = require("fs");

const TEMPLATE = (date) => `# ${date}

- 
- 
- `;

const openInVim = (path) => {
  const editor = process.env.EDITOR || "vi";
  spawn(editor, [path], { stdio: "inherit" });
};

const dir = `${process.env.HOME}/dayplan`;

const main = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const filePath = `${dir}/${moment().format("YYYY-MM-DD")}.md`;

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, TEMPLATE(moment().format("dddd MMMM DD, YYYY")));
    openInVim(filePath);
  } else {
    openInVim(filePath);
  }
};

module.exports = main
