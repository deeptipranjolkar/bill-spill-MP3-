const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const numberOfMembersInput = document.getElementById("numberOfMembers");
const generateBillButton = document.getElementById("generateBill");
const resetButton = document.getElementById("resetButton");
const resultsContainer = document.getElementById("r-container");

billAmountInput.addEventListener("input", checkInputs);
tipPercentageInput.addEventListener("change", checkInputs);
numberOfMembersInput.addEventListener("input", checkInputs);
generateBillButton.addEventListener("click", generateBill);
resetButton.addEventListener("click", resetForm);

function checkInputs() {

    if (billAmountInput.value !== "" && tipPercentageInput.value !== "" && numberOfMembersInput.value !== "") {

        generateBillButton.disabled = false;
    } else {

        generateBillButton.disabled = true;
    }
}

function generateBill() {

    const billAmount = Number(billAmountInput.value);
    const tipPercentage = Number(tipPercentageInput.value);
    const numberOfMembers = Number(numberOfMembersInput.value);


    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    const totalPerPerson = totalAmount / numberOfMembers;


    resultsContainer.innerHTML = `
		<h2>Results</h2>
		<table>
			<tr>
				<th>Bill Amount</th>
				<td>₹${billAmount.toFixed(2)}</td>
			</tr>
			<tr>
				<th>Tip Amount (${tipPercentage}%)</th>
				<td>₹${tipAmount.toFixed(2)}</td>
			</tr>
			<tr>
				<th>Total Amount</th>
				<td>₹${totalAmount.toFixed(2)}</td>
			</tr>
			<tr>
				<th>Total per Person (${numberOfMembers} persons)</th>
				<td>₹${totalPerPerson.toFixed(2)}</td>
			</tr>
		</table>
	`;


    resultsContainer.style.display = "block";


    generateBillButton.disabled = true;
    resetButton.disabled = false;
}

function resetForm() {

    billAmountInput.value = "";
    tipPercentageInput.value = "";
    numberOfMembersInput.value = "";


    resultsContainer.style.display = "none";


    resetButton.disabled = true;
    generateBillButton.disabled = true;
}