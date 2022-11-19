let arrowleft = document.querySelector("#arrow-left");
let arrowright = document.querySelector("#arrow-right");
let dot1 = document.querySelector("#dot1");
let dot2 = document.querySelector("#dot2");
let dot3 = document.querySelector("#dot3");
let dot4 = document.querySelector("#dot4");
let dot5 = document.querySelector("#dot5");
let dot6 = document.querySelector("#dot6");
let dot7 = document.querySelector("#dot7");
let photo1 = document.querySelector("#photo1");
let photo2 = document.querySelector("#photo2");
let photo3 = document.querySelector("#photo3");
let photo4 = document.querySelector("#photo4");
let photo5 = document.querySelector("#photo5");
let photo6 = document.querySelector("#photo6");
let photo7 = document.querySelector("#photo7");
let continentname = document.querySelector(".continentname");

let removeActive = () => {
    let activephoto = document.querySelector(".active");
    activephoto.classList.remove("active");
}
let showphoto = (photoNumber) => {
    removeActive();
    document.querySelector("#photo"+photoNumber).classList.add("active");
    
}

let showphoto2 = () => {
   showphoto(2)
       
};
dot2.addEventListener("click",showphoto2);
