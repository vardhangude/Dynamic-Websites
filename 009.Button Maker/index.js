let bgColorInput_ = document.getElementById("bgColorInput");
let fontColorInput_ = document.getElementById("fontColorInput");
let fontSizeInput_ = document.getElementById("fontSizeInput");
let fontWeightInput_ = document.getElementById("fontWeightInput");
let paddingInput_ = document.getElementById("paddingInput");
let borderRadiusInput_ = document.getElementById("borderRadiusInput");
let customButton_ = document.getElementById("customButton");

function applyButton_() {
    let bgColorInputValue = bgColorInput_.value;
    let fontColorInputValue = fontColorInput_.value;
    let fontSizeInputValue = fontSizeInput_.value;
    let fontWeightInputValue = fontWeightInput_.value;
    let paddingInputValue = paddingInput_.value;
    let borderRadiusInputValue = borderRadiusInput_.value;
    customButton_.style.backgroundColor = bgColorInputValue;
    customButton_.style.color = fontColorInputValue;
    customButton_.style.fontSize = fontSizeInputValue;
    customButton_.style.fontWeight = fontWeightInputValue;
    customButton_.style.padding = paddingInputValue;
    customButton_.style.borderRadius = borderRadiusInputValue;

}