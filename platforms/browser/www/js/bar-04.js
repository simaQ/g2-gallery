(() => {
  const data = [
    { profession: '两年制副学士学位', highest: 110000, minimum: 23000, mean: 56636, range: [ 23000, 110000 ] },
    { profession: '执法与救火', highest: 120000, minimum: 18000, mean: 66625, range: [ 18000, 120000 ] },
    { profession: '教育学', highest: 125000, minimum: 24000, mean: 72536, range: [ 24000, 125000 ] },
    { profession: '心理学', highest: 130000, minimum: 22500, mean: 75256, range: [ 22500, 130000 ] },
    { profession: '计算机科学', highest: 131000, minimum: 23000, mean: 77031, range: [ 23000, 131000 ] }
  ];
  const chart = new F2.Chart({
    id: 'bar4',
    width: window.innerWidth,
    height: window.innerWidth * 0.64,
    pixelRatio: window.devicePixelRatio
  });

  chart.source(data, {
    range: {
      tickCount: 5
    }
  });
  chart.coord({
    transposed: true
  });
  chart.axis('profession', {
    line: F2.Global._defaultAxis.line,
    grid: null
  });
  chart.axis('range', {
    line: null,
    grid: F2.Global._defaultAxis.grid,
    label(text, index, total) {
      const textCfg = {
        text: text / 1000 + ' k'
      };
      if (index === 0) {
        textCfg.textAlign = 'left';
      }
      if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  });
  chart.interval().position('profession*range');
  chart.render();
})();
