import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getFixedColInfo } from "../utils/getColInfo.js";

/** 根据操作列的按钮信息使用ActionGroup组件生成符合 AutoTable 组件规范的操作列 */
const registryTool = (server: McpServer) => {
  server.tool(
    "generate-auto-table-action",
    `根据操作列按钮信息使用ActionGroup组件生成符合 AutoTable 组件规范的操作列
适用场景:
1. 用户给出表格中操作列的按钮信息, 根据操作列按钮信息并结合ActionGroup组件生成符合AutoTable组件规范的操作列
2. 用户通过上传图片, 根据图片解析出表格中操作列的按钮信息并使用ActionGroup组件生成columns中对应操作列的render属性

如何使用返回结果:
1. 以当前tool返回的结果构建AutoTable组件的columns属性中操作列的render属性
2. 不要篡改返回结果, 不要将其转化为标准的Antd Table格式
3. 属性尽可能的保留, 并以此为参考构建更适合的render属性

限制:
1. 始终通过src/components/AutoTable引入ActionGroup组件
2. 不要虚构不存在的属性`,
    {
      actions: z
        .array(
          z.object({
            title: z.string().describe("操作按钮名称"),
            icon: z.string().describe("操作按钮图标"),
            isMore: z
              .boolean()
              .describe("是否是更多按钮(竖着排列的三个点即为更多)"),
          })
        )
        .describe("操作列的按钮信息列表"),
      hasMore: z.boolean().describe("是否有更多操作(竖着排列的三个点即为更多)"),
      actionCount: z
        .boolean()
        .describe("除了Dropdown中及更多按钮外剩余展示的按钮数量"),
    },
    async ({ actions, hasMore, actionCount }) => {
      const generateActionGroup = (actions ?? [])
        .filter((action) => !action.isMore)
        .map((action) => {
          return {
            ...action,
            rules: [],
            onClick: () => {
              // TODO
            },
          };
        });

      const titleLimit = hasMore ? `tileLimit=${actionCount}` : ``;

      return {
        content: [
          {
            type: "text",
            description: "AutoTable组件所使用到的columns定义",
            text: `return <ActionGroup 
            actions=${JSON.stringify(generateActionGroup, null, 2)}
            ${titleLimit}
            />`,
          },
        ],
      };
    }
  );
};

export default registryTool;
