import fs from 'node:fs';
import path from 'node:path';

import archiver from 'archiver';

const output = fs.createWriteStream(path.join(import.meta.dirname, '..', 'dist.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

archive.pipe(output);
archive.directory(path.join(import.meta.dirname, '..', 'dist'), 'dist');
archive.finalize();

console.log('Archive created: dist.zip');
