import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import getTableProps from "./get-auto-table-props.js";
import getTableDocs from './get-auto-table-docs.js';
import getAutoTableExample from './get-auto-table-example.js';
import generateAutoTableColumn from './generate-auto-table-column.js';

export default function registryTools(server: McpServer) {
  [getTableProps, getTableDocs, getAutoTableExample, generateAutoTableColumn].forEach((registryFn) => {
    registryFn(server)
  })
}