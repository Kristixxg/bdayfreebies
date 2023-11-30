// const fetchRestaurants = async () => {
//   const options = {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer patYBM4W28kQgiAHH.b2d80a0df263aff30342403d7b2cb20ffffdb3f7e4dba047e9b21f5b7d2b7434`,
//     },
//   };
//   try {
//     const response = await fetch(
//       `https://api.airtable.com/v0/appUrTA5XGGqWSBgM/info`,
//       options
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const fetchRestaurants = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer pat7EI0Wh03DJMiQ5.77d1bf0222b2ead921089dd21c58182cc1db88c2855a6e43ea367e3b81b7060f`,
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
};

export default fetchRestaurants;
