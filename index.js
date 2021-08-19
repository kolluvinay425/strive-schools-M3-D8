const postFormData = async (inputData) => {
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  //const plainFormData = Object.fromEntries(formInfo.entries());
  const formDataJsonString = JSON.stringify(inputData);
  const fetchHeaders = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmI3NjJkNTI2MjAwMTViNmRjYTkiLCJpYXQiOjE2MjkyODkzMzQsImV4cCI6MTYzMDQ5ODkzNH0.e22WBf1Y-4mBUdosbyiU0mR7IrzZU2sqgiCkO1qL7JA",
    },
    body: formDataJsonString,
  };

  const response = await fetch(url, fetchHeaders);

  if (response.ok) {
    const respEvent = await response.json();
    console.log(respEvent);
  }
};

const handleFormData = async (event) => {
  event.preventDefault();
  const inputData = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value,
    price: document.getElementById("price").value,
  };
  //const url = "https://striveschool-api.herokuapp.com/api/product/";
  console.log(inputData);
  try {
    //const formInfo = JSON.stringify(inputData);

    await postFormData(inputData);
    //console.log(responseData);
  } catch (error) {
    console.log(error);
  }
};

const formData = document.getElementById("form-data");
formData.addEventListener("submit", handleFormData);
