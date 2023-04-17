export default function (months: number[], data: number[]) {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      textStyle: {
        color: 'white',
        fontSize: 10,
      },
      itemHeight: 10,
    },
    grid: {
      top: '13%',
      left: '0',
      right: '0',
      bottom: '5%',
      containLabel: true,
    },
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
        splitArea: {
          show: false,
        },
        axisLabel: {
          interval: 0,
        },
        data: months.map((item) => `${item}月`),
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
        name: '用户注册量',
        type: 'bar',
        barMaxWidth: 15,
        barGap: '10%',
        itemStyle: {
          color: '#00dd8d',
        },
        data,
      },
    ],
  };
}

