let cartItemTextInputEl = document.getElementById("cartItemTextInput");
let cartTtemsContainerEl = document.getElementById("cartItemsContainer");


function onAddCartTtem() {
    let cartItemText = cartItemTextInputEl.value;
    
    let cartItemEl = document.createElement("li");
    cartItemEl.textContent = cartItemText;
    
    cartItemTextInputEl.value = "";
    cartTtemsContainerEl.appendChild(cartItemEl);
}