const tap = require('tap');
const shell = require('shelljs');
const path = require('path');

const test = tap.test;
const zcui = `node ${path.resolve(__dirname, '../../../index.js')} create page`;
const testProjPath = path.resolve(__dirname, '../../../temp/test-proj');

/*
 * hello-world was project created
 * in new command testing
 */
shell.cd(path.join(testProjPath, 'hello-world'));

test("CREATE_PAGE: Shows help on --help", t => {
  const command = `${zcui} --help`;
  shell.exec(command, {silent:true}, (code, stdout) => {
    if(code === 1) t.fail();
    t.equal(stdout.trim(), `../../../index.js create page <name>

Options:
  --layout, -l   layout for the page        [string] [required] [choices: false]
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]

Examples:
  ../../../index.js create page Home --layout default # for page with layout
  default
  ../../../index.js create page Home --no-layout      # for page without any
  layout
    `.trim());
    t.end();
  });
});

