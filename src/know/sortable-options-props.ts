/**
 * SortableOptions 排序配置相关props
 */

export const SortableOptionsPropsInfo: Record<
  string,
  {
    /** 描述 */
    description: string;
    /** 是否必传 */
    required: boolean;
    /** 数据类型 */
    type: string;
    /** 默认值 */
    default: any;
  }
> = {
  rowDisabled: {
    description: "设置行是否禁用拖拽",
    required: false,
    type: `(record: RecordType) => boolean`,
    default: undefined,
  },
  rowFixed: {
    description: "设置行是否禁用被移动",
    required: false,
    type: `(record: RecordType) => boolean`,
    default: undefined,
  },
  showHandle: {
    description: "是否展示拖拽手柄",
    required: false,
    type: "boolean",
    default: true,
  },
  customHandle: {
    description: "自定义拖拽手柄",
    required: false,
    type: `(record: RecordType) => React.ReactElement`,
    default: undefined,
  },
  disabledHandleTip: {
    description: "禁用时拖拽手柄的提示文案",
    required: false,
    type: "string",
    default: undefined,
  },
  draggingRowClassName: {
    description: "拖拽中行的类名",
    required: false,
    type: "string",
    default: undefined,
  },
  groups: {
    description:
      "分组表格使用的key值数组（禁用跨分组拖拽）(GroupTable内部使用属性无需传入)",
    required: false,
    type: "string[]",
    default: undefined,
  },
  onStart: {
    description: "开始拖拽时的回调",
    required: false,
    type: `(startIndex: number, startRowId: string | number) => void`,
    default: undefined,
  },
  onEnd: {
    description: "结束拖拽时的回调",
    required: false,
    type: `(
   indexInfo?: { oldDraggableIndex?: number; newDraggableIndex?: number; item?: any },
   idInfo?: {
     oldRowId: string | number;
     newRowId: string | number;
   },
 ) => void`,
    default: undefined,
  },
  onChange: {
    description:
      "排序变化后的回调 (如有性能问题，建议使用AutoTable实例的方法在完成排序后调用)",
    required: false,
    type: `(newData: RecordType[]) => void`,
    default: undefined,
  },
  onExpandRowKeysChange: {
    description: "树型数据拖拽内部节点展开/收起变更的回调",
    required: false,
    type: `(expandRowKeys: (string | number)[]) => void`,
    default: undefined,
  },
  hoverTime: {
    description: "悬停展开hover时间",
    required: false,
    type: "number",
    default: 300,
  },
  allowLeafAsParent: {
    description: "树型表格是否允许叶子节点作为父节点",
    required: false,
    type: "boolean",
    default: true,
  },
};
