module.exports = function (collectionApi) {
  let tagSet = new Set();
  collectionApi.getAllSorted().forEach(function (item) {
    if ("tags" in item.data) {
      let tags = item.data.tags;
      if (typeof tags === "string") {
        tags = [tags];
      }
      tags = tags.filter(function (item) {
        return item !== "event" && item !== "blog";
      });
      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });
  return [...tagSet].sort();
};
