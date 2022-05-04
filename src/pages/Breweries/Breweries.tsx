import { BreweryCard } from "../../components/BreweryCard/BreweryCard";
import { LoggedHeader } from "../../components/LoggedHeader/LoggedHeader";
import { CommonPages } from "../../GlobalCss";
import { WrapperCard } from "./styles";

export const Breweries = () => {
  return (
    <div className={CommonPages()}>
      <LoggedHeader />
      <div className={WrapperCard()}>
        <BreweryCard />
      </div>
    </div>
  );
};
