const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Fix PDF paths in .ts files
            const regex = /"\/?assets\/docs\/([^"]+)"/g;
            if (regex.test(content)) {
                let imports = '';
                content = content.replace(regex, (match, filename) => {
                    const varName = filename.replace(/[^a-zA-Z0-9]/g, '') + 'Url';
                    imports += `import ${varName} from '@contents/docs/${filename}?url';\n`;
                    return varName;
                });
                content = imports + '\n' + content;
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated TS: ${fullPath}`);
            }
        } else if (fullPath.endsWith('.astro')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Fix image aliases
            const aliasRegexes = [
                { match: /import\s+([a-zA-Z0-9_]+)\s+from\s+['"](?:\.\.\/)+assets\/products\/([^'"]+)['"]/g, replacement: "import $1 from '@products/$2'" },
                { match: /import\s+([a-zA-Z0-9_]+)\s+from\s+['"](?:\.\.\/)+assets\/software\/([^'"]+)['"]/g, replacement: "import $1 from '@software/$2'" },
                { match: /import\s+([a-zA-Z0-9_]+)\s+from\s+['"](?:\.\.\/)+assets\/home\/([^'"]+)['"]/g, replacement: "import $1 from '@home/$2'" },
                { match: /import\s+([a-zA-Z0-9_]+)\s+from\s+['"](?:\.\.\/)+assets\/layout\/([^'"]+)['"]/g, replacement: "import $1 from '@layout/$2'" }
            ];

            for (const {match, replacement} of aliasRegexes) {
                if (match.test(content)) {
                    content = content.replace(match, replacement);
                    modified = true;
                }
            }

            // Fix PDF paths in .astro files
            const pdfRegex = /"\/assets\/docs\/([^"]+)"/g;
            if (pdfRegex.test(content)) {
                content = content.replace(pdfRegex, (match, filename) => {
                    return `{(await import('@contents/docs/${filename}?url')).default}`;
                });
                modified = true;
            }

            // Fix video paths in .astro files
            const videoRegex = /"\/assets\/videos\/([^"]+)"/g;
            if (videoRegex.test(content)) {
                content = content.replace(videoRegex, (match, filename) => {
                    return `{(await import('@contents/videos/${filename}?url')).default}`;
                });
                modified = true;
            }

            // Fix model paths in .astro files
            const modelRegex = /'\/assets\/models\/([^']+)'/g;
            if (modelRegex.test(content)) {
                content = content.replace(modelRegex, (match, filename) => {
                    return `(await import('@contents/models/${filename}?url')).default`;
                });
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated Astro: ${fullPath}`);
            }
        }
    }
}

processDir(path.join(__dirname, 'Main_Source'));
