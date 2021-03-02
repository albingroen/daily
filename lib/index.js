const { spawn } = require("child_process");
const fs = require("fs");
const {formatDateForName, formatDateForTitle} = require("../utils/date");

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

  const filePath = `${dir}/${formatDateForName(new Date().toISOString())}.md`;

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, TEMPLATE(formatDateForTitle(new Date().toISOString())));
    openInVim(filePath);
  } else {
    openInVim(filePath);
  }
};

module.exports = main
