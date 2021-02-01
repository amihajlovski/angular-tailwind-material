module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            syntax: "postcss-scss",
            plugins: [
              require.resolve("postcss-import"),
              require.resolve("tailwindcss"),
              require.resolve("autoprefixer"),
            ],
          },
        },
      },
    ],
  },
};
