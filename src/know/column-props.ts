/**
 * @description column props定义
 */

export const ColumnPropsInfo: Record<
  string,
  {
    /** 描述 */
    description: string;
    /** 是否必传 */
    required: boolean;
    /** 类型 */
    type: string;
    /** 默认值 */
    default: any;
  }
> = {
  title: {
    description:
      "列标题, title会在固定表头时因表格滚动条出现/消失引起dom结构变化而重新渲染, title自定义组件状态需要在外部维护",
    required: false,
    type: "ColumnTitle<RecordType>",
    default: undefined,
  },
  width: {
    description: "列宽度, 仅限number, 单位px, 此时该列为固定宽度",
    required: false,
    type: "number",
    default: undefined,
  },
  iconNumber: {
    description: "图标数量",
    required: false,
    type: "number",
    default: undefined,
  },
  length: {
    description: "字符长度（以中文的宽度为单位）",
    required: false,
    type: "number",
    default: undefined,
  },
  numLen: {
    description: "数字位数（纯数字展示使用，为0.6的中文宽度单位）",
    required: false,
    type: "number",
    default: undefined,
  },
  time: {
    description:
      "时间格式 (展示时间的列所用), 设置为true，则默认为yyyy-mm-dd hh:mm:ss",
    required: false,
    type: "string | boolean",
    default: undefined,
  },
  range: {
    description:
      "列数据的取值范围, 可以是字符串数组或key-value格式对象，取其中最长字符计算宽度",
    required: false,
    type: "string[] | Record<string, string>",
    default: undefined,
  },
  weights: {
    description: "非固宽列占比权重",
    required: false,
    type: "number",
    default: undefined,
  },
  isFixed: {
    description: "宽度是否固定",
    required: false,
    type: "boolean",
    default: undefined,
  },
  line: {
    description: "是否展示指定行数，用Abbr组件包裹，仅无render方法时生效",
    required: false,
    type: "number",
    default: undefined,
  },
  keyword: {
    description: "文本高亮关键词，需line生效配合使用",
    required: false,
    type: "string",
    default: undefined,
  },
  defaultValue: {
    description:
      "当render方法第一个参数为undefined或null时的展示默认值, 也可自定义何时使用，仅无render方法时生效",
    required: false,
    type: "string | ((value: any) => string)",
    default: undefined,
  },
  titleTip: {
    description: "表头标题后面tooltip的提示, 仅配合字符串型的title使用",
    required: false,
    type: "React.ReactNode | TooltipProps",
    default: undefined,
  },
  titleMaxLength: {
    description: "title的最大长度 (适用于自定义列)",
    required: false,
    type: "number",
    default: undefined,
  },
  required: {
    description: "列title前是否显示必填样式",
    required: false,
    type: "boolean",
    default: undefined,
  },
};
