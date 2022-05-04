import { css } from "@stitches/react";

export const nav = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: 200,
  margin: "0 auto",
  button: {
    backgroundColor: "$baseGray",
    border: "1px solid $baseGray",
    padding: "$3",
    cursor: "pointer",
    color: "$white",
    transform: "all 0.4s ease-in-out",
    borderRadius: 6,
    "&:hover": {
      color: "$baseBlack",
      backgroundColor: "$baseYellow",
      borderColor: "$baseYellow",
    },
  },
  "@media (max-width: 1340px)": {
    display: "none",
  },
});
