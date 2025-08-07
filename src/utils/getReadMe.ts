import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url); // 当前文件路径
const __dirname = dirname(__filename); // 当前文件所在目录

/** 获取AutoTable的帮助文档  */
export const getAutoTableDocumentation = async () => {
  const docPath = join(__dirname, '../docs/README.md');

  try {
    if (existsSync(docPath)) {
      const docResult = await readFile(docPath, "utf-8");
      return docResult;
    }

    return `AutoTable 组件文档不存在 ${docPath}`;
  } catch (error) {
    console.error(
      `获取 AutoTable 组件文档错误: ${(error as Error).message}`
    );
    return `获取 AutoTable 组件文档错误: ${(error as Error).message}`;
  }
};
