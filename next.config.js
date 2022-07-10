module.exports = {
  pageExtensions: ["jsx", "js", "ts", "tsx", "mdx", "md"],
  experimental: {
    plugins: true,
    // TODO: this doesn't work because pwd
    // concurrentFeatures: true,
    scrollRestoration: true,
  },
};
