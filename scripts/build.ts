import fs from 'node:fs';
import path from 'node:path';

const pkg = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, '..', 'package.json'), 'utf8'));
const version = pkg.version;

console.log(`Building QasriCRM v${version} for production...`);
