//const url = "https://striveschool-api.herokuapp.com/api/product/";

const apiData = async () => {
  try {
    const fetchData = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmI3NjJkNTI2MjAwMTViNmRjYTkiLCJpYXQiOjE2MjkyODkzMzQsImV4cCI6MTYzMDQ5ODkzNH0.e22WBf1Y-4mBUdosbyiU0mR7IrzZU2sqgiCkO1qL7JA",
      },
    });
    const data = await fetchData.json();
    console.log("apiData------>", data);
  } catch {
    console.log(" server error");
  }
};

const postFormData = async ({ url, formInfo }) => {
  const plainFormData = Object.fromEntries(formInfo.entries());
  const formDataJsonString = JSON.stringify(plainFormData);
  const fetchHeaders = {
    method: "POST",

    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmI3NjJkNTI2MjAwMTViNmRjYTkiLCJpYXQiOjE2MjkyODkzMzQsImV4cCI6MTYzMDQ5ODkzNH0.e22WBf1Y-4mBUdosbyiU0mR7IrzZU2sqgiCkO1qL7JA",
      body: formDataJsonString,
    },
  };

  const response = await fetch(url, fetchHeaders);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  console.log(response.json());
};

const handleFormData = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  console.log(form);
  try {
    const formInfo = new FormData(form);

    const responseData = await postFormData({ url, formInfo });
    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
};

const formData = document.getElementById("form-data");
formData.addEventListener("submit", handleFormData);
//apiData();
