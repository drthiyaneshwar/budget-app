// Copies the inline script out of index.html so `node --check` can read it.
// Usage: node extract-script.js index.html output.js
const fs = require('fs');

const [htmlPath, outPath] = process.argv.slice(2);
const html = fs.readFileSync(htmlPath, 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if (scripts.length !== 1) {
  console.error(`Expected one inline script, found ${scripts.length}`);
  process.exit(1);
}
fs.writeFileSync(outPath, scripts[0][1]);
