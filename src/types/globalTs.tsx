export type BreweryCardType = {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  brewery_type: string;
  postal_code: string;
  phone?: string;
  value?: string;
};

export type ButtonHandleType = {
  idToComponent: string,
  orderByIdListToComponent: Array<string>
  setOpenInputToComponent: () => void;
}