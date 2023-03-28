let details = document.querySelector(".details");
let imgContainer = document.querySelector(".img-container");
let getUserRandom = document.getElementById("get-user-random");
let url = "https://random-data-api.com/api/v2/users?response_type=json";

let getUser = () => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      imgContainer.innerHTML = `<img src=${data.avatar}>`;

      details.innerHTML = `<h2>${data.first_name} ${data.last_name}</h2>
            <h4>${data.employment.title}</h4>
            <h5><img src="../asset/lokaasi.png"> ${data.address.city}</h5>`;
      let randomColor =
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
      document.documentElement.style.setProperty("--theme-color", randomColor);
    });
};

getUserRandom.addEventListener("click", getUser);
window.addEventListener("load", getUser);
