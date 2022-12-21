// Full Row Vars Start Here
var home_section = document.querySelector("#banner_section");
var about_section = document.querySelector("#about_section");
// Menu List Vars Start Here
var list_item = document.querySelectorAll(".menu_li");
// Menu Vars Start Here
var home = document.querySelector("#home");
var about = document.querySelector("#about");
var portfolio = document.querySelector("#portfolio");
var contact = document.querySelector("#contact");

function homeClick() {
    home.addEventListener("click", function () {
        // window.location.reload("Refresh");
        home_section.style.display = "block";
        about_section.style.display = "none";
        list_item[0].classList.add("active");
        list_item[1].classList.remove("active");
        list_item[2].classList.remove("active");
        list_item[3].classList.remove("active");
    });

    about.addEventListener("click", function () {
        home_section.style.display = "none";
        about_section.style.display = "block";
        list_item[0].classList.remove("active");
        list_item[1].classList.add("active");
        list_item[2].classList.remove("active");
        list_item[3].classList.remove("active");
    });

    portfolio.addEventListener("click", function () {
        home_section.style.display = "none";
        about_section.style.display = "none";
        list_item[0].classList.remove("active");
        list_item[1].classList.remove("active");
        list_item[2].classList.add("active");
        list_item[3].classList.remove("active");
    });

    contact.addEventListener("click", function () {
        home_section.style.display = "none";
        about_section.style.display = "none";
        list_item[0].classList.remove("active");
        list_item[1].classList.remove("active");
        list_item[2].classList.remove("active");
        list_item[3].classList.add("active");
    });
}

// function navClick() {

// }

// function portClick() {

// }

// function contClick() {

// }



homeClick();
// navClick();
// portClick();
// contClick();