import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { TablePropsInfo } from "../know/table-props.js";
import { ColumnPropsInfo } from "../know/column-props.js";
import { BatchActionsPropsInfo } from "../know/batch-actions-props.js";
import { PaginationPropsInfo } from "../know/pagination-props.js";
import { SortableOptionsPropsInfo } from "../know/sortable-options-props.js";
import { de } from "zod/v4/locales";

/** 获取AutoTable属性信息 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-auto-table-props",
    `获取 AutoTable 组件属性的信息
适用场景：
1. 用户询问如何使用特定AutoTable属性
2. 用户需要查看AutoTable该属性的相关信息和类型定义
3. 用户询问column, 分页器, 批量操作, 拖拽排序相关属性定义`,
    { propsName: z.string().describe("AutoTable组件传入的属性名") },
    async ({ propsName }) => {
      const propsInfo =
        TablePropsInfo[propsName as string] ??
        ColumnPropsInfo[propsName as string] ??
        PaginationPropsInfo[propsName as string] ??
        BatchActionsPropsInfo[propsName as string] ??
        SortableOptionsPropsInfo[propsName as string] ??
        {};
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              propsName,
              ...propsInfo,
            }, null, 2),
          },
        ],
      };
    }
  );
};

export default registryTool;
