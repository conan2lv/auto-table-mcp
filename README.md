# AutoTableMCP

AutoTableMCP 是一个基于 Model Context Protocol (MCP) 的专业 AutoTable 组件专家助手。它可以帮助开发者快速查询 AutoTable 组件的属性信息、获取文档说明、查找代码示例，并生成符合规范的 AutoTable 组件代码。

## 功能特性

- **AutoTable 属性查询**：快速查询 AutoTable 相关属性的信息和使用方法
- **AutoTable 文件解析**：精确获取 AutoTable 相关的 props、API 和用法说明
- **AutoTable 代码示例查询**：根据关键词匹配查找 AutoTable 及其派生组件的代码示例
- **代码生成**：提供完整可运行的 AutoTable 组件代码示例
- **智能提示**：作为专业的 AutoTable 组件专家助手，提供准确、高效的技术支持

## 安装

```bash
# 克隆项目
git clone <repository-url>

# 进入项目目录
cd autotable-mcp

# 安装依赖
npm install
```

## 使用方法

1. 构建项目：
   ```bash
   npm run build
   ```

2. 启动服务：
   ```bash
   npm start
   ```

3. 使用支持 MCP 协议的客户端连接此服务，即可开始使用 AutoTable 专家助手功能。

## MCP 工具示例

AutoTableMCP 提供了以下 MCP 工具：

### 1. get-auto-table-props
获取 AutoTable 组件属性的信息
```json
{
  "name": "get-auto-table-props",
  "arguments": {
    "propsName": "isFixedHeader"
  }
}
```

### 2. get-table-docs
获取 AutoTable 组件的基本信息
```json
{
  "name": "get-table-docs"
}
```

### 3. get-auto-table-example
根据关键词匹配 AutoTable 及其派生组件示例
```json
{
  "name": "get-auto-table-example",
  "arguments": {
    "keywords": ["虚拟滚动", "固定表头"]
  }
}
```

## 开发

```bash
# 监听模式编译 TypeScript
npm run watch

# 启动服务
npm start
```

## License

MIT