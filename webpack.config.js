const path = require("path");

module.exports = {
  // Other webpack configurations...

  resolve: {
    fallback: {
      util: require.resolve("util/"),
      path: require.resolve("path/"),
    },
    resolve: {
      fallback: {
        zlib: require.resolve("browserify-zlib"),
      },
    },
  },
};
