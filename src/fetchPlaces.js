export default async function fetchRestaurants() {
  const options = {
    method: "GET",
    headers: {
      Authorization: process.env.REACT_APP_AIRTABLE_AUTHORIZATION,
    },
  };
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/appptxjUYbMGbZsoJ/info`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
