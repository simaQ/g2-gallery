(() => {
    const data = [
        { day: '周一', value: 300 },
        { day: '周二', value: 400 },
        { day: '周三', value: 350 },
        { day: '周四', value: 500 },
        { day: '周五', value: 490 },
        { day: '周六', value: 600 },
        { day: '周日', value: 900 }
      ];
      const chart = new F2.Chart({
        id: 'line0',
        width: window.innerWidth,
        height: window.innerWidth * 0.64,
        pixelRatio: window.devicePixelRatio
      });

      chart.source(data, {
        value: {
          tickCount: 5,
          min: 0
        },
        day: {
          range: [ 0, 1 ]
        }
      });
      chart.tooltip({
        showCrosshairs: true,
        showItemMarker: false,
        onShow(ev) {
          const { items } = ev;
          items[0].name = null;
          items[0].value = '$ ' + items[0].value;
        }
      });
      chart.axis('day', {
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
      chart.line().position('day*value');
      chart.point().position('day*value').style({
        stroke: '#fff',
        lineWidth: 2
      });
      chart.render();
})();
