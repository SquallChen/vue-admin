module.exports = {
  bar: {
    chart: {
      type: 'column'// 指定图表的类型，默认是折线图（line）
    },
    credits: {
      enabled: false
    }, // 去掉地址
    title: {
      text: '我的第一个图表' // 指定图表标题
    },
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
      '#24CBE5'],
    xAxis: {
      categories: ['1号', '2号', '3号', '3号', '3号'] // 指定x轴分组
    },
    yAxis: {
      title: {
        text: '最近七天' // 指定y轴的标题

      }
    },
    plotOptions: {
      column: {
        colorByPoint: true
      }
    },

    series: [{ // 指定数据列
      name: '小明',
      data: [{
        y: 1000,
        color: 'red' }, 5000, 4000, 5000, 2000] // 数据
    }]
  },
  test: {
    'xAxis': [
      {
        'type': 'category',
        'categories': [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22'
        ],
        'index': 0,
        'isX': true
      }
    ],
    'series': [
      {
        'name': '',
        'data': [
          2.3,
          2.1,
          3.1,
          1.1,
          3.4,
          2.8,
          2.6,
          2.5,
          3.6,
          2.7,
          1.5,
          4,
          1.2,
          3.2,
          2.9,
          3.3,
          2.5,
          1.5,
          2.3,
          1.6,
          1.7,
          3.2
        ],
        '_colorIndex': 0,
        'visible': true,
        'marker': {
          'enabled': false
        }
      }
    ],
    'yAxis': [
      {
        'title': {
          'text': ''
        },
        'index': 0
      }
    ],
    'chart': {
      'style': {
        'fontFamily': '"微软雅黑", Arial, Helvetica, sans-serif',
        'color': '#333',
        'fontSize': '12px',
        'fontWeight': 'normal',
        'fontStyle': 'normal'
      },
      'type': 'column',
      'width': null,
      'height': 550,
      'polar': false,
      'ignoreHiddenSeries': true
    },
    'title': {
      'text': ''
    },
    'subtitle': {
      'text': ''
    },
    'tooltip': {
      'headerFormat': '<span style="font-size:10px">{point.key}</span><table>',
      'pointFormat': '<tr><td style="color:{series.color};padding:0">{series.name}：</td><td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      'footerFormat': '</table>',
      'useHTML': true,
      'shared': true
    },
    'plotOptions': {
      'series': {
        'animation': false
      }
    },
    'credits': {
      'href': '',
      'text': ''
    },
    'legend': {
      'enabled': false
    }
  },
  test2: {
    'xAxis': [
      {
        'type': 'category',
        'categories': [
          'test1',
          'test2',
          'test3',
          'test4',
          'test5',
          'test6'
        ],
        'index': 0,
        'isX': true
      }
    ],
    'series': [
      {
        'name': '市场份额',
        'data': [
          90,
          85.2,
          45.6,
          12.5,
          55.3,
          45.6
        ],
        'animation': true,
        'connectEnds': true,
        'enableMouseTracking': false,
        '_colorIndex': 0,
        '_symbolIndex': 0
      },
      {
        'enableMouseTracking': false,
        '_colorIndex': 1,
        '_symbolIndex': 1,
        'data': []
      }
    ],
    'yAxis': [
      {
        'title': {
          'text': ''
        },
        'index': 0
      }
    ],
    'chart': {
      'style': {
        'fontFamily': '"微软雅黑", Arial, Helvetica, sans-serif',
        'color': '#333',
        'fontSize': '12px',
        'fontWeight': 'normal',
        'fontStyle': 'normal'
      },
      'type': 'spline',
      'height': 550
    },
    'title': {
      'text': ''
    },
    'subtitle': {
      'text': ''
    },
    'plotOptions': {
      'line': {
        'animation': false,
        'allowPointSelect': false
      },
      'series': {
        'animation': false
      }
    },
    'legend': {
      'enabled': false
    },
    'tooltip': {
      'enabled': true
    },
    'credits': {
      'text': '',
      'href': '',
      'enabled': false
    },
    'exporting': {
      'enabled': true,
      'fallbackToExportServer': true
    }
  },
  test3: {
    'xAxis': [
      {
        'type': 'category',
        'categories': [
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        'index': 0,
        'isX': true
      }
    ],
    'series': [
      {
        'name': '市场份额',
        'data': [
          45,
          26.8,
          12.8,
          8.5,
          6.2,
          0.7
        ],
        'animation': true,
        'connectEnds': true,
        'enableMouseTracking': false,
        '_colorIndex': 0,
        '_symbolIndex': 0
      },
      {
        'enableMouseTracking': false,
        '_colorIndex': 1,
        '_symbolIndex': 1,
        'data': []
      }
    ],
    'yAxis': [
      {
        'title': {
          'text': ''
        },
        'index': 0
      }
    ],
    'chart': {
      'height': '300px',
      'style': {
        'fontFamily': '"微软雅黑", Arial, Helvetica, sans-serif',
        'color': '#333',
        'fontSize': '12px',
        'fontWeight': 'normal',
        'fontStyle': 'normal'
      },
      'type': 'line'
    },
    'title': {
      'text': ''
    },
    'subtitle': {
      'text': ''
    },
    'plotOptions': {
      'line': {
        'animation': false,
        'allowPointSelect': false
      },
      'series': {
        'dataLabels': {
          'enabled': true
        },
        'animation': false
      }
    },
    'legend': {
      'enabled': false
    },
    'credits': {
      'text': '',
      'href': ''
    }
  }
};
