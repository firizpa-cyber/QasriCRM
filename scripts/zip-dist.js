const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const output = fs.createWriteStream(path.join(__dirname, '..', 'dist.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

archive.pipe(output);
archive.directory(path.join(__dirname, '..', 'dist'), 'dist');
archive.finalize();

console.log('Archive created: dist.zip');
