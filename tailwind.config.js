module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "HalfUnit": "8px",
        "ThreeUnits": "48px",
        "TwoUnits": "32px",
        "SixUnits": "96px",
        "OneAndHalfUnits": "24px",
        "FiveUnits": "80px",
        "Unit": "16px",
        "FourUnits": "64px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius8": "8px",
        "Round": "50%",
        "Radius2": "2px"
      },
      "scale": {
        "XLarge": "192px",
        "XSmall": "16px",
        "MaxWidth": "1400px",
        "Small": "48px",
        "XXLarge": "288px",
        "Medium": "96px",
        "Large": "144px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}