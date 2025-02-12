// loading..
let load = document.querySelector(".load");

window.addEventListener("load", () => {
  load.style.display = "none";
});

// Add to Card alert
let itemsOne = document.querySelector(".itemsOne");
let itemsTwo = document.querySelector(".itemsTwo");
let itemsThree = document.querySelector(".itemsThree");
let itemsFour = document.querySelector(".itemsFour");
let itemsFive = document.querySelector(".itemsFive");
let itemsSix = document.querySelector(".itemsSix");

// let closeAlert=document.querySelector('.closeAlert');
let notiAlert = document.querySelector(".notiAlert");
// let cardClose=document.querySelector('.cardClose');
itemsOne.addEventListener("click", () => {
  notiAlert.classList.add("animate__fadeInDown");
});
itemsTwo.addEventListener("click", () => {
  notiAlert.classList.add("animate__fadeInDown");
});
itemsThree.addEventListener("click", () => {
  notiAlert.classList.add("animate__fadeInDown");
});
itemsFour.addEventListener("click", () => {
  notiAlert.classList.add("animate__fadeInDown");
});
itemsFive.addEventListener("click", () => {
  notiAlert.classList.add("animate__fadeInDown");
});
itemsSix.addEventListener("click", () => {
  notiAlert.classList.add("animate__fadeInDown");
});

// Validation
let email = document.querySelector("#email");
let emailLabel = document.querySelector(".emailLabel");
let pass = document.querySelector("#password");
let passLabel = document.querySelector(".passLabel");
let signBtn = document.querySelector(".signBtn");

let checkEmail = () => {
  let str = email.value;
  let reg = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,4}$/;

  if (!reg.test(str)) {
    emailLabel.classList.remove("text-sm", "text-gray-900");
    emailLabel.classList.add("text-base", "text-red-500");
    email.classList.remove(
      "border-gray-300",
      "text-gray-900",
      "focus:ring-blue-500",
      "focus:border-blue-500"
    );
    email.classList.add(
      "invalid",
      "invalid:border-red-500",
      "invalid:focus:ring-red-500",
      "invalid:text-red-500",
      "invalid:focus:border-red-500"
    );
    signBtn.setAttribute("disabled", "disabled");
    signBtn.classList.add("disabled:cursor-not-allowed");
  } else {
    emailLabel.classList.add("text-sm", "text-green-700");
    emailLabel.classList.remove("text-base", "text-red-500");
    email.classList.add(
      "border-green-500",
      "text-green-500",
      "focus:ring-green-500",
      "focus:border-green-500"
    );
    email.classList.remove(
      "invalid",
      "invalid:border-red-500",
      "invalid:focus:ring-red-500",
      "invalid:text-red-500",
      "invalid:focus:border-red-500"
    );
    signBtn.removeAttribute("disabled");
    signBtn.classList.remove("disabled:cursor-not-allowed");
  }
};

let checkPass = () => {
  let str = pass.value;
  // console.log(str);
  let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/; // aA1@Thu

  if (!reg.test(str)) {
    passLabel.classList.remove("text-sm", "text-gray-900");
    passLabel.classList.add("text-base", "text-red-500");
    pass.classList.remove(
      "border-gray-300",
      "text-gray-900",
      "focus:ring-blue-500",
      "focus:border-blue-500"
    );
    pass.classList.add(
      "border-red-500",
      "focus:ring-red-500",
      "text-red-500",
      "focus:border-red-500"
    );
    signBtn.setAttribute("disabled", "disabled");
    signBtn.classList.add("disabled:cursor-not-allowed");
  } else {
    //  alert('true');
    passLabel.classList.remove("text-base", "text-red-500");
    pass.classList.remove(
      "border-red-500",
      "focus:ring-red-500",
      "text-red-500",
      "focus:border-red-500"
    );
    passLabel.classList.add("text-sm", "text-green-500");
    pass.classList.add(
      "border-green-500",
      "text-green-900",
      "focus:ring-green-500",
      "focus:border-green-500"
    );
    signBtn.removeAttribute("disabled");
    signBtn.classList.remove("disabled:cursor-not-allowed");
  }
};

email.addEventListener("keyup", () => {
  checkEmail();
});
pass.addEventListener("keyup", () => {
  checkPass();
});
email.addEventListener("copy", (event) => {
  event.preventDefault();
});
pass.addEventListener("copy", (event) => {
  event.preventDefault();
});


// Dark Mode
let switchBtn = document.querySelector("#toggleB");

      let changeDark = () => {
        document.documentElement.classList.add("dark");
        localStorage.setItem("Theme", "dark");
        switchBtn.setAttribute("checked", "checked");
      };

      let changeLight = () => {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("Theme", "light");
        switchBtn.removeAttribute("checked");
      };

      let localTheme = localStorage.getItem("Theme");
      if (localTheme === "light") changeLight();
      else changeDark();

      switchBtn.addEventListener("change", () => {
        let changeLocal = localStorage.getItem("Theme");

        if (changeLocal === "dark") changeLight();
        else changeDark();
      });