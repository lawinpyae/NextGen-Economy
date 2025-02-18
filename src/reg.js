// Validation
let ph = document.querySelector("#floating_phone");
let email = document.querySelector("#floating_email");
// let emailLabel=document.querySelector('.emailLabel');
let pass = document.querySelector("#floating_password");
let conPass = document.querySelector("#floating_repeat_password");
// let passLabel=document.querySelector('.passLabel');
let signBtn = document.querySelector(".signBtn");
let fullName = document.querySelector("#floating_full_name");
let floatEmail = document.querySelector(".floatEmail");
let floatPass = document.querySelector(".floatPass");
let floatConPass = document.querySelector(".floatConPass");
let floatFullName = document.querySelector(".floatFullName");
let floatPh = document.querySelector(".floatPh");
let form = document.querySelector("#form");

let checkEmail = () => {
  let str = email.value;
  // console.log(str);
  let reg = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,4}$/;

  if (!reg.test(str)) {
    // emailLabel.classList.remove('text-sm','text-gray-900');
    // emailLabel.classList.add('text-base','text-red-500');
    email.classList.remove("focus:border-blue-600", "text-green-500");
    email.classList.add(
      "invalid",
      "invalid:border-red-500",
      "invalid:text-red-500",
      "invalid:focus:border-red-500",
      "border-red-500",
      "focus:border-red-500",
      "text-red-500"
    );
    floatEmail.classList.remove(
      "peer-focus:text-blue-600",
      "peer-focus:text-green-500",
      "text-green-500"
    );
    floatEmail.classList.add("peer-focus:text-red-500", "text-red-500");
    signBtn.setAttribute("disabled", "disabled");
    signBtn.classList.add("disabled:cursor-not-allowed");
  } else {
    // emailLabel.classList.add('text-sm','text-green-700');
    // emailLabel.classList.remove('text-base','text-red-500');
    email.classList.add(
      "focus:ring-green-500",
      "focus:border-green-500",
      "border-green-500",
      "text-green-500"
    );
    email.classList.remove(
      "invalid",
      "invalid:border-red-500",
      "invalid:focus:ring-red-500",
      "invalid:text-red-500",
      "invalid:focus:border-red-500",
      "border-red-500",
      "focus:border-red-500",
      "text-red-500"
    );
    floatEmail.classList.remove("peer-focus:text-red-500", "text-red-500");
    floatEmail.classList.add("peer-focus:text-green-500", "text-green-500");
    signBtn.removeAttribute("disabled");
    signBtn.classList.remove("disabled:cursor-not-allowed");
  }
};

let checkPass = () => {
  let str = pass.value;
  // console.log(str);
  let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/; // aA1@Thu

  if (!reg.test(str)) {
    pass.classList.remove(
      "focus:border-blue-600",
      "border-gray-300",
      "text-gray-900",
      "text-green-500",
      "border-green-500",
      "focus:border-green-500"
    );
    pass.classList.add(
      "invalid",
      "invalid:border-red-500",
      "invalid:text-red-500",
      "invalid:focus:border-red-500",
      "border-red-500",
      "text-red-500"
    );
    floatPass.classList.remove("peer-focus:text-blue-600", "text-gray-500");
    floatPass.classList.add("peer-focus:text-red-500", "text-red-500");
    signBtn.setAttribute("disabled", "disabled");
    signBtn.classList.add("disabled:cursor-not-allowed");
  } else {
    //  alert('true');
    pass.classList.add(
      "focus:border-green-500",
      "border-green-500",
      "text-green-500"
    );
    pass.classList.remove(
      "invalid",
      "invalid:border-red-500",
      "invalid:text-red-500",
      "invalid:focus:border-red-500",
      "border-red-500",
      "text-red-500"
    );
    floatPass.classList.add("peer-focus:text-green-600", "text-green-500");
    floatPass.classList.remove("peer-focus:text-red-500", "text-red-500");
    signBtn.removeAttribute("disabled");
    signBtn.classList.remove("disabled:cursor-not-allowed");
  }
};

// let checkConPass = () => {
//   let str = conPass.value;
//   // console.log(str);
//   let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/; // aA1@Thu

//   if (!reg.test(str)) {
//     // emailLabel.classList.remove('text-sm','text-gray-900');
//     // emailLabel.classList.add('text-base','text-red-500');
//     conPass.classList.remove(
//       "focus:border-blue-600",
//       "text-gray-900",
//       "border-gray-300",
//       "text-green-500",
//       "border-green-500",
//       "focus:border-green-500"
//     );
//     conPass.classList.add(
//       "invalid",
//       "invalid:border-red-500",
//       "invalid:text-red-500",
//       "invalid:focus:border-red-500",
//       "border-red-500",
//       "text-red-500"
//     );
//     floatConPass.classList.remove("peer-focus:text-blue-600", "text-gray-500");
//     floatConPass.classList.add("peer-focus:text-red-500", "text-red-500");
//     signBtn.setAttribute("disabled", "disabled");
//     signBtn.classList.add("disabled:cursor-not-allowed");
//   } else {
//     conPass.classList.add(
//       "focus:ring-green-500",
//       "focus:border-green-500",
//       "border-green-500",
//       "text-green-500"
//     );
//     conPass.classList.remove(
//       "invalid",
//       "invalid:border-red-500",
//       "invalid:focus:ring-red-500",
//       "invalid:text-red-500",
//       "invalid:focus:border-red-500",
//       "border-red-500",
//       "text-red-500"
//     );
//     floatConPass.classList.remove("peer-focus:text-red-500", "text-red-500");
//     floatConPass.classList.add("peer-focus:text-green-500", "text-green-500");
//     signBtn.removeAttribute("disabled");
//     signBtn.classList.remove("disabled:cursor-not-allowed");
//   }
// };

let checkPh = () => {
  //  ထိပ်ဆုံး စာလုံးက +959 နဲ့စကိုစရမယ်။အဲ့ +959 ရဲ့အနောက်ကမှ "7  6  4  2  8  9"  ထဲက တစ်လုံးလိုက်ကို လိုက်ကိုလိုက်ရမယ်။+959 အနောက်ကစရေရင်စုစုပေါင်း "11" လုံးရှိရမယ်။

  let str = ph.value;
  // console.log(str);
  let reg = /^\+959[764289]\d{8}$/;

  if (!reg.test(str)) {
    // emailLabel.classList.remove('text-sm','text-gray-900');
    // emailLabel.classList.add('text-base','text-red-500');
    ph.classList.remove("focus:border-blue-600", "text-green-500","dark:text-white","dark:focus:border-blue-500");
    ph.classList.add(
      "invalid",
      "invalid:border-red-500",
      "invalid:text-red-500",
      "invalid:focus:border-red-500",
      "border-red-500",
      "focus:border-red-500",
      "text-red-500",
      "dark:text-red-500",
   
    );
    floatPh.classList.remove(
      "peer-focus:text-blue-600",
      "peer-focus:text-green-500",
      "text-green-500",
      "dark:text-gray-400",
      "peer-focus:dark:text-blue-500"
    );
    floatPh.classList.add("peer-focus:text-red-500", "text-red-500","dark:text-red-500","peer-focus:dark:text-red-500");
    signBtn.setAttribute("disabled", "disabled");
    signBtn.classList.add("disabled:cursor-not-allowed");
  } else {
    // emailLabel.classList.add('text-sm','text-green-700');
    // emailLabel.classList.remove('text-base','text-red-500');
    ph.classList.add(
      "focus:ring-green-500",
      "focus:border-green-500",
      "border-green-500",
      "text-green-500",
      "dark:text-green-500"
    );
    ph.classList.remove(
      "invalid",
      "invalid:border-red-500",
      "invalid:focus:ring-red-500",
      "invalid:text-red-500",
      "invalid:focus:border-red-500",
      "border-red-500",
      "focus:border-red-500",
      "text-red-500",
      "dark:text-red-500",

    );
    floatPh.classList.remove("peer-focus:text-red-500", "text-red-500","dark:text-red-500","peer-focus:dark:text-red-500");
    floatPh.classList.add("peer-focus:text-green-500", "text-green-500","text-green-500","peer-focus:dark:text-green-500");
    signBtn.removeAttribute("disabled");
    signBtn.classList.remove("disabled:cursor-not-allowed");
  }
};

ph.addEventListener("keyup", () => {
  checkPh();
});

email.addEventListener("keyup", () => {
  checkEmail();
});
pass.addEventListener("keyup", () => {
  checkPass();
});
// conPass.addEventListener("keyup", () => {
//   checkConPass();
// });

// email.addEventListener("copy", (event) => {
//   event.preventDefault();
// });
// pass.addEventListener("copy", (event) => {
//   event.preventDefault();
// });
// conPass.addEventListener("copy", (event) => {
//   event.preventDefault();
// });
// ph.addEventListener("copy", (event) => {
//   event.preventDefault();
// });
form.addEventListener("copy", (event) => {
  event.preventDefault();
});

conPass.addEventListener("input", function () {
  let strPass = pass.value;
  let strConPass = this.value;
  if (strPass === strConPass) {
    conPass.classList.add(
      "focus:ring-green-500",
      "focus:border-green-500",
      "border-green-500",
      "text-green-500"
    );
    conPass.classList.remove(
      "invalid",
      "invalid:border-red-500",
      "invalid:focus:ring-red-500",
      "invalid:text-red-500",
      "invalid:focus:border-red-500",
      "border-red-500",
      "text-red-500"
    );
    floatConPass.classList.remove("peer-focus:text-red-500", "text-red-500");
    floatConPass.classList.add("peer-focus:text-green-500", "text-green-500");
    signBtn.removeAttribute("disabled");
    signBtn.classList.remove("disabled:cursor-not-allowed");
  } else {
    conPass.classList.remove(
      "focus:border-blue-600",
      "text-gray-900",
      "border-gray-300",
      "text-green-500",
      "border-green-500",
      "focus:border-green-500"
    );
    conPass.classList.add(
      "invalid",
      "invalid:border-red-500",
      "invalid:text-red-500",
      "invalid:focus:border-red-500",
      "border-red-500",
      "text-red-500"
    );
    floatConPass.classList.remove("peer-focus:text-blue-600", "text-gray-500");
    floatConPass.classList.add("peer-focus:text-red-500", "text-red-500");
    signBtn.setAttribute("disabled", "disabled");
    signBtn.classList.add("disabled:cursor-not-allowed");
  }
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