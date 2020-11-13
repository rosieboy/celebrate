module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './src/components/*.js',
      './src/pages/*.js',
      './src/components/*.jsx',
      './src/pages/*.jsx',
    ],
    options: {
      whitelist: ['bg-color-500']
    }
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
