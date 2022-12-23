// variables
var reset = $(".reset");
var input = $("input");
var tip;
var options = $(".choice");
var bill = $("#bill").val();
var numOfPeople = $("input[type='text'][name='people']").val();

// extract info from webpage
yeet

// functions employing extracted info
function tipCalc(bill, tip, numOfPeople) {
    // tipCalc will calculate the total tip amount, 
    // divide it by the total number of people,
    // then return the tip amount per person.

    var tipVal = (tip / 100) * bill;
    var tipPerPerson = tipVal / numOfPeople;
    
    return tipPerPerson;
}

var tips = tipCalc(bill, tip, numOfPeople);

function totalCalc(bill, numOfPeople) {
    // totalCalc will calculate the total bill (including tips),
    // divide it by the total number of people,
    // then return the bill per person.
    
    var totalPerPerson = (bill / numOfPeople) + tips;
    
    return totalPerPerson;
}

var total = totalCalc(bill, tip, numOfPeople);