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
2. 用户通过上传图片, 根据图片解析出表格列的信息并生成columns属性`,
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

        if (column.isAction) {
          res.iconNumber = 2;
          res.render = `(text, record) => {
            return (
              <ActionGroup
                actions={[
                  {
                    title: '编辑',
                    icon: 'icon-edit',
                  },
                  {
                    title: '删除',
                    icon: 'icon-delete',
                  },
                ]}
              />
            );
          }`;
        }

        return res;
      });

      return {
        content: [
          {
            type: "text",
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
