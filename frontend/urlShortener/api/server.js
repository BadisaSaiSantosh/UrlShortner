const axios = require("axios"); // ✅ Fixed typo
require("dotenv").config();

const BASE_LINK = process.env.BASE_LINK;

const api = axios.create({
  baseURL: BASE_LINK,
  headers: { "Content-Type": "application/json" },
});

//  Get all data
export const entireData = () => {
  return api.get("/api/data")
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching data:", error);
      return null;
    });
};

//  Add new data (original link & short link)
export const addData = (originalLink, generatedLink) => {
  return api.post("/api/postdata", { originalLink, generatedLink })
    .then(response => response.data)
    .catch(err => {
      console.error("Error uploading data:", err);
      return null;
    });
};

//  Delete data by ID
export const deleteData = (id) => {
  return api.delete(`/api/data/${id}`)
    .then(() => console.log("Deleted"))
    .catch(err => {
      console.error("Error deleting data:", err);
      return null;
    });
};

//  Update the number of clicks for a link
export const updateClicks = (id) => {
  return api.put(`/api/data/${id}`)
    .then(response => {
      let updatedData = response.data;
      updatedData.clicked += 1; 
      return updatedData;
    })
    .catch(err => {
      console.error("Error updating clicks:", err);
      return null;
    });
};
