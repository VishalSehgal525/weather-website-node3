const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const messageThree = document.querySelector("#message-3");
const messageFour = document.querySelector("#message-4");
const messageFive = document.querySelector("#message-5");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageTwo.textContent = "Loading...";
  messageOne.textContent = "";

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageTwo.textContent = data.error;
      } else {
        messageTwo.textContent = data.location;
        messageOne.textContent = data.forecast;
        messageThree.textContent = data.forecast2;
        messageFour.textContent = data.humidity;
        messageFive.textContent = data.windSpeed;
      }
    });
  });
});
