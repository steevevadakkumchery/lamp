async function getMultipleCityDataDeep(cities) {
  return await Promise.all(
    cities.map(async (cityDataShallow) => {
      const id = cityDataShallow.woeid;
      const deepValuesRes = await getCityDataDeep(id);
      return deepValuesRes;
    })
  );
}

export async function getInitialCitiesDataAll(cities) {
  if (!Array.isArray(cities)) return;
  const citiesShallow = await getCitiesDataShallow(cities);
  return getMultipleCityDataDeep(citiesShallow);
}

export async function getCitiesDataAll(cityQuery) {
  const cityData = await getCityDataShallow(cityQuery);
  return getMultipleCityDataDeep(cityData);
}

export async function getCitiesDataShallow(cities) {
  if (!Array.isArray(cities)) return;
  const data = await Promise.all(
    cities.map((city) => getCityDataShallow(city))
  );

  return data.reduce((acc, curr) => [...acc, ...curr], []);
}

export async function getCityDataShallow(city) {
  try {
    const data = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}location/search/?query=${city}`
    );

    return await data.json();
  } catch (error) {
    console.error(error);
    return {};
  }
}

export async function getCityDataDeep(cityId) {
  try {
    const data = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}location/${cityId}`
    );

    return await data.json();
  } catch (error) {
    console.error(error);
    return {};
  }
}
