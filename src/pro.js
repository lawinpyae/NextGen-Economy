let one=document.querySelector(".one");
let two=document.querySelector(".two");
let three=document.querySelector(".three");
let four=document.querySelector(".four");
let five=document.querySelector(".five");
let six=document.querySelector(".six");
let seven=document.querySelector(".seven");
let eight=document.querySelector(".eight");
let nine=document.querySelector(".nine");
let ten=document.querySelector(".ten");

let leftBtn=document.querySelector(".leftBtn");
let rightBtn=document.querySelector(".rightBtn");

rightBtn.addEventListener("click",()=>{
    one.classList.remove('flex');
    one.classList.add("hidden");

    two.classList.remove('flex');
    two.classList.add("hidden");

    three.classList.remove('flex');
    three.classList.add("hidden");

    four.classList.remove('flex');
    four.classList.add("hidden");

    five.classList.remove('flex');
    five.classList.add("hidden");

    six.classList.remove('hidden');
    six.classList.add("flex");

    seven.classList.remove('hidden');
    seven.classList.add("flex");

    eight.classList.remove('hidden');
    eight.classList.add("flex");

    nine.classList.remove('hidden');
    nine.classList.add("flex");

    ten.classList.remove('hidden');
    ten.classList.add("flex");
});
leftBtn.addEventListener("click",()=>{
    one.classList.remove('hidden');
    one.classList.add("flex");

    two.classList.remove('hidden');
    two.classList.add("flex");

    three.classList.remove('hidden');
    three.classList.add("flex");

    four.classList.remove('hidden');
    four.classList.add("flex");

    five.classList.remove('hidden');
    five.classList.add("flex");

    six.classList.remove('flex');
    six.classList.add("hidden");

    seven.classList.remove('flex');
    seven.classList.add("hidden");

    eight.classList.remove('flex');
    eight.classList.add("hidden");

    nine.classList.remove('flex');
    nine.classList.add("hidden");

    ten.classList.remove('flex');
    ten.classList.add("hidden");
});