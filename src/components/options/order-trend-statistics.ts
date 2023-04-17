export default function (months: (number | string)[], data: number[], textColor: string) {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none',
      },
    },
    grid: {
      left: '0',
      right: '0',
      top: '14%',
      bottom: '6%',
      containLabel: true,
    },
    legend: {
      textStyle: {
        color: textColor,//'white'
      },
    },
    xAxis: {
      type: 'category',
      data: months.map((item) => `${item}月`),
      axisLabel: {
        interval: 0,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(204, 204, 204, 1)',
        },
      },
    },
    yAxis: {
      nameTextStyle: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.65)',
      },
      type: 'value',
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          width: 1,
          color: 'rgba(223, 223, 223, 1)',
        },
      },
      axisLine: {
        show: false,
      },
      splitArea: {
        show: false,
      },
    },
    series: [
      {
        name: '订单量',
        type: 'line',
        data: data,
        symbolSize: 8,
        lineStyle: {
          color: '#2ce293',
          width: 3,
        },
        itemStyle: {
          color: '#2ce293',
          borderColor: '#2ce293',
          borderWidth: 5,
        },
        emphasis: {
          scale: 1.5,
        },
      },
    ],
  };
}

