
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {

    // If you want to add an additional small breakpoint, you can’t use "extend" because the
    // small breakpoint would be added to the end of the breakpoint list, and breakpoints
    // need to be sorted from smallest to largest in order to work as expected with a
    // min-width breakpoint system.
    screens: {
      "xs": "400px", // @media (min-width: 400px) { ... }
      ...defaultTheme.screens
    },

    extend: {

      colors: {

        "elem-headline": "#272343",
        "elem-paragraph": "#2d334a",
        "elem-muted": "#463F7975",

        "elem-main": "#fffffe",
        "elem-secondary": "#e3f6f5",
        "elem-tertiary": "#bae8e8",

        "custom-yellow": {
          "50": "#ffff35",
          "100": "#ffff2b",
          "200": "#fff621",
          "300": "#ffec17",
          "400": "#ffe20d",
          "500": "#ffd803",
          "600": "#f5ce00",
          "700": "#ebc400",
          "800": "#e1ba00",
          "900": "#d7b000"
        },

        "custom-dark-blue": {
          "50": "#595575",
          "100": "#4f4b6b",
          "200": "#454161",
          "300": "#3b3757",
          "400": "#312d4d",
          "500": "#272343",
          "600": "#1d1939",
          "700": "#130f2f",
          "800": "#090525",
          "900": "#00001b"
        },

        "custom-light-blue": {
          "50": "#ecffff",
          "100": "#e2ffff",
          "200": "#d8ffff",
          "300": "#cefcfc",
          "400": "#c4f2f2",
          "500": "#bae8e8",
          "600": "#b0dede",
          "700": "#a6d4d4",
          "800": "#9ccaca",
          "900": "#92c0c0"
        }
      },

      outlineWidth: {
        3: "3px"
      },

      borderWidth: {
        3: "3px"
      },

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9"
      },

      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        mono: ["'Montserrat'", ...defaultTheme.fontFamily.mono]
      }
    }
  },

  plugins: [],
}
