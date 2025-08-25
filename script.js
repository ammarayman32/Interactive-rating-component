const rates = document.querySelectorAll(".rate");
const submitBtn = document.getElementById("submit");
const container = document.querySelector(".container");

let selectedRate = null;

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rates.forEach((r) => r.classList.remove("active"));
    rate.classList.add("active");
    selectedRate = rate.innerText;
  });
});

submitBtn.addEventListener("click", () => {
  if (selectedRate) {
    container.classList.add("thanks");
    container.innerHTML = `
      <img src="/images/illustration-thank-you.svg" alt="atm"/>
    <p class="thanks-p">You selected ${selectedRate} out of 5</p>
    <h1 class="thanks-h">Thank you!</h1>
    <p class="thanks-body">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
    `;
  } else {
    alert("Please select a rating before submitting!");
  }
});
