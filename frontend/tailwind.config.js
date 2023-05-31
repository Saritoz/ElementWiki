/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      animation: {
        "hover-header": "floatLeft 0.5s ease forwards",
        "trans-down": "transitionDown 0.5s ease",
        "rotate-infinite": "rotateInfi 23s linear infinite",
        "rotate-infinite-reverse": "rotateInfi 30s linear infinite reverse",
        "fade-ltr": "fadeLTR 2s ease",
        "status-border-anim": "statusAnim 2.5s ease-in-out infinite",
        "stronger-element": "strongerAmin 3s linear infinite",
        "weakeness-element": "weaknessAmin 3s linear infinite",
      },
      keyframes: {
        floatLeft: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        transitionDown: {
          from: {transform: "translateY(-10px)"},
          to: {transform: "translateY(0)"}
        },
        rotateInfi: {
          from: {transform: "rotate(0)"},
          to: {transform: "rotate(360deg)"}
        },
        fadeLTR: {
          from: {transform: "translateX(20px)"},
          to: {transform: "translateX(0)"}
        },
        statusAnim: {
          from: {transform: "rotate(45deg)"},
          to: {transform: "rotate(225deg)"}
        },
        weaknessAmin: {
          "0%": {color: "#a345ce"},
          "33.33%": {color: "#e9baff"},
          "100%": {color: "#e9baff"},
        },
        strongerAmin: {
          "0%": {color: "#ff1515"},
          "33.33%": {color: "#ffadad"},
          "100%": {color: "#ffadad"}
        },
        timeout: {
          "0%": {right: 0},
          "100%": {right: '100%'}
        }
      },
      colors: {
        "blue-1": "#28345A",
        "blue-2": "#9BC6BF",
        "blue-3": "#294282",
        "blue-4": "#6A9A9E",
        "blue-5": "#325C6A",
      },
      transitionTimingFunction: {
        'custom-trans': 'cubic-bezier(0.68, -0.55, 0.265, 1.35)'
      }
    },
  },
  plugins: [],
};
