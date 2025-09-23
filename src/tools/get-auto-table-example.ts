import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { tableDemos } from "../examples/index.js";

/** 根据关键词匹配AutoTable示例 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-auto-table-example",
    `根据关键词匹配 AutoTable 及其派生组件 ( GroupTable, ShrinkableTable, TableForm ) 组件示例
适用场景:
1. 用户提供关键词查询相关示例
2. 用户想要查找具有特定功能的AutoTable示例
3. 需要基于功能需求推荐合适的示例代码
4. 用户询问AutoTable及其派生组件的代码示例
5. 用户希望帮助生成AutoTable组件及其派生组件的代码
6. 用户希望结合视觉稿图片根据图片中的内容与数据生成对应的AutoTable及其派生组件的代码示例
7. 用户已经明确要使用具体某个的AutoTable示例
8. 用户询问如何改造AutoTable及其派生组件以满足要求
9. 用户询问在AutoTable及其派生组件使用过程中报错该如何处理

能力:
1. 根据用户提供的关键词在示例的title、keywords、description中进行匹配
2. 返回匹配度最高的示例或多个相关示例
3. 提供示例的完整信息，包括代码、说明和使用提示`,
    { keywords: z.array(z.string()).describe("关键词列表") },
    async ({ keywords }) => {
      const matchedExamples: Record<string, any> = {};
      
      // 遍历所有示例，查找匹配关键词的示例
      for (const [demoName, demo] of Object.entries(tableDemos)) {
        const { title, keywords: demoKeywords, description } = demo;
        
        // 检查关键词是否匹配title、description或keywords数组
        const isMatch = keywords.some(keyword => 
          title.includes(keyword) || 
          description.includes(keyword) ||
          demoKeywords.some((demoKeyword: string) => demoKeyword.includes(keyword))
        );
        
        if (isMatch) {
          matchedExamples[demoName] = demo;
        }
      }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(matchedExamples),
          },
        ],
      };
    }
  );
};

export default registryTool;