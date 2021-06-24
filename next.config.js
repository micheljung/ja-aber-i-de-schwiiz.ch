const withSvgr = require('next-plugin-svgr');

module.exports = withSvgr({
  svgrOptions: {
    template: require('./src/components/SvgrTemplate'),
    ref: true,
    dimensions: false,
    svgoConfig: {
      plugins: [{
        prefixIds: {
          prefixClassNames: false
        }
      }]
    }
  },
});

