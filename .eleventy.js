module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("humanDate", function(value) {
        let d = new Date(Date.parse(value));

        return d.toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" });
    });

    eleventyConfig.addFilter("noOrphans", function(value) {
        let parts = value.split(" ");
        let last = parts.pop();
        let last2 = parts.pop() + '\xa0' + last;
        parts.push(last2);

        return parts.join(' ');
    });
}