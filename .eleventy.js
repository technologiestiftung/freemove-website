module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/audio");
  eleventyConfig.addPassthroughCopy("src/assets/docs");
  eleventyConfig.addPassthroughCopy({ "src/assets/common": "." });

  // Eleventy v0.x requires opt-in for deep-merging data.
  // This is needed because we need to deep merge tags for the blog.
  // The blog layout has a tag, but also individual blog entries.
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addCollection(
    "tagList",
    require("./src/_filters/getTagList.js")
  );

  eleventyConfig.addCollection("events_by_year", function (collectionApi) {
    const eventItems = collectionApi.getFilteredByTag("event");
    const uniqueEventYears = [
      ...new Set(
        eventItems.map((item) => {
          return new Date(item.data.date).getFullYear();
        })
      ),
    ];
    const eventsByYear = uniqueEventYears.map((year) => {
      return {
        year: year,
        events: eventItems.filter((event) => {
          return new Date(event.data.date).getFullYear() === year;
        }),
      };
    });
    return eventsByYear;
  });

  return {
    dir: {
      data: "_data",
      input: "src/",
      output: "_site", // this is the default
    },
  };
};
