const fs = require("fs");
const sharp = require("sharp");
const path = require("path");

async function processImage(inputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const outputPath = path.join(
      path.dirname(inputPath),
      "temp_" + path.basename(inputPath),
    );

    let transformer = sharp(inputPath);

    if (metadata.width < 1280 && metadata.height < 720) {
      transformer = transformer.jpeg({ quality: 80 });
    } else if (metadata.height > metadata.width) {
      transformer = transformer.resize({ height: 720 }).jpeg({ quality: 80 });
    } else {
      transformer = transformer.resize({ width: 1280 }).jpeg({ quality: 80 });
    }

    await transformer.toFile(outputPath);

    fs.renameSync(outputPath, inputPath);
    console.log("Image processed and saved:", inputPath);
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

const inputPath = process.argv[2];
processImage(inputPath);
