module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets/css/style.compiled.css": "assets/css/style.css"});
  eleventyConfig.addWatchTarget("./src/assets/css/style.compiled.css");

  return {
    dir: {
      // data: "_data",
      input: "src/",
      output: "_site", // this is the default
    },
  };
};