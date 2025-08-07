import { readFile, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url); // 当前文件路径
const __dirname = dirname(__filename); // 当前文件所在目录

/** 获取AutoTable的组件示例  */
export const getAutoTableExamples = async () => {
  const examplesDir = join(__dirname, '../../dist/examples');

  try {
    if (existsSync(examplesDir)) {
      // 读取目录下的所有.md文件
      const files = await readdir(examplesDir);
      const mdFiles = files.filter(file => file.endsWith('.md'));
      
      // 读取所有.md文件内容并拼接
      let docResult = '';
      for (const file of mdFiles) {
        const filePath = join(examplesDir, file);
        const content = await readFile(filePath, "utf-8");
        docResult += `# ${file}\n\n${content}\n\n`;
      }
      
      return docResult;
    }

    return `AutoTable 组件文档目录不存在 ${examplesDir}`;
  } catch (error) {
    console.error(
      `获取 AutoTable 组件文档错误: ${(error as Error).message}`
    );
    return `获取 AutoTable 组件文档错误: ${(error as Error).message}`;
  }
};