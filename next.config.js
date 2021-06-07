const withSvgr = require('next-plugin-svgr');

module.exports = withSvgr({
  svgrOptions: {
    dimensions: false,
  },
});

