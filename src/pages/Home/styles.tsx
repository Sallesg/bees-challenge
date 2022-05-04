import { css } from "@stitches/react";

export const Wrapper = css({
  backgroundColor: "$baseYellow",
  height: "100vh",
  display: "grid",
  placeItems: "center",
  position: "relative",
});

export const Content = css({
  p: {
    marginBottom: 16,
  },
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    label: {
      fontSize: "$1",
      marginLeft: 8,
    },
  },
  button: {
    display: "flex",
    borderRadius: "4px",
    padding: "8px 16px",
    margin: "24px auto 0",
    color: "#FFFFFF",
  },
});

export const FullNameStyle = css({
  background: "#FFFFFF",
  border: "1px solid #D4D4D8",
  borderRadius: "4px",
  padding: 12,
  width: "100%",
  marginBottom: 16,
  "&:valid": {
    border: "1px solid #D4D4D8",
  },
  "&:invalid": { outline: "solid red 2px" },
});

export const BeeImage = css({
  position: "absolute",
  bottom: 0,
  left: 0,
  padding: "0 0 15px 29px",
});
