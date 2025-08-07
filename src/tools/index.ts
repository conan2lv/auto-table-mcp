import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import getTableProps from "./get-auto-table-props.js";
import getTableDocs from './get-auto-table-docs.js';
import getAutoTableExample from './get-auto-table-example.js';

export default function registryTools(server: McpServer) {
  [getTableProps, getTableDocs, getAutoTableExample].forEach((registryFn) => {
    registryFn(server)
  })
}