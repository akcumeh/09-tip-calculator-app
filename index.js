// variables, values extracted from webpage
const billInput = $("#bill");
const tipRadioButtons = $("input[type=radio][name=radio]");
const customTipInput = $("#custom");
const peopleInput = $("#people");
const tipResult = $(".tip-val");
const totalResult = $(".total-val");
const resetButton = $(".reset");
const tableDataWidths = $("td").width();

// when reset button is clicked, reset the calc. function for resetting calc is activated
resetButton.on("click", resetCalculator);
// dynamically change the results everytime values are entered
// no need for enter key press, function auto-activates on input
billInput.on("input", updateCalculator);
customTipInput.on("input", function() {
    if (customTipInput.val() !== "") {
        tipRadioButtons.prop("checked", false);
    }
    updateCalculator();
});
customTipInput.on("input", updateCalculator);
peopleInput.on("input", updateCalculator);
tipRadioButtons.on("click", updateCalculator);


function resetCalculator() {
    // input: none
    // output: none
    // desc: reset the calculator whenever the reset button on the site is clicked

    billInput.val("");
    peopleInput.val("");
    tipRadioButtons.prop("checked", false);
    customTipInput.val("");
    tipResult.text("$0.00");
    totalResult.text("$0.00");
    resetButton.addClass("inactive");
    billInput.removeClass("error");
}


function updateCalculator() {
    // input: none
    // output: none
    // desc: take values extracted from webpage,

    // Step 1 - enable the reset button immediately
    resetButton.removeClass("inactive");

    //Step 2 - convert all extracted values to numbers (floats)
    const bill = parseFloat(billInput.val());
    const customTip = parseFloat(customTipInput.val());
    const tipPercent = customTip || parseFloat($("input[type=radio][name=radio]:checked").val()); // "||" represents "or", so this chooses the first true value in the statement. numbers are always true so this is pretty smart!
    const numPeople = parseInt(peopleInput.val());

    // Step 3 - error testing and handling
    if (isNaN(bill)) {
        // if bill is not a number, reset the calculator and highlight error
        billInput.addClass("error");
        tipResult.text("");
        totalResult.text("");
        resetButton.removeClass("inactive");
        return;
    } else {
        billInput.removeClass("error");
    }

    if (numPeople <= 0) {
        // if numPeople is not 1 or more, reset and highlight error
        peopleInput.addClass("error");
        tipResult.text("");
        totalResult.text("");
        resetButton.removeClass("inactive");
        return;
    } else {
        peopleInput.removeClass("error");
    }

    // Step 4 - now the actual calculation
    const tipAmount = bill * (tipPercent / 100);
    const totalAmount = bill + tipAmount;
    const tipPerPerson = tipAmount / numPeople;
    const totalPerPerson = totalAmount / numPeople;

    // Step 5 - update the results on webpage with the calculated values
    tipResult.text(`$${tipPerPerson.toFixed(2)}`);
    totalResult.text(`$${totalPerPerson.toFixed(2)}`);

    // Step 6 - Error fixes:
    // 01 - fix error where NaN shows when other values are entered before tip
    
}