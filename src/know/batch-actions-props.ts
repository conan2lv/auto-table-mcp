/**
 * BatchActions 批量操作相关props
 */

export const BatchActionsPropsInfo: Record<
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
  leftExtra: {
    description: '左侧额外自定义渲染',
    required: false,
    type: 'React.ReactNode',
    default: undefined,
  },
  rightExtra: {
    description: '右侧额外自定义渲染',
    required: false,
    type: 'React.ReactNode',
    default: undefined,
  },
  selectedCount: {
    description: '当前选中的数量',
    required: false,
    type: 'number',
    default: undefined,
  },
  allSelectedCount: {
    description: '所有选中的数量',
    required: false,
    type: 'number',
    default: undefined,
  },
  pageCount: {
    description: '本页可选总数',
    required: false,
    type: 'number',
    default: undefined,
  },
  totalCount: {
    description: '数据总数',
    required: false,
    type: 'number',
    default: undefined,
  },
  checkedText: {
    description: '全选按钮的文案，默认全选',
    required: false,
    type: 'React.ReactNode',
    default: '全选',
  },
  onSelectAll: {
    description: '点击本页全选的回调',
    required: false,
    type: `(
    checked: boolean,
    selectedRows?: React.Key[],
    getSelectedRows?: (currentSelectedRows: RecordType[]) => RecordType[],
  ) => void`,
    default: undefined,
  },
  actions: {
    description: '操作选项',
    required: false,
    type: 'ActionProps[]',
    default: undefined,
  },
  disabled: {
    description: '是否禁用本页全选',
    required: false,
    type: 'boolean',
    default: false,
  },
  disabledTip: {
    description: '本页全选禁用的提示文案',
    required: false,
    type: 'string | React.ReactNode',
    default: undefined,
  },
  disabledTipPlacement: {
    description: '本页全选禁用的提示文案的placement',
    required: false,
    type: 'TooltipPlacement',
    default: 'top',
  },
  disabledActionTip: {
    description: '因没有被选择的行时，批量操作被禁用的提示文案',
    required: false,
    type: 'string | React.ReactNode',
    default: '请先勾选对象',
  },
  showCount: {
    description: '是否展示已选数量',
    required: false,
    type: 'boolean',
    default: false,
  },
  countTooltip: {
    description: '已选数量hover提示',
    required: false,
    type: 'string | React.ReactNode',
    default: undefined,
  },
  showTotal: {
    description: '是否展示总数, 需要showCount前置开启',
    required: false,
    type: 'boolean',
    default: false,
  },
  /** 自定义渲染批量操作的方法 */
  customRender: {
    description: '自定义渲染批量操作的方法',
    required: false,
    type: `(
    item: ActionProps,
    index?: number,
    disabled?: boolean,
    originDom?: React.ReactElement,
  ) => React.ReactElement`,
    default: undefined,
  },
  useAutoLayoutActions: {
    description: '是否启用 action 自动布局',
    required: false,
    type: 'boolean',
    default: false,
  },
  actionLimitCount: {
    description: '固定限制 action 展示数量，溢出的action会收录到更多操作中 开启useAutoLayoutActions后该属性会失效',
    required: false,
    type: 'number',
    default: undefined,
  },
  customShowCount: {
    description: '自定义渲染显示数量展示',
    required: false,
    type: `(selectedCount?: number, totalCount?: number) => React.ReactElement`,
    default: undefined,
  },
};
