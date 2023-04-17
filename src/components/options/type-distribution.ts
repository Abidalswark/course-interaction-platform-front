export interface DataItem {
  value: number;
  name: string;
  itemStyle: {
    color: string;
  };
}

export default function (data: DataItem[], textColor: string) {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
    },
    legend: {
      x: 'right', //可设定图例在左、右、居中
      y: 'center', //可设定图例在上、下、居中
      align: 'left', //字在图例的左边或右边
      orient: 'vertical', //图例方向
      icon: 'circle', //图例形状
      textStyle: {
        color: textColor,//'white'
        fontSize: 16,
      },
    },
    series: [
      {
        name: '占比情况',
        type: 'pie',
        radius: '75%',
        label: {
          show: false,
        },
        data,
      },
    ],
  };
}

