import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..', '..');
const publicDir = path.resolve(__dirname, '..', 'public');

console.log(`[sync-static] Syncing static assets from ${rootDir} to ${publicDir}...`);

// Ensure publicDir exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Copy root HTML files
const files = fs.readdirSync(rootDir);
for (const file of files) {
  if (file.endsWith('.html')) {
    const src = path.join(rootDir, file);
    const dest = path.join(publicDir, file);
    fs.copyFileSync(src, dest);
    console.log(`[sync-static] Copied ${file}`);
  }
}

// 2. Copy directories: css, js, images, extra
const dirsToCopy = ['css', 'js', 'images', 'extra'];
for (const dir of dirsToCopy) {
  const srcDir = path.join(rootDir, dir);
  const destDir = path.join(publicDir, dir);
  if (fs.existsSync(srcDir)) {
    if (fs.existsSync(destDir)) {
      fs.rmSync(destDir, { recursive: true, force: true });
    }
    fs.cpSync(srcDir, destDir, { recursive: true, force: true, dereference: true });
    console.log(`[sync-static] Copied directory ${dir}/`);
  }
}

console.log('[sync-static] Static assets synced successfully.');
