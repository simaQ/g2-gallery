(() => {
  const data = [
    { label: 'Mon.', type: 'series1', value: 2800 },
    { label: 'Mon.', type: 'series2', value: 2260 },
    { label: 'Tue.', type: 'series1', value: 1800 },
    { label: 'Tue.', type: 'series2', value: 1300 },
    { label: 'Wed.', type: 'series1', value: 950 },
    { label: 'Wed.', type: 'series2', value: 900 },
    { label: 'Thu.', type: 'series1', value: 500 },
    { label: 'Thu.', type: 'series2', value: 390 },
    { label: 'Fri.', type: 'series1', value: 170 },
    { label: 'Fri.', type: 'series2', value: 100 }
  ];
  const chart = new F2.Chart({
    id: 'bar2',
    width: window.innerWidth,
    height: window.innerWidth * 0.64,
    pixelRatio: window.devicePixelRatio
  });

  chart.source(data.reverse(), {
    value: {
      tickInterval: 750
    }
  });
  chart.coord({
    transposed: true
  });
  chart.legend({
    reversed: true
  });
  chart.tooltip({
    custom(obj) {
      const legend = chart.get('legendController').legends.top[0];
      const tooltipItems = obj.items;
      const legendItems = legend.items;
      const map = {};
      legendItems.map(item => {
        map[item.name] = _.clone(item);
      });
      tooltipItems.map(item => {
        const { name, value } = item;
        if (map[name]) {
          map[name].value = (value);
        }
      });
      legend.setItems(Object.values(map));
    },
    onHide(tooltip) {
      const legend = chart.get('legendController').legends.top[0];
      legend.setItems(chart.getLegendItems().country);
    }
  });
  chart.axis('label', {
    line: F2.Global._defaultAxis.line,
    grid: null
  });
  chart.axis('value', {
    line: null,
    grid: F2.Global._defaultAxis.grid,
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
  chart.interval().position('label*value').color('type').adjust({
    type: 'dodge',
    marginRatio: 1 / 32
  });
  chart.render();
})();
