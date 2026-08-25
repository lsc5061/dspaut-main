const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const distDir = path.join(__dirname, 'dist');
const renamedMap = new Map(); // e.g. "b3_compact.png" -> "b3_compact.webp"

async function optimizeImages(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            await optimizeImages(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            const basename = path.basename(fullPath, ext);
            
            // Skip non-images or already optimized _astro hashes if we only want to target our raw images
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const newFullPath = path.join(dir, basename + '.webp');
                
                try {
                    const originalSize = fs.statSync(fullPath).size;
                    
                    // Convert to WebP
                    await sharp(fullPath)
                        .webp({ quality: 80, effort: 6 })
                        .toFile(newFullPath);
                    
                    const newSize = fs.statSync(newFullPath).size;
                    
                    // If WebP is smaller, keep WebP and delete original
                    if (newSize < originalSize) {
                        fs.unlinkSync(fullPath);
                        renamedMap.set(file, basename + '.webp');
                        console.log(`[OPTIMIZED] ${file} -> ${basename}.webp (${Math.round((originalSize - newSize) / 1024)}KB saved)`);
                    } else {
                        // If somehow larger, keep original and delete WebP
                        fs.unlinkSync(newFullPath);
                        
                        // Just compress the original in place (e.g. lossless)
                        const buffer = await sharp(fullPath).toBuffer();
                        fs.writeFileSync(fullPath, buffer);
                        console.log(`[OPTIMIZED] ${file} (compressed in place)`);
                    }
                } catch (e) {
                    console.error(`Failed to optimize ${fullPath}:`, e);
                }
            } else if (ext === '.webp') {
                // Compress existing webp
                try {
                    const originalSize = fs.statSync(fullPath).size;
                    const buffer = await sharp(fullPath).webp({ quality: 80, effort: 6 }).toBuffer();
                    if (buffer.length < originalSize) {
                        fs.writeFileSync(fullPath, buffer);
                        console.log(`[OPTIMIZED] ${file} (${Math.round((originalSize - buffer.length) / 1024)}KB saved)`);
                    }
                } catch(e) {
                    // Ignore
                }
            }
        }
    }
}

function updateHtmlReferences(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            updateHtmlReferences(fullPath);
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Simple global replace for all renamed filenames
            for (const [oldName, newName] of renamedMap.entries()) {
                // Ensure we only replace if preceded by a slash or quote to avoid partial matches
                const regex = new RegExp(`(?<=[/'"])${oldName}(?=[/"'?#])`, 'g');
                if (regex.test(content)) {
                    content = content.replace(regex, newName);
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated HTML: ${file}`);
            }
        }
    }
}

async function run() {
    console.log("🚀 Starting Post-Build Image Optimization...");
    if (!fs.existsSync(distDir)) {
        console.log("No dist directory found. Skipping.");
        return;
    }
    await optimizeImages(distDir);
    
    if (renamedMap.size > 0) {
        console.log(`\n🔄 Updating HTML references for ${renamedMap.size} converted files...`);
        updateHtmlReferences(distDir);
    }
    
    console.log("✨ Optimization Complete!");
}

run();
