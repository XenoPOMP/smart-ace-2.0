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
        'dir-preview-color': 'rgb(0 0 0)',
        'dir-secondary-preview':
          'rgb(52.06249974668026 51.62864662706852 51.62864662706852)',
        'color-prev-back-light': 'rgb(255 255 255)',
        'color-prev-border-light': 'rgb(0 0 0)',
        'logo-main': 'rgb(226.0000017285347 0 0)',
        'logo-font-color':
          'rgb(48.000000938773155 55.00000052154064 65.0000037252903)',
        'head-icon-color-inactive':
          'rgb(147.00000643730164 147.00000643730164 147.00000643730164)',
        'head-button-back':
          'rgb(230.56249290704727 229.60181325674057 229.60181325674057)',
        'head-icon-color':
          'rgb(80.00000283122063 80.00000283122063 80.00000283122063)',
        'head-notify-back': 'rgb(255 0 0)',
        'background-primary':
          'rgb(243.00000071525574 243.00000071525574 243.00000071525574)',
        'background-secondary':
          'rgb(240.12499898672104 236.1229169368744 236.1229169368744)',
        'background-third':
          'rgb(233.7500050663948 228.88021677732468 228.88021677732468)',
        patch: 'rgb(196.00000351667404 196.00000351667404 196.00000351667404)',
        'main-link-button': 'rgb(0 0 0)',
        'main-card-back': 'rgb(255 255 255)',
        'main-card-header': 'rgb(255 255 255)',
        'main-card-content-font':
          'rgb(123.0000002682209 123.0000002682209 123.0000002682209)',
        'main-left-header': 'rgb(0 0 0)',
        'service-foot-button-font': 'rgb(255 255 255)',
        'service-foot-button-back':
          'rgb(100.90598702430725 79.28023785352707 233.7500050663948)',
        'service-title':
          'rgb(125.00000014901161 125.00000014901161 125.00000014901161)',
        'service-border':
          'rgba(183.81250709295273 183.81250709295273 183.81250709295273 / 0.3499999940395355)',
        'service-font': 'rgb(0 0 0)',
        'service-icon':
          'rgb(85.0000025331974 139.0000069141388 194.00000363588333)',
        'service-star':
          'rgb(228.4374949336052 206.6407549381256 10.470049381256104)',
        'service-button-star-back':
          'rgb(228.0000016093254 225.00000178813934 225.00000178813934)',
        'service-speed-two':
          'rgb(60.04489481449127 224.18749898672104 45.77161431312561)',
        'service-speed-three': 'rgb(255 183.5999920964241 0)',
        'service-speed-four': 'rgb(255 137.7000054717064 0)',
        'service-speed-max': 'rgb(255 0 0)',
        'service-selection':
          'rgb(76.76084384322166 251.81250303983688 48.2640677690506)',
        'ov-section':
          'rgb(21.661718040704727 22.31249962002039 21.726795248687267)',
        'ov-backdrop': 'rgb(0 0 0)',
        'ov-font-inactive':
          'rgb(196.00000351667404 196.00000351667404 196.00000351667404)',
        'ov-font-active': 'rgb(255 255 255)',
        'blog-font-primary': 'rgb(0 0 0)',
        'blog-font-secondary':
          'rgb(94.56250101327896 92.98645958304405 92.98645958304405)',
        'blog-back-primary':
          'rgb(236.93750202655792 233.9757889509201 233.9757889509201)',
        'ord-font-primary': 'rgb(0 0 0)',
        'ord-font-error': 'rgb(255 0 0)',
        'inp-back': 'rgb(255 255 255)',
        'popup-back': 'rgb(0 0 0)',
        'popup-font': 'rgb(255 255 255)',
        'sets-font-primary': 'rgb(0 0 0)',
        'sets-font-secondary':
          'rgb(150.0000062584877 151.00000619888306 155.00000596046448)',
        'sets-confirm-back':
          'rgb(21.000000648200512 94.0000019967556 238.00000101327896)',
        'sets-confirm-font': 'rgb(255 255 255)',
        'sets-reject-back': 'rgb(255 255 255)',
        'sets-reject-font':
          'rgb(99.00000169873238 103.0000014603138 107.00000122189522)',
        'sets-border':
          'rgba(150.0000062584877 151.00000619888306 155.00000596046448 / 0.2199999988079071)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      zIndex: {
        header: 100,
        'under-header-content': 110,
        'header-content': 120,
      },
    },
  },
  plugins: [],
};
