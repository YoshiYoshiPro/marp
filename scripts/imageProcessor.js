const sharp = require("sharp");

async function processImage(inputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();

    let transformer = sharp(inputPath);

    if (metadata.width < 1280 && metadata.height < 720) {
      // 画像のサイズが1280x720未満ならそのままJPEGで保存
      transformer = transformer.jpeg({ quality: 80 });
    } else if (metadata.height > metadata.width) {
      // 縦が横より大きい場合、縦を720にリサイズ
      transformer = transformer.resize({ height: 720 }).jpeg({ quality: 80 });
    } else {
      // 横が縦より大きい場合、横を1280にリサイズ
      transformer = transformer.resize({ width: 1280 }).jpeg({ quality: 80 });
    }

    // 変更した画像を元のファイルに上書き保存
    await transformer.toFile(inputPath);

    console.log("Image processed and saved:", inputPath);
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

// コマンドラインからのファイルパスを取得
const inputPath = process.argv[2];
processImage(inputPath);
