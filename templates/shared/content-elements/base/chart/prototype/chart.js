import { ChartConfig, ChartUrlProvider } from '@bsi-cx/chart';
import ChartConfigColor from '@bsi-cx/chart/src/config/color';
import Alpine from '@alpinejs/csp';
import 'chart.js/auto';

/**
 * @type {{border: ChartConfigColor, background: ChartConfigColor}[]}
 */

Alpine.data('chartElement', () => ({
  chart: null,
  config: null,

  initChart() {
    this.chart = this.$el;

    const borderColors = this.chart.dataset.bordercolors.split(",");
    const backgroundColors = this.chart.dataset.backgroundcolors.split(",");
    for(let i = 0; i < Math.min(borderColors.length, backgroundColors.length); i++) {
      colors[i] = ChartConfigColor.of(borderColors[i], backgroundColors[i]);
    }

    this.config = new ChartConfig()
      .withConfigPostProcessor(this.chartPreprocessor)
      .withColors(...colors);

    new ChartUrlProvider(this.chart, this.config).render();
  },

  chartPreprocessor(config) {
    if (config.type === 'pie') {
      config.data.datasets.forEach(dataset => {
        dataset.borderColor = '#ffffff';
        dataset.backgroundColor = colors.map(color => color.background.getHex()).slice(0, dataset.data.length);
      });
    }

    return Object.assign(config, {
      options: {
        aspectRatio: 1
      }
    });
  },
}))

// @bsi-cx/chart requires us to keep thisglobal
const colors = [];