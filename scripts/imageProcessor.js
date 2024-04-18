const fs = require("fs");
const sharp = require("sharp");
const path = require("path");

async function processImage(inputPath) {
  try {
    const outputPath = path.join(
      path.dirname(inputPath),
      "temp_" + path.basename(inputPath),
    );

    let transformer = sharp(inputPath).resize({
      width: 896,
      height: 504,
      fit: "inside",
      withoutEnlargement: false,
    });

    await transformer.toFile(outputPath);

    fs.renameSync(outputPath, inputPath);
    console.log("Image processed and saved:", inputPath);
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

const inputPath = process.argv[2];
processImage(inputPath);
