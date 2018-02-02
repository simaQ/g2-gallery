(() => {
   const data = [
    { month: 'AUG', temperature: 16.5 },
    { month: 'SEP', temperature: 23.3 },
    { month: 'OCT', temperature: 18.3 },
    { month: 'NOV', temperature: 13.9 },
    { month: 'DEC', temperature: 29.6 }
  ];
  const chart = new F2.Chart({
    id: 'line2',
    width: window.innerWidth,
    height: window.innerWidth * 0.64,
    pixelRatio: window.devicePixelRatio
  });

  chart.source(data, {
    temperature: {
      tickCount: 5,
      min: 0
    },
    month: {
      range: [ 0, 1 ]
    }
  });
  chart.tooltip(false)
  chart.axis('month', {
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
  chart.line().position('month*temperature').shape('smooth');
  chart.point().position('month*temperature').style({
    stroke: '#fff',
    lineWidth: 2
  });
  chart.render();
})();
