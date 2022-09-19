
function calc() {

    console.log("clicked the calculate button");

    let amount = parseInt(document.getElementById("amount").value);

    console.log("amount: " + amount);

    let rate = parseInt(document.getElementById("rate").value);

    console.log("rate: " + rate);

    let tax = (amount * rate) / 100;

    console.log("tax: " + tax);

    let total = tax + (amount * 1);

    console.log("total: " + total);

    document.getElementById("result").innerHTML =
        "Tax: " + tax + ", Total: " + total;

}


function backendCalc(){

    console.log("begin backendCalc");

    let amount = parseInt(document.getElementById("amount").value);

    console.log("amount: " + amount);

    let rate = parseInt(document.getElementById("rate").value);

    console.log("rate: " + rate);

    let request = {};

    request.amount = amount;
    request.rate = rate;


    let jsonRequest = JSON.stringify(request);

    console.log("request");
    console.log(jsonRequest);

    send("api/calculate.php", jsonRequest);

    console.log("end backendCalc");

}

function send(url, data) {

    // Create an XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    // Define a callback function
    xhttp.onload = function () {
        console.log(this.responseText);

        let jsonResponse = JSON.parse(this.responseText);

        let tax = jsonResponse.tax;

        let total = jsonResponse.total;

        document.getElementById("result").innerHTML =
        "<p>Tax: " + tax + "</p> <p>Total: " + total+"</p>";

    }

    // Send a request
    xhttp.open("POST", url);
    xhttp.send(data);

}


function clearForm() {

    console.log("clicked the clear form button");

    //clear the result div 
    document.getElementById("result").innerHTML = "";
}