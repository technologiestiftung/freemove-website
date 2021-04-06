module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addWatchTarget("/src/assets/css/style.compiled.css");
  eleventyConfig.addPassthroughCopy({ "src/assets/common": "." });
  
  return {
    dir: {
      data: "_data",
      input: "src/",
      output: "_site", // this is the default
    },
  };
};
