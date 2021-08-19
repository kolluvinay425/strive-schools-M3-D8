const url = "https://striveschool-api.herokuapp.com/api/product/";
const card = document.getElementById("products");
const apiData = async () => {
  try {
    const fetchData = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmI3NjJkNTI2MjAwMTViNmRjYTkiLCJpYXQiOjE2MjkyODkzMzQsImV4cCI6MTYzMDQ5ODkzNH0.e22WBf1Y-4mBUdosbyiU0mR7IrzZU2sqgiCkO1qL7JA",
      },
    });
    const data = await fetchData.json();
    console.log(data);
    data.forEach((element) => {
      console.log(element);
      card.innerHTML += `<div class="col-md-3">
      <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${element.imageUrl}" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">${element.name}</p>
                            <p class="card-text">${element.description}</p>
                            <p class="card-text">${element.brand}</p>
                            <p class="card-text">${element.price}</p>
                            <a href="detail.html?id=${element._id}"><button  class="btn btn-primary">Edit</button></a>
                            <a href="front.html"><button class="btn btn-primary">Delete</button></a>

                        </div>
                        </div>
                        </div>`;
    });
  } catch {
    console.log(" server error");
  }
};
window.onload = () => {
  apiData();
};
