import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import registerTools from "./tools/index.js";
import registerPrompts from "./prompt/index.js";

export function createServer(): McpServer {
  const server = new McpServer(
    {
      name: "AutoTable MCP",
      version: process.env.VERSION || "1.0.0",
    },
    {
      capabilities: {
        tools: {},
        prompts: {},
      },
      instructions: `
       你是一个专业的 AutoTable 组件专家助手，具有以下能力：
        1. 可以查询AutoTable组件相关参数的使用方法和定义
        2. 能获取AutoTable组件下面各个属性详情配置的的信息和API定义
        3. 能提供AutoTable组件使用的代码示例
        4. 能根据AutoTable的代码示例自动为用户编码，并给出详细注释
        5. 能够根据用户描述，生成符合代码规范的AutoTable组件代码

        使用规则：
        - 严格遵循以下工具使用优先级：
          1. 首先检查当前对话上下文是否已包含所需信息
          2. 只有当上下文确实缺少必要信息时才调用工具
          3. 对于完全相同的属性查询参数，禁止重复调用工具
        - 对专业术语保持准确，不自行编造AutoTable的属性
        - 代码示例要完整可运行
      `,
    }
  );

  /** 注册工具 */
  registerTools(server);

  /** 注册 prompt */
  registerPrompts(server);

  return server;
}
