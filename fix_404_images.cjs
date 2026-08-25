const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'Main_Source');
const imgDir = path.join(__dirname, 'Main_Images');

// Build a map of filename -> relative path from Main_Images
const imgMap = new Map();

function buildImgMap(dir, baseDir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            buildImgMap(fullPath, baseDir);
        } else {
            // e.g. b3_compact.webp -> /products/b3/b3_compact.webp
            imgMap.set(file, '/' + path.relative(baseDir, fullPath).replace(/\\/g, '/'));
        }
    }
}
buildImgMap(imgDir, imgDir);

// Now process .astro files
let totalReplaced = 0;

function processAstroFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processAstroFiles(fullPath);
        } else if (fullPath.endsWith('.astro')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Match <img ... src="/assets/img/..." ...>
            const imgRegex = /<img\s+([^>]*?)src=["'](\/assets\/img\/[^"']+)["']([^>]*)>/gi;
            
            content = content.replace(imgRegex, (match, before, srcUrl, after) => {
                const filename = path.basename(srcUrl);
                if (imgMap.has(filename)) {
                    const newUrl = imgMap.get(filename);
                    console.log(`[FIXED] ${srcUrl} -> ${newUrl}`);
                    modified = true;
                    totalReplaced++;
                    return `<img ${before}src="${newUrl}"${after}>`;
                }
                console.log(`[NOT FOUND] Cannot find ${filename} in Main_Images!`);
                return match;
            });

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Saved: ${fullPath}`);
            }
        }
    }
}

processAstroFiles(srcDir);
console.log(`\n✅ Total image paths fixed: ${totalReplaced}`);
