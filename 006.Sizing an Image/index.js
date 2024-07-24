let imageElement = document.getElementById("image");
let image_Width = document.getElementById("imageWidth");
let warning_Message = document.getElementById("warningMessage");
let originalImageWidth = "200px";
let image_ = document.getElementById("image");
image_Width.textContent = originalImageWidth;
imageElement.style.width = originalImageWidth;
let inc = 200;

function incrementButton() {
    inc = inc + 5;
    if (inc > 300) {
        warning_Message.textContent = "Too big.Decrease the size of the Image."
    } else {
        warning_Message.textContent = "";
    }
    image_Width.textContent = inc + "px";
    image_.style.width = inc + "px";

}

function decrementButton() {

    inc = inc - 5;
    if (inc < 100) {
        warning_Message.textContent = "Can't Visible. Increase the size of the Image."
    } else {
        warning_Message.textContent = "";
    }
    image_Width.textContent = inc + "px";
    image_.style.width = inc + "px";
    console.log(inc + "px");
}