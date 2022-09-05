export default {
  entries: [
    "./src/",
    {
      builder: "mkdist",
      input: "./public",
      outDir: "dist/public",
    },
  ],
  outDir: "dist",
  failOnWarn: false,
};
