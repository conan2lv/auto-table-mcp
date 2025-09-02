/**
 * @description 根据列标题名称或dataIndex结合业务含义给出列宽相关的属性定义
 * @author 千旌
 */

export const getFixedColInfo = (
  title: string,
  dataIndex: string,
  width: number
) => {
  // 时间列
  if (title.includes("时间")) {
    return {
      title,
      dataIndex,
      time: true,
    };
  }

  // 数字列
  if (
    title.endsWith("数") ||
    title.includes("数量") ||
    title.includes("金额") ||
    title.includes("序号")
  ) {
    return {
      title,
      dataIndex,
      numLen: 6,
    };
  }

  if (title.includes("ID") || title.includes("id")) {
    return {
      title,
      dataIndex,
      numLen: 13,
    };
  }

  // 取值范围列
  if (
    title.includes("状态") ||
    title.includes("类型") ||
    title.includes("开关") ||
    title.includes("环境") ||
    title.includes("模式") ||
    title.includes("是否") ||
    title.includes("类别")
  ) {
    return {
      title,
      dataIndex,
      width: 120,
    };
  }

	if (title === '操作') {
		return {
			title,
			dataIndex,
			iconNumber: 2,
			fixed: 'right',
		}
	}

	return {
		title,
		dataIndex,
		weights: width,
		line: 1,
	}
};
