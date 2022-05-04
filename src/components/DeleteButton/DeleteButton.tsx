import { button } from "../../GlobalCss";
import deleteIcon from "../../assets/delete-icon.svg";
import { deleteIconImg } from "./styles.js";

export const DeleteButton = ({
  idToComponent,
  orderByIdListToComponent,
  setBreweryToComponent,
}: any) => {
  function handleDelete(id: string) {
    const filteredInfos: any[] = orderByIdListToComponent.filter(
      (idInfo: { id: string }) => idInfo.id !== id
    );
    setBreweryToComponent(filteredInfos);
  }

  return (
    <button
      onClick={() => handleDelete(idToComponent)}
      className={button({ variant: "delete" })}
    >
      <img
        className={deleteIconImg()}
        src={deleteIcon}
        alt="image that represents that the card will be deleted when clicked"
      />
    </button>
  );
};
