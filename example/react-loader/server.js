const svrx = require('@svrx/svrx');

svrx({
  plugins: [{
      name: 'webpack',
      options: {
          config: './custom.webpack.config.js'
      }
  }],
}).start();
