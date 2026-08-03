import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = process.cwd();

function walk(directory: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(path));
      continue;
    }
    if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
      files.push(path);
    }
  }
  return files;
}

describe("client catalog import guard", () => {
  it("keeps catalog data modules out of client components", () => {
    const offenders = walk(join(ROOT, "src")).filter((file) => {
      const source = readFileSync(file, "utf8");
      if (
        !source.includes('"use client"') &&
        !source.includes("'use client'")
      ) {
        return false;
      }

      return (
        /from\s+["']@\/lib\/data["']/.test(source) ||
        /from\s+["']@\/lib\/catalog["']/.test(source) ||
        /from\s+["']@\/lib\/catalog\/(?!list-projection)[^"']+["']/.test(source)
      );
    });

    expect(offenders).toEqual([]);
  });
});
