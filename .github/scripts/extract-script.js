// Copies the inline scripts out of index.html so `node --check` can read them.
// Each script is wrapped in its own block so they are checked separately.
// Usage: node extract-script.js index.html output.js
const fs = require('fs');

const [htmlPath, outPath] = process.argv.slice(2);
const html = fs.readFileSync(htmlPath, 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if (scripts.length === 0) {
  console.error('Expected at least one inline script, found none');
  process.exit(1);
}
fs.writeFileSync(outPath, scripts.map(match => `{\n${match[1]}\n}`).join('\n'));
