let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let signBtn = document.querySelector(".signBtn");

let checkEmail = () => {
  let str = email.value;
  // console.log(str);
  let reg = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,4}$/;

  if (!reg.test(str)) {
    email.classList.remove("border-slate-100", "text-gray-900");
    email.classList.add("border-red-500", "text-red-500");
    signBtn.setAttribute("disabled", "disabled");
    signBtn.classList.add("disabled:cursor-not-allowed");
  } else {
    email.classList.add("border-green-500", "text-green-900");
    email.classList.remove("border-red-500", "text-red-500");
    signBtn.removeAttribute("disabled");
    signBtn.classList.remove("disabled:cursor-not-allowed");
  }
};
email.addEventListener("keyup", () => {
  checkEmail();
});
let checkPass = () => {
  let str = pass.value;
  // console.log(str);
  let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/; // aA1@Thu

  if (!reg.test(str)) {
    pass.classList.remove("border-slate-100", "text-gray-900");
    pass.classList.add("border-red-500", "text-red-500");
    signBtn.setAttribute("disabled", "disabled");
    signBtn.classList.add("disabled:cursor-not-allowed");
  } else {
    pass.classList.add("border-green-500", "text-green-900");
    pass.classList.remove("border-red-500", "text-red-500");
    signBtn.removeAttribute("disabled");
    signBtn.classList.remove("disabled:cursor-not-allowed");
  }
};
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
let changeDark = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("Theme", "dark");
  // switchBtn.setAttribute("checked", "checked");
};

let changeLight = () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("Theme", "light");
  // switchBtn.removeAttribute("checked");
};

let localTheme = localStorage.getItem("Theme");
if (localTheme === "light") changeLight();
else changeDark();