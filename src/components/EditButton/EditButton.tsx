import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { button } from "../../GlobalCss";
import addIcon from "../../assets/add-icon.svg";

export const EditButton = ({
  idToComponent,
  orderByIdListToComponent,
  setOpenInputToComponent,
}: any) => {
  function handleInput(id: string) {
    const filteredCards = orderByIdListToComponent.filter(
      (idInfo: { id: string }) => idInfo.id === id
    );
    console.log(filteredCards);
    if (filteredCards) {
      console.log("dentroDoIf");

      setOpenInputToComponent(true);
    }
  }

  return (
    <button
      onClick={() => handleInput(idToComponent)}
      className={button({ variant: "commons" })}
    >
      <img src={addIcon} alt="" />
      Add more
    </button>
  );
};
