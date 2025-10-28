// This is the main js code to handle index.html frontend JS.

let socialExtra = document.getElementById("socialExtra");
let socialAnchorNav = document.getElementById("socialAnchorNav");
let nav_expand_btn = document.getElementById("nav-expand-btn");
let mobileNavExtraCard = document.getElementById("mobileNavExtraCard");

//Listening user activities
socialExtra.addEventListener("mouseover", () => {
    socialExtra.style.display = "flex";
    socialAnchorNav.style.backgroundColor = "rgb(119, 119, 119)";
})
socialExtra.addEventListener("mouseout", () => {
    socialAnchorNav.style.backgroundColor = "transparent";
    socialExtra.style.display = "none";
})
socialAnchorNav.addEventListener("mouseover", () => {
    socialAnchorNav.style.backgroundColor = "rgb(119, 119, 119)";
    socialExtra.style.display = "flex";
})
socialAnchorNav.addEventListener("mouseout", () => {
    socialAnchorNav.style.backgroundColor = "transparent";
    socialExtra.style.display = "none";
})
nav_expand_btn.addEventListener("click", () => {
    if (nav_expand_btn.children[1].style.opacity != "0") {

        nav_expand_btn.children[1].style.opacity = "0";
        mobileNavExtraCard.style.height = "400px";
        nav_expand_btn.children[0].style.transform = "rotate(45deg)translateX(4.5px)translateY(4.5px)";
        nav_expand_btn.children[2].style.transform = "rotate(-45deg)translateX(4.5px)translateY(-4.5px)";
    } else {

        nav_expand_btn.children[1].style.opacity = "1";
        mobileNavExtraCard.style.height = "0px";
        nav_expand_btn.children[0].style.transform = "rotate(0)translateX(0)translateY(0)";
        nav_expand_btn.children[2].style.transform = "rotate(0)translateX(0)translateY(0)";
    }

})