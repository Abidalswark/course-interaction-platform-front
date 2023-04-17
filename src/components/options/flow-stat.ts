type Data = string | number;
export default function (xData: Data[], data: Data[], hvData: Data[], textColor: string) {
  return {
    backgroundColor: 'transparent',
    // 启用提示框
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    // 设置图例位置，文本样式，图例项高度
    legend: {
      right: '-3%',
      textStyle: {
        color: textColor,//'white'
        fontSize: 10,
      },
      itemHeight: 10,
    },
    // 设置图表的边距
    grid: {
      top: '12%',
      left: '0',
      right: '0',
      bottom: '2%',
      containLabel: true,
    },
    //  设置x轴类型，线条样式
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#4d6b80',
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
        },
        data: xData,
      },
    ],
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: '#4d6b80',
        },
      },
      axisTick: {
        show: false,
      },
      splitArea: {
        show: false,
      },
    },
    series: [
      {
        name: '浏览量（PV）',
        type: 'bar',
        stack: '总量',
        barMaxWidth: 15,
        barGap: '10%',
        itemStyle: {
          color: '#3d6df7',
        },
        data: data,
      },
      {
        name: '访客数（UV）',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          color: '#00dd8d',
        },
        data: hvData,
      },
    ],
  };
}

