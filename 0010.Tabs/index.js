let aboutButton_ = document.getElementById("aboutButton");
let timeToVisitButton_ = document.getElementById("timeToVisitButton");
let attractionsButton_ = document.getElementById("attractionsButton");
let aboutTab_ = document.getElementById("aboutTab");
let timeToVisitTab_ = document.getElementById("timeToVisitTab");
let attractionsTab_ = document.getElementById("attractionsTab");

function about() {
    aboutTab_.classList.remove("d-none");
    timeToVisitTab_.classList.add("d-none");
    attractionsTab_.classList.add("d-none");
    aboutButton_.classList.add("selected-button")
    timeToVisitButton_.classList.remove("selected-button")
    attractionsButton_.classList.remove("selected-button")
    // timeToVisitButton_.classList.add("selected-button")
    // aboutButton_.style.backgroundColor = "white";
}
about();

function timetovisit() {
    timeToVisitTab_.classList.remove("d-none");
    aboutTab_.classList.add("d-none");
    attractionsTab_.classList.add("d-none");
    timeToVisitButton_.classList.add("selected-button")
    aboutButton_.classList.remove("selected-button")
    attractionsButton_.classList.remove("selected-button")
    // timeToVisitButton_.style.backgroundColor = "white";
}

function attract() {
    attractionsTab_.classList.remove("d-none");
    aboutTab_.classList.add("d-none");
    timeToVisitTab_.classList.add("d-none");
    attractionsButton_.classList.add("selected-button")
    aboutButton_.classList.remove("selected-button")
    timeToVisitButton_.classList.remove("selected-button")
}