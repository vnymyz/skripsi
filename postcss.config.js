module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Contoh penambahan PostCSS dan plugin lainnya
    postcss: {
      plugins: [
        require('postcss-plugin-1'),
        require('postcss-plugin-2'),
        // Tambahkan plugin PostCSS lainnya jika diperlukan
      ],
    },
  },
};
