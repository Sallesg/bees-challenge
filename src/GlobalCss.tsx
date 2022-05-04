import { globalCss, createStitches } from "@stitches/react";

export const { css } = createStitches({
  theme: {
    colors: {
      baseYellow: "hsla(58, 86%, 64%, 1)",
      lightYellow: "hsla(56, 100%, 97%, 1)",
      white: "#ffffff",
      baseBlack: "hsla(0, 0%, 0%, 1)",
      baseGray: "hsla(240, 4%, 16%, 1)",
      lightGray: "hsla(240, 5%, 26%, 1)",
      disableButton: "hsla(240, 5%, 34%, 1)",
      ableButton: "hsla(239, 82%, 65%, 1)",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
    },
    sizes: {
      1: "10px",
    },
    radii: {
      round: "99px",
    },
    fontSizes: {
      1: "14px",
      2: "16px",
      3: "20px",
      4: "30px",
    },
    lineHeights: {
      1: "24px",
      2: "26px",
      3: "30px",
      4: "40px",
    },
    fonts: {
      primary: "Work Sans, sans-serif",
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
  },
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,

    fontColor: "$baseBlack",
    fontFamily: "$primary",
    boxSizing: "border-box",
    fontWeight: "$regular",
  },
  p: {
    fontSize: "$1",
    lineHeight: "24px",
  },
});

export const CommonPages = css({
  backgroundColor: "$lightYellow",
  height: "100vh",
});

export const input = css({
  background: "#FFFFFF",
  border: "1px solid #D4D4D8",
  boxSizing: "border-box",
  borderRadius: "4px",
  maxWidth: 84,
});

export const form = css({
  display: "inline-flex",
  margin: "0 0 16px 16px",
  border: "1px solid $baseYellow",
  backgroundColor: "$baseYellow",
  borderRadius: "$round",
  padding: "4px calc(40px - 18px) 4px 10px",
  alignItems: "center",
});

export const span = css({
  border: "1px solid $baseYellow",
  backgroundColor: "$baseYellow",
  borderRadius: "$round",
  padding: "4px calc(40px - 18px) 4px 10px",
  display: "inline-flex",
  alignItems: "center",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    filter: "brightness(1.2)",
  },
  "&:nth-child(2)": {
    margin: "0 0 16px 16px",
  },
});

export const button = css({
  appearance: "none",
  border: "none",
  cursor: "pointer",
  variants: {
    variant: {
      disable: {
        border: "1px solid $disableButton",
        backgroundColor: "$disableButton",
        cursor: "not-allowed",
      },
      back: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        gap: "$3",
        fontSize: "$4",
        lineHeight: "$4",
        color: "$baseBlack",
      },
      commons: {
        border: "1px solid $baseYellow",
        backgroundColor: "$baseYellow",
        borderRadius: "$round",
        padding: "4px calc(40px - 18px) 4px 10px",
        display: "inline-flex",
        alignItems: "center",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          filter: "brightness(1.2)",
        },
      },

      delete: {},
    },
    able: {
      true: {
        border: "1px solid $ableButton",
        backgroundColor: "$ableButton",
        cursor: "pointer",
        "&:hover": {
          filter: "brightness(1.1 )",
        },
      },
    },
  },
  compoundVariants: [
    {
      able: false,
      css: {
        borderColor: "$disableButton",
      },
    },
  ],
  defaultVariants: {
    variant: "disable",
  },
});
