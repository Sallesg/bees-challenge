import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openbrewerydb.org/",
});

async function getBreweries() {
  let response: any = {
    success: false,
    breweries: [],
  };
  try {
    const breweries = await api.get("breweries");
    response.success = true;
    response.breweries = breweries.data;
  } catch (error) {
    console.error(
      "It`s not working, see the api file inside the services folder"
    );
  }
  return response;
}

export { getBreweries };
