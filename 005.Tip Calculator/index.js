let percentage_Tip = document.getElementById("percentageTip");
let bill_Amount = document.getElementById("billAmount");
let final_total_Amount = document.getElementById("totalAmount");
let error_Message = document.getElementById("errorMessage");
let tip_Amount = document.getElementById("tipAmount");

function calculate_Button() {
    let calculatedTip = (parseInt(percentage_Tip.value) / 100) * parseInt(bill_Amount.value);
    let tip_Amount_ = calculatedTip;
    let total_Amount = parseInt(bill_Amount.value) + calculatedTip;
    final_total_Amount.value = total_Amount;
    tip_Amount.value = tip_Amount_;
    // console.log(final_total_Amount);
    if (bill_Amount.value === "") {

        error_Message.textContent = "Please Enter a Valid Input.";
    } else if (percentage_Tip.value === "") {
        error_Message.textContent = "Please Enter a Valid Input."
    } else {
        error_Message.textContent = "";
    }


}