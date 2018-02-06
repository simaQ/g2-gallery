(() => {
  const data = [
    { month: 'Jan.', value: 6.06 },
    { month: 'Feb.', value: 82.2 },
    { month: 'Mar.', value: -22.11 },
    { month: 'Apr.', value: 21.53 },
    { month: 'May.', value: -21.74 },
    { month: 'Jun.', value: 73.61 },
    { month: 'Jul.', value: 53.75 },
    { month: 'Aug.', value: 60.32 }
  ];
  const chart = new F2.Chart({
    id: 'area1',
    width: window.innerWidth,
    height: window.innerWidth * 0.64,
    pixelRatio: window.devicePixelRatio
  });
  chart.source(data, {
    month: {
      range: [ 0, 1 ]
    },
    value: {
      nice: false,
      min: -100,
      max: 100,
      tickCount: 5
    }
  });

  chart.axis('month', {
    line: null,
    label(text, index, total) {
      const textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      }
      if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  });
  chart.axis('value', {
    grid(text, index) {
      if (text === '0') {
        return {
          lineDash: null,
          lineWidth: 2
        };
      }
    }
  });
  chart.tooltip({
    showCrosshairs: true
  });
  chart.area({
    startOnZero: true // X 轴从 0 开始
  }).position('month*value');
  chart.line().position('month*value');
  chart.render();
})();
