let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let head = document.getElementById("heading");
head.textContent = recipeObj.title;

let img = document.getElementById("image");
img.src = recipeObj.imgSrc;

let all = document.getElementById("list");

for (let one of recipeObj.ingredients) {
    let ele = document.createElement("li");
    ele.textContent = one;
    ele.classList.add("ingredients-body");
    all.appendChild(ele);

}