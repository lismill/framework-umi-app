/** @type {import('tailwindcss').Config} */

/** 自定义颜色 */
const _customTailWindColors = customTailWindColors();

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textColor: _customTailWindColors,
      backgroundColor: (theme) => ({ ...theme('colors'), ..._customTailWindColors }),
    },
  },
  plugins: [],
};

function customTailWindColors() {
  return {
    primary: '#1966ff',
    success: '#00b42a',
    info: '#f2f3f5',
    warning: '#ff7d00',
    danger: '#f53f3f',
  };
}
