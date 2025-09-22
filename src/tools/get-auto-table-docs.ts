import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getAutoTableDocumentation } from "../utils/getReadMe.js";

/** 获取AutoTable的基本信息和使用介绍 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-table-docs",
    `获取 AutoTable 组件的基本信息
适用场景：
1. 用户询问如何使用AutoTable组件
2. 用户询问使用AutoTable过程中的注意事项
3. 用户询问非固宽列和固宽列的定义与区别
4. 用户询问AutoTable的内置方法
5. 用户询问在使用AutoTable过程中遇到一些问题的解决方法

限制:
1. 始终通过src/components/AutoTable引入AutoTable组件
2. 无需设置不常用属性border, size, scroll.x`,
    {},
    async () => {
      const documentation = await getAutoTableDocumentation();
      return {
        content: [
          {
            type: "text",
            text: `AutoTable组件文档：
            ${documentation}`,
          },
        ],
      };
    }
  );
};

export default registryTool;
