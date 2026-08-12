const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');

console.log(`Scanning assets in: ${assetsDir}`);

if (!fs.existsSync(assetsDir)) {
  console.error('Assets directory does not exist!');
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const pngFiles = files.filter(file => file.endsWith('.png') && file !== 'logo.png');

console.log(`Found ${pngFiles.length} PNG file(s) to convert:`, pngFiles);

let completed = 0;
let errors = 0;

if (pngFiles.length === 0) {
  console.log('No PNG files to convert.');
  process.exit(0);
}

pngFiles.forEach(file => {
  const inputPath = path.join(assetsDir, file);
  const outputPath = inputPath.replace('.png', '.webp');
  
  console.log(`Converting ${file} -> ${path.basename(outputPath)}...`);
  
  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => {
      console.log(`Successfully converted ${file} (${(fs.statSync(inputPath).size / 1024).toFixed(1)} KB -> ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)`);
      completed++;
      checkFinished();
    })
    .catch(err => {
      console.error(`Error converting ${file}:`, err);
      errors++;
      checkFinished();
    });
});

function checkFinished() {
  if (completed + errors === pngFiles.length) {
    console.log(`\nConversion complete. Success: ${completed}, Failed: ${errors}`);
    process.exit(errors > 0 ? 1 : 0);
  }
}
