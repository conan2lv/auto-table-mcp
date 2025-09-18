import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getFixedColInfo } from '../utils/getColInfo.js'

/** 根据列信息生成符合 AutoTable 组件规范的columns属性 */
const registryTool = (server: McpServer) => {
  server.tool(
    "generate-auto-table-column",
    `根据列信息生成符合 AutoTable 组件规范的columns属性
适用场景：
1. 用户给出表格列的信息, 根据列信息生成符合AutoTable组件规范的columns属性
2. 用户通过上传图片, 根据图片解析出表格列的信息并生成columns属性

如何使用返回结果
1. 以当前tool返回的结果构建AutoTable组件的columns属性
2. 不要篡改返回结果, 不要将其转化为标准的Antd Table格式
3. 属性尽可能的保留, 并以此为参考构建更适合的columns属性`,
    {
      columns: z
        .array(
          z.object({
            title: z.string().describe("列标题"),
            dataIndex: z.string().describe("列对应的字段名"),
            width: z.number().describe("列的宽度"),
            isAction: z.boolean().describe("是否为操作列"),
          })
        )
        .describe("表格的列信息列表"),
    },
    async ({ columns }) => {
      const generateColumns = (columns ?? []).map((column) => {
        const res: any = getFixedColInfo(column.title, column.dataIndex, column.width);
        return res;
      });

      return {
        content: [
          {
            type: "text",
            description: "AutoTable组件所使用到的columns定义",
            text: `const columns: ColumnProps<any>[] = ${JSON.stringify(
              generateColumns,
              null,
              2
            )}`,
          },
        ],
      };
    }
  );
};

export default registryTool;
