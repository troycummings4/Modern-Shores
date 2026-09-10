const fs = require('fs');
const path = require('path');

// Tiny file-backed JSON store. Writes are synchronous and atomic
// (write to temp file, then rename) so a crash mid-write can't corrupt data.
class JsonStore {
  constructor(filePath, defaultData) {
    this.filePath = filePath;
    if (!fs.existsSync(this.filePath)) {
      fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
      fs.writeFileSync(this.filePath, JSON.stringify(defaultData, null, 2));
    }
  }

  read() {
    return JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
  }

  write(data) {
    const tmp = `${this.filePath}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(data, null, 2));
    fs.renameSync(tmp, this.filePath);
  }
}

module.exports = { JsonStore };
