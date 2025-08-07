/**
 * AutoTable props属性信息
 */

export const TablePropsInfo: Record<
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
  colMinWidth: {
    description:
      "非固宽列最小展示宽度，单位px，当表格剩余宽度不足以分配给非固宽列时，以此数值作为最小宽度，此时列总宽度会超过表格容器宽度，出现横向滚动条",
    required: false,
    type: "number",
    default: 100,
  },
  maxRatio: {
    description:
      "非固宽列宽度总和占总宽度最大比率, 取值[0, 100]，默认内部会根据列的定义进行计算，特殊地，当传入100时，无论表格容器宽度多宽度，固宽列的宽度始终以用户定义的为准",
    required: false,
    type: "number",
    default: undefined,
  },
  columns: {
    description: "表格列定义及配置，通过设置该属性来明确表格每一列的展示",
    required: false,
    type: "ColumnProps<RecordType>[]",
    default: undefined,
  },
  pagination: {
    description: "分页器配置",
    required: false,
    type: "false | (PaginationProps & TablePaginationConfig)",
    default: undefined,
  },
  rowSelection: {
    description: "表格行是否可选择配置",
    required: false,
    type: "RowSelectionProps<RecordType> & AntdTableProps<RecordType>['rowSelection']",
    default: undefined,
  },
  batchActions: {
    description: "批量操作配置, 需要开启rowSelection",
    required: false,
    type: "TableBatchActionProps",
    default: undefined,
  },
  xPadding: {
    description: "单元格的左右边距合计大小, 单位px（无特殊情况不需要配置）",
    required: false,
    type: "number",
    default: 32,
  },
  fontSize: {
    description: "设置表格字体大小, 单位px（无特殊情况不需要配置）",
    required: false,
    type: "number",
    default: 12,
  },
  isFixedHeader: {
    description:
      "是否固定表头, 为true时pagination属性生成的组件会被替换为AutoTable的Pagination组件",
    required: false,
    type: "boolean",
    default: false,
  },
  rowHeight: {
    description: `表格行高，用于控制所有行行高, 1行48px,2行56px,3行80px
		抽屉&弹窗中单行表格仅展示数据（表格内无输入框）的为40px
		false表示不指定rowHeight，使用默认样式`,
    required: false,
    type: "false | 40 | 48 | 56 | 80",
    default: 48,
  },
  isAnimation: {
    description: "是否开启动画过渡效果，目前仅针对虚拟列表生效",
    required: false,
    type: "boolean",
    default: false,
  },
  isVirtual: {
    description:
      "是否开启虚拟列表, 为了展示正常需同时设置isFixedHeader为true或设置scroll.y属性",
    required: false,
    type: "boolean",
    default: false,
  },
  isSortable: {
    description:
      "是否开启表格排序功能（非虚拟列表和虚拟列表的拖拽功能有差异，请根据实际情况选择）",
    required: false,
    type: "boolean",
    default: false,
  },
  sortableOptions: {
    description:
      "表格拖拽排序相关参数配置（虚拟列表下拖拽配置参考SortableOptions，非虚拟列表下拖拽配置参考https://sortablejs.com/options）",
    required: false,
    type: "SortableOptions<RecordType> & { [key: string]: any }",
    default: undefined,
  },
  emptyOptions: {
    description: "表格空状态配置",
    required: false,
    type: "EmptyProps",
    default: undefined,
  },
  openScrollBottomShadow: {
    description:
      "是否展示底部滚动阴影 暂时用openScrollBottomShadow控制 不默认都放开",
    required: false,
    type: "boolean",
    default: false,
  },
  scrollToBottom: {
    description: "表格滚动到底部触发的回调，需配合isFixedHeader为true才生效",
    required: false,
    type: "() => void",
    default: undefined,
  },
};
