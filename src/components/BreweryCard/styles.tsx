import { css } from "@stitches/react";

export const cardWrapper = css({
  display: "flex",
  flexWrap: "wrap",
  gap: 48,
  justifyContent: "center",
  marginBottom: 50,
  height: "67vh",
});

export const cardContent = css({
  background: "$white",
  border: "1px solid $baseBlack",
  borderRadius: "4",
  minWidth: 310,
  height: 282,
  width: 382,
  position: "relative",
  padding: "calc(30px - 15px) 23px 35px",
});

export const deleteIconImg = css({
  padding: "15px 14px 0 0",
  position: "absolute",
  right: 0,
  top: 0,
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const cardTitle = css({
  color: "$baseGray",
  fontWeight: "bold",
  fontSize: "$3",
  lineHeight: "$4",
  marginBottom: 22,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const addressTexts = css({
  marginBottom: 26,
  p: {
    color: "$lightGray",
    lineHeight: "$2",
    fontWeight: "$regular",
  },
});

export const highlightInfos = css({
  img: {
    width: 18,
    height: 18,
    marginRight: 12,
  },
  button: {
    marginBottom: 16,
    "&:nth-child(even)": {
      marginLeft: 16,
    },
  },
});
