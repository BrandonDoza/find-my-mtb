export async function fetchBikes() {
  try {
    // const response = await fetch("http://localhost:3001/api/v1/bikes"); for local testing
    const response = await fetch("https://find-my-mtb-9n78cpo73-brandon-dozas-projects.vercel.app/api/v1/bikes"); //for vercel deployment
    if (!response.ok) {
      throw new Error("There is an issue getting the bikes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchSingleBike(id) {
  try {
    // const response = await fetch(`http://localhost:3001/api/v1/bikes/${id}`); for local testing
    const response = await fetch(`https://find-my-mtb-9n78cpo73-brandon-dozas-projects.vercel.app/api/v1/bikes/${id}`); // for vercel deployment
    if (!response.ok) {
      throw new Error("The bike you requested could not be found");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateFavorite(id) {
  try {
    // const response = await fetch(`https://localhost:3001/api/v1/bikes/${id}`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    // }); for local testing
    const response = await fetch(`https://find-my-mtb-9n78cpo73-brandon-dozas-projects.vercel.app/api/v1/bikes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      }); // for vercel deployment
    if (!response.ok) {
      throw new Error("Bike not found");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


//For Future Use To Add Bike
// export async function postBike(dataToPost) {
//   try {
//     const response = await fetch("http://localhost:3001/api/v1/bikes", {
//       method: "POST",
//       body: JSON.stringify(dataToPost),
//       headers: { "Content-Type": "application/json" },
//     });
//     if (!response.ok) {
//       throw new Error("Trouble adding you bike");
//     }
//     const data = await response.json();
//   } catch (error) {
//     throw error;
//   }
// }
