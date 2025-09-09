let totalBox = document.getElementById("checkBoxWithLabelContainer");


function onCheckboxStatusChange() {
    createLabel.classList.toggle("strike");
}


let createInput = document.createElement("input");
createInput.type = "checkbox";
createInput.id = "checkbox";

createInput.onclick = function() {
    onCheckboxStatusChange();
};


totalBox.appendChild(createInput);


let createLabel = document.createElement("label");
createLabel.classList.add("checkbox-label")
createLabel.textContent = "I am a label";
createLabel.id = "checkboxLabel";
createLabel.htmlFor = "checkbox";
totalBox.appendChild(createLabel);

