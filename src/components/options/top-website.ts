export default function (yData: string[], data: number[]) {
  return {
    grid: {
      left: '15%',
      right: '20%',
      bottom: '5%',
      top: '8%',
      containLabel: true,
    },
    xAxis: [
      {
        splitLine: {
          show: false,
        },
        type: 'value',
        show: false,
      },
    ],
    yAxis: [
      {
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        type: 'category',
        axisTick: {
          show: false,
        },
        inverse: true, // 倒序
        boundaryGap: false, // 留白
        data: yData,
        axisLabel: {
          color: 'rgba(0, 0, 0, 0.65)',
          align: 'left',
          padding: [-10, 0, 0, -180],
          verticalAlign: 'top',
          formatter: (value: string) => {
            let i = yData.indexOf(value);
            if (i == 0) {
              return [`{lg1|${i + 1}} ` + '{title|' + value + '} '].join('\n');
            } else if (i == 1) {
              return [`{lg2|${i + 1}} ` + '{title|' + value + '} '].join('\n');
            } else if (i == 2) {
              return [`{lg3|${i + 1}} ` + '{title|' + value + '} '].join('\n');
            } else {
              return [`{lg|${i + 1}} ` + '{title|' + value + '} '].join('\n');
            }
          },
          rich: {
            lg1: {
              backgroundColor: 'rgba(240, 106, 57, 0.1)',
              color: 'rgba(240, 106, 57, 1)',
              borderRadius: 5,
              padding: 5,
              align: 'center',
              width: 32,
              height: 32,
              lineHeight: 32,
              fontSize: 19,
              fontFamily: 'Source Han Sans CN-Regular',
            },
            lg2: {
              backgroundColor: 'rgba(255, 176, 38, 0.1)',
              color: 'rgba(255, 176, 38, 1)',
              borderRadius: 5,
              padding: 5,
              align: 'center',
              width: 32,
              height: 32,
              lineHeight: 32,
              fontSize: 19,
              fontFamily: 'Source Han Sans CN-Regular',
            },
            lg3: {
              backgroundColor: 'rgba(51, 207, 201, 0.1)',
              color: 'rgba(51, 207, 201, 1)',
              borderRadius: 5,
              padding: 5,
              align: 'center',
              width: 32,
              height: 32,
              lineHeight: 32,
              fontSize: 19,
              fontFamily: 'Source Han Sans CN-Regular',
            },
            lg: {
              backgroundColor: 'rgba(57, 126, 240, 0.1)',
              color: 'rgba(57, 126, 240, 1)',
              borderRadius: 5,
              padding: 5,
              align: 'center',
              width: 32,
              height: 32,
              lineHeight: 32,
              fontSize: 19,
              fontFamily: 'Source Han Sans CN-Regular',
            },
            title: {
              color: 'white',
              align: 'right',
              fontSize: 14,
              fontFamily: 'Source Han Sans CN-Regular',
              padding: [0, 0, 0, 21],
            },
          },
        },
      },
    ],
    series: [
      {
        name: '人数',
        type: 'bar',
        barWidth: 13, // 柱子宽度
        showBackground: true,
        label: {
          show: true,
          formatter: '{c}人',
          color: 'white',
          fontFamily: 'HarmonyOS Sans-Medium',
          fontSize: 14,
          position: 'right',
        },
        itemStyle: {
          barBorderRadius: [0, 3, 3, 0], // 圆角（左上、右上、右下、左下）
          color: {
            colorStops: [
              {
                offset: 0,
                color: '#00dd8d', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#3d6df7', // 100% 处的颜色
              },
            ],
          },
        },
        data: data,
      },
    ],
  };
}

