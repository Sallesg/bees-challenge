import { useEffect, useState, ChangeEvent } from "react";
import { getBreweries } from "../../services/api.js";
import { EditButton } from "../EditButton/EditButton.js";
import checkIcon from "../../assets/check-icon.svg";
import {
  addressTexts,
  cardContent,
  cardTitle,
  cardWrapper,
  highlightInfos,
} from "./styles.js";
import { BreweryCardType } from "../../types/globalTs";
import typeIcon from "../../assets/type-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { form, input, span } from "../../GlobalCss.js";
import { DeleteButton } from "../DeleteButton/DeleteButton.js";
import { Pagination } from "../Pagination/Pagination.js";

export const BreweryCard = () => {
  const [brewery, setBrewery] = useState<BreweryCardType[]>([]) ?? [
    {
      id: "10-56",
      name: "Brewing Company",
      street: "400 Brown Cir",
      city: "Knox",
      state: "Indiana",
      country: "United States",
      brewery_type: "micro",
      postal_code: "46534",
      phone: "6308165790",
    },
  ];
  const isHigherForPaginate = window.screen.width > 1340 ? 6 : 30;
  const [cardPerPage] = useState<any>(isHigherForPaginate);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [openInput, setOpenInput] = useState<boolean>(false);

  // const [newInfo] = useState<string>();

  async function getBrewery() {
    setLoading(true);
    const isUndefinedOrZero = brewery.length > 0 && brewery !== undefined;
    const response = await getBreweries();
    if (response.success || isUndefinedOrZero) {
      setBrewery(response.breweries);
      setLoading(false);
    }
  }

  //The Api response is so fast, then I simulate a type of loading
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);

  const orderId = brewery.sort((a, b): any =>
    a["id"] > b["id"] ? 1 : b["id"] > a["id"] ? -1 : 0
  );

  const orderByIdList = orderId.map(
    ({
      id,
      name,
      street,
      city,
      state,
      country,
      brewery_type,
      postal_code,
      phone,
      value,
    }): BreweryCardType => {
      return {
        id,
        name,
        street,
        city,
        state,
        country,
        brewery_type,
        postal_code,
        phone,
        value,
      };
    }
  );

  const handleCreateNewInfo = (
    id: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setBrewery((): any => {
      const newState = brewery?.map((state) => {
        if (state.id === id) {
          return { ...state, value: event.target.value };
        }
        return state;
      });
      return newState;
    });
  };

  // const onAddNewValue = (value: any) => {
  //   const completeWord = `${[...value]}`;
  //   console.log("onAddNewValue:", completeWord);
  //   return value;
  // };

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = brewery.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (paginate: any) => setCurrentPage(paginate);

  useEffect(() => {
    getBrewery();
    return () => {
      getBrewery();
    };
  }, []);

  useEffect(() => {
    timer;
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <h1>We're preparing your data...</h1>}
      {!loading && (
        <div className={cardWrapper()}>
          {orderByIdList.length >= 1 &&
            currentCards.map(
              ({
                id,
                name,
                street,
                city,
                state,
                country,
                brewery_type,
                postal_code,
                phone,
                value,
              }: BreweryCardType) => (
                <div className={cardContent()} key={id}>
                  <DeleteButton
                    idToComponent={id}
                    orderByIdListToComponent={orderByIdList}
                    setBreweryToComponent={setBrewery}
                  />
                  <h2 className={cardTitle()}>
                    {id.length} - {name}
                  </h2>
                  <div className={addressTexts()}>
                    <p>
                      {street && (
                        <>
                          {street}
                          <br />
                        </>
                      )}
                      {city}, {state} - {country}
                    </p>
                  </div>
                  <div className={highlightInfos()}>
                    <span className={span({ variant: "commons" })}>
                      <img src={typeIcon} alt="" />
                      {brewery_type}
                    </span>
                    <span className={span({ variant: "commons" })}>
                      <img src={locationIcon} alt="" />
                      {postal_code.replace("-", "")}
                    </span>
                    {phone && (
                      <span className={span({ variant: "commons" })}>
                        <img src={phoneIcon} alt="" />
                        {phone}
                      </span>
                    )}
                    {openInput === false ? (
                      <EditButton
                        idToComponent={id}
                        orderByIdListToComponent={orderByIdList}
                        setOpenInputToComponent={setOpenInput}
                      />
                    ) : (
                      <button
                        // onClick={() => onAddNewValue(value)}
                        className={form()}
                      >
                        <img src={checkIcon} alt="" />
                        <input
                          className={input()}
                          type="text"
                          name={value}
                          onChange={(e) => handleCreateNewInfo(id, e)}
                        />
                      </button>
                    )}
                    {/* {value?.length >= 4 && (
                      <span className={span({ variant: "commons" })}>
                        {onAddNewValue(value)}
                      </span>
                    )} */}
                  </div>
                </div>
              )
            )}
        </div>
      )}
      <Pagination
        cardPerPage={cardPerPage}
        totalCards={brewery.length}
        paginate={paginate}
      />
    </>
  );
};
