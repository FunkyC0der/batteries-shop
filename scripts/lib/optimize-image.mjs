import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import sharp from "sharp";

export const IMAGE_WIDTHS = {
  card: 800,
  detail: 1200,
};

/**
 * @param {string} inputPath
 * @param {{ maxWidth?: number; quality?: number; outputPath?: string }} [options]
 * @returns {Promise<{ outputPath: string; bytesBefore: number; bytesAfter: number; skipped: boolean }>}
 */
export async function optimizeImageFile(inputPath, options = {}) {
  const maxWidth = options.maxWidth ?? IMAGE_WIDTHS.detail;
  const quality = options.quality ?? 82;
  const extension = extname(inputPath).toLowerCase();
  const outputPath =
    options.outputPath ??
    (extension === ".webp"
      ? inputPath
      : inputPath.replace(/\.(png|jpe?g|gif|avif)$/i, ".webp"));

  const input = await readFile(inputPath);
  const image = sharp(input, { failOn: "none" });
  const metadata = await image.metadata();

  const needsResize = (metadata.width ?? 0) > maxWidth;
  const alreadySmallWebp =
    extension === ".webp" &&
    outputPath === inputPath &&
    !needsResize &&
    input.byteLength <= 180_000;

  if (alreadySmallWebp) {
    return {
      outputPath,
      bytesBefore: input.byteLength,
      bytesAfter: input.byteLength,
      skipped: true,
    };
  }

  let pipeline = sharp(input, { failOn: "none" });
  if (needsResize) {
    pipeline = pipeline.resize({
      width: maxWidth,
      withoutEnlargement: true,
    });
  }

  const output = await pipeline.webp({ quality, effort: 4 }).toBuffer();
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, output);

  return {
    outputPath,
    bytesBefore: input.byteLength,
    bytesAfter: output.byteLength,
    skipped: false,
  };
}

/**
 * Optimize a freshly downloaded image in place / to webp and return the public path.
 * @param {string} absolutePath
 * @param {string} publicPath
 */
export async function optimizeDownloadedImage(absolutePath, publicPath) {
  try {
    await access(absolutePath);
  } catch {
    return publicPath;
  }

  const result = await optimizeImageFile(absolutePath, {
    maxWidth: IMAGE_WIDTHS.detail,
  });
  const nextPublicPath = publicPath.replace(/\.(png|jpe?g|gif|avif)$/i, ".webp");

  if (result.outputPath !== absolutePath && /\.(png|jpe?g|gif|avif)$/i.test(absolutePath)) {
    // Keep original download for now; public path points at webp.
  }

  return nextPublicPath.endsWith(".webp") ? nextPublicPath : publicPath;
}

/**
 * @param {string} directory
 * @returns {Promise<string[]>}
 */
export async function listImageFiles(directory) {
  const { readdir } = await import("node:fs/promises");
  /** @type {string[]} */
  const files = [];

  async function walk(current) {
    let entries;
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const path = join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(path);
        continue;
      }
      if (/\.(png|jpe?g|webp|gif|avif)$/i.test(entry.name)) {
        files.push(path);
      }
    }
  }

  await walk(directory);
  return files;
}
