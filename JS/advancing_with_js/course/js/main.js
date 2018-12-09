var shoppingList = [

	{"desc" : "rice", "amount" : "1", "value" : "6.55"},
	
	{"desc" : "fish", "amount" : "1", "value" : "20.99"},
	
	{"desc" : "soda", "amount" : "4", "value" : "2.55"},
	
    {"desc" : "beer", "amount" : "12", "value" : "1.99"}
];

function getTotal(shoppingList)
{
	var total = 0;

	for (const key in shoppingList) {
		total += (shoppingList[key].value * shoppingList[key].amount);
	}
	
	document.getElementById('totalValue').innerHTML = formatedValue(total);
}

function setList(shoppingList)
{
	var table = '<thead>'
	+ '<tr>'
		+ '<th>Desc</th>'
		+ '<th>Amount</th>'
		+ '<th>Price</th>'
		+ '<th>Action</th>'
	+ '</tr>'
	+ '</thead>'
	+ '<tbody>';

	for (const key in shoppingList) {
		table += '<tr>'
			+ '<td>'
				+ formatedDescription(shoppingList[key].desc)
			+ '</td>'
			+ '<td>'
				+ formatedAmount(shoppingList[key].amount)
			+ '</td>'
			+ '<td>'
				+ formatedValue(shoppingList[key].value)
			+ '</td>'
			+ '<td>'
				+ '<button class="btn btn-default" onclick="setUpdate('+ key +')">Edit</button>'+ ' <button class="btn btn-danger" onclick="deleteData('+ key +')">Delete</button>'
			+ '</td>';
	}

	table += '</tbody>';

	document.getElementById('tableShoppingList').innerHTML = table;
	getTotal(shoppingList);
	saveShoppingListStorage(shoppingList);
}

function formatedDescription(desc)
{
	var formatedDesc = desc.toLowerCase();
	formatedDesc = formatedDesc.charAt(0).toUpperCase() + formatedDesc.slice(1);
	return formatedDesc;
}

function formatedValue(value)
{
	var formatedValue = parseFloat(value).toFixed(2) + "";
	formatedValue = "$ " + formatedValue.replace('.',',');
	return formatedValue;
}

function formatedAmount(amount)
{
	return parseInt(amount);
}

function addData()
{
	if (!validate()) {
		return;
	}
	var description = document.getElementById('desc').value;
	var amount = document.getElementById('amount').value;
	var value = document.getElementById('value').value;

	shoppingList.unshift({"desc": description, "amount": amount, "value": value});

	resetForm();

	setList(shoppingList);
}

function setUpdate(itemId)
{
	var item = shoppingList[itemId];
	document.getElementById('desc').value = formatedDescription(item.desc);
	document.getElementById('amount').value = item.amount;
	document.getElementById('value').value = item.value;
	document.getElementById('btnUpdate').style.display = 'inline-block';
	document.getElementById('btnAdd').style.display = 'none';
	document.getElementById('idUpdate').value = itemId;
}

function resetForm()
{
	document.getElementById('desc').value = "";
	document.getElementById('amount').value = "";
	document.getElementById('value').value = "";
	document.getElementById('btnUpdate').style.display = 'none';
	document.getElementById('btnAdd').style.display = 'inline-block';
	document.getElementById('errors').style.display = 'none';
}

function updateData()
{
	if (!validate()) {
		return;
	}

	var itemId = document.getElementById('idUpdate').value;
	var desc = document.getElementById('desc').value;
	var amount = document.getElementById('amount').value;
	var price = document.getElementById('value').value;

	shoppingList[itemId] = {'desc': desc, 'amount': amount, 'value': price};

	resetForm();
	setList(shoppingList);
}

function deleteData(itemId)
{
	if (confirm('Are you sure you delete this?')) {
		shoppingList.splice(itemId, 1);
		setList(shoppingList);	
	}
}

function validate()
{
	var desc = document.getElementById('desc').value;
	var amount = document.getElementById('amount').value;
	var value = document.getElementById('value').value;
	var errors = '';

	//Desc validation
	if (desc === "") {
		errors += '<p> Fill out description.</p>';
	}

	//Amount validation
	if (amount === "") {
		errors += '<p> Fill out amount.</p>';
	} else if(amount != parseInt(amount)) {
		errors += '<p> Type a valid number for amount.</p>';
	}

	//Price validation
	if (value === "") {
		errors += '<p> Fill out price.</p>';
	} else if(value != parseFloat(value)) {
		errors += '<p> Type a valid number for price.</p>';
	}

	if (errors !== '') {
		document.getElementById('errors').innerHTML = '<h3>Errors:</h3>' + errors;
		document.getElementById('errors').style.display = 'block';
		document.getElementById('errors').style.background = '#f9ddd2';
		document.getElementById('errors').style.color = '#e21313';
		document.getElementById('errors').style.padding = '20px';
		document.getElementById('errors').style.margin = '22px';
		document.getElementById('errors').style.borderRadius = '20px';
		return false;
	}

	return true;
}

function deleteShoppingList()
{
	if (confirm('Are you sure you want to delete the whole list?')) {
		shoppingList = [];
		setList(shoppingList);
	}
}

function saveShoppingListStorage(shoppingList)
{
	var list = JSON.stringify(shoppingList);
	localStorage.setItem("shoppingList",list);
}

function initShoppingListStorage()
{
	var listStorage = localStorage.getItem("shoppingList");

	if (listStorage) {
		shoppingList = JSON.parse(listStorage);
	}

	setList(shoppingList);
}

initShoppingListStorage();