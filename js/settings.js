const analogueToggle = document.querySelector(".analogue");
const digitalToggle = document.querySelector(".digital");
const analogue = document.querySelector(".clock");
const digital = document.querySelector(".numericalClock");

export function settings(){
    analogueToggle.addEventListener("click",()=>{
        digital.classList.add("hidden");
        analogue.classList.remove("hidden");
        analogueToggle.style.opacity = "0.25";
        digitalToggle.style.opacity = "1";
    });
    digitalToggle.addEventListener("click",()=>{
        analogue.classList.add("hidden");
        digital.classList.remove("hidden");
        digitalToggle.style.opacity = "0.25";
        analogueToggle.style.opacity = "1";
    });
}