/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  theme: {
    extend: {
      colors: {
        'dir-preview-color': 'rgba(0 0 0 / 1)',
        'dir-secondary-preview':
          'rgba(52.06249974668026 51.62864662706852 51.62864662706852 / 1)',
        'color-prev-back-light': 'rgba(255 255 255 / 1)',
        'color-prev-border-light': 'rgba(0 0 0 / 1)',
        'logo-main': 'rgba(226.0000017285347 0 0 / 1)',
        'logo-font-color':
          'rgba(48.000000938773155 55.00000052154064 65.0000037252903 / 1)',
        'head-icon-color-inactive':
          'rgba(147.00000643730164 147.00000643730164 147.00000643730164 / 1)',
        'head-button-back':
          'rgba(230.56249290704727 229.60181325674057 229.60181325674057 / 1)',
        'head-icon-color':
          'rgba(80.00000283122063 80.00000283122063 80.00000283122063 / 1)',
        'head-notify-back': 'rgba(255 0 0 / 1)',
        'background-primary':
          'rgba(243.00000071525574 243.00000071525574 243.00000071525574 / 1)',
        'background-secondary':
          'rgba(240.12499898672104 236.1229169368744 236.1229169368744 / 1)',
        'background-third':
          'rgba(233.7500050663948 228.88021677732468 228.88021677732468 / 1)',
        patch:
          'rgba(196.00000351667404 196.00000351667404 196.00000351667404 / 1)',
        'main-link-button': 'rgba(0 0 0 / 1)',
        'main-card-back': 'rgba(255 255 255 / 1)',
        'main-card-header': 'rgba(255 255 255 / 1)',
        'main-card-content-font':
          'rgba(123.0000002682209 123.0000002682209 123.0000002682209 / 1)',
        'main-left-header': 'rgba(0 0 0 / 1)',
        'service-foot-button-font': 'rgba(255 255 255 / 1)',
        'service-foot-button-back':
          'rgba(100.90598702430725 79.28023785352707 233.7500050663948 / 1)',
        'service-title':
          'rgba(125.00000014901161 125.00000014901161 125.00000014901161 / 1)',
        'service-border':
          'rgba(183.81250709295273 183.81250709295273 183.81250709295273 / 0.3499999940395355)',
        'service-font': 'rgba(0 0 0 / 1)',
        'service-icon':
          'rgba(85.0000025331974 139.0000069141388 194.00000363588333 / 1)',
        'service-star':
          'rgba(228.4374949336052 206.6407549381256 10.470049381256104 / 1)',
        'service-button-star-back':
          'rgba(228.0000016093254 225.00000178813934 225.00000178813934 / 1)',
        'service-speed-two':
          'rgba(60.04489481449127 224.18749898672104 45.77161431312561 / 1)',
        'service-speed-three': 'rgba(255 183.5999920964241 0 / 1)',
        'service-speed-four': 'rgba(255 137.7000054717064 0 / 1)',
        'service-speed-max': 'rgba(255 0 0 / 1)',
        'service-selection':
          'rgba(76.76084384322166 251.81250303983688 48.2640677690506 / 1)',
        'ov-section':
          'rgba(21.661718040704727 22.31249962002039 21.726795248687267 / 1)',
        'ov-backdrop': 'rgba(0 0 0 / 1)',
        'ov-font-inactive':
          'rgba(196.00000351667404 196.00000351667404 196.00000351667404 / 1)',
        'ov-font-active': 'rgba(255 255 255 / 1)',
        'blog-font-primary': 'rgba(0 0 0 / 1)',
        'blog-font-secondary':
          'rgba(94.56250101327896 92.98645958304405 92.98645958304405 / 1)',
        'blog-back-primary':
          'rgba(236.93750202655792 233.9757889509201 233.9757889509201 / 1)',
        'ord-font-primary': 'rgb(0 0 0)',
        'ord-font-error': 'rgba(255 0 0 / 1)',
        'inp-back': 'rgba(255 255 255 / 1)',
        'popup-back': 'rgba(0 0 0 / 1)',
        'popup-font': 'rgba(255 255 255 / 1)',
        'sets-font-primary': 'rgba(0 0 0 / 1)',
        'sets-font-secondary':
          'rgba(150.0000062584877 151.00000619888306 155.00000596046448 / 1)',
        'sets-confirm-back':
          'rgba(21.000000648200512 94.0000019967556 238.00000101327896 / 1)',
        'sets-confirm-font': 'rgba(255 255 255 / 1)',
        'sets-reject-back': 'rgba(255 255 255 / 1)',
        'sets-reject-font':
          'rgba(99.00000169873238 103.0000014603138 107.00000122189522 / 1)',
        'sets-border':
          'rgba(150.0000062584877 151.00000619888306 155.00000596046448 / 0.2199999988079071)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
