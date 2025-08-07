/**
 * Pagination 分页器相关props
 */

export const PaginationPropsInfo: Record<
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
  footerClassName: {
    description: '底部的类名',
    required: false,
    type: 'string',
    default: undefined,
  },
  extra: {
    description: '左边额外的内容',
    required: false,
    type: 'React.ReactElement',
    default: undefined,
  },
  simpleWidth: {
    description: '当底部分页器容器宽度小于该值时转为simple样式，若是已经设置了simple属性则以设置的为准',
    required: false,
    type: 'number',
    default: undefined,
  },
  hidden: {
    description: '是否隐藏分页器, 仅使用吸底样式',
    required: false,
    type: 'boolean',
    default: false,
  },
  showTotal: {
    description: '展示总数 (返回为true使用默认文案共x条，extra属性生效时失效)',
    required: false,
    type: `(total: number, range: [number, number]) => React.ReactNode | boolean`,
    default: undefined,
  },
  scrollToTop: {
    description: '滚动Table到顶部',
    required: false,
    type: '() => void',
    default: undefined,
  },
};