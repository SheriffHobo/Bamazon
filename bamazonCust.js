var mysql = require('mysql');
var Table = require('cli-table2');
var inquirer = require('inquirer');
var showTable = require('./tableCreator.js');

// Connect to the DB
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'bamazon'
});

// If connection fails, log error
connection.connect(function (err) {
	if (err) {
		console.log('Error connecting to DB');
		throw err;
	}
});

// Displays table
var displayForUser = function () {
	var display = new showTable();
	connection.query('SELECT * FROM products', function (err, results) {
		display.displayTable(results);
		purchaseItem();
	});
}

// Asks user for item and quantity
var purchaseItem = function () {
	console.log('\n');
	inquirer.prompt([{
		name: "id",
		type: "input",
		message: "Enter the ID of the item you would like to purchase.",

	}, {
		name: "quantity",
		type: "input",
		message: "How many woukd you like to purchase?",

		// Pings DB for item details
	}]).then(function (answer) {
		connection.query('SELECT item, catagory, price, stock FROM products WHERE ?', {
			id: answer.id
		}, function (err, res) {
			console.log('\nYou\'ve selected ' + answer.quantity + ' ' + res[0].item + ' ' + res[0].catagory + ' at $' + res[0].price + ' each');

			// purchasePrompt(); or something to present more questions. Refer to line 98
			// If YES, continue with ourchase flow

			if (res[0].stock >= answer.quantity) {
				//If enough inventory to complete order, process order by updating database inventory and notifying customer that order is complete. 
				var itemQuantity = res[0].stock - answer.quantity;
				connection.query("UPDATE products SET ? WHERE ?", [{
						stock: itemQuantity
					},
					{
						id: answer.id
					}
				], function (err, res) {});
				var cost = res[0].price * answer.quantity;
				// Order complete
				console.log('\nOrder complete. Your total is $' + cost.toFixed(2) + '\n');
				customerPrompt();
			} else {
				// Order incomplete
				console.log('\nSorry, not enough inventory for fulfill your order.\n');
				customerPrompt();
			}
		})
	});
};

// Asks user if they are ready to begin a purchase
var customerPrompt = function () {
	inquirer.prompt({
		name: "action",
		type: "list",
		message: "Are you ready to start shopping?\n",
		choices: ["Yes", "No"]
	}).then(function (answer) {
		switch (answer.action) {
			case 'Yes':
				displayForUser();
				break;

			case 'No':
				connection.end();
				break;
		}
	})
};

var purchasePrompt = function () {
	inquirer.prompt({
		name: "action",
		type: "list",
		message: "Is this the correct order?\n",
		choices: ["Yes", "No"]
	}).then(function (answer) {
		switch (answer.action) {
			case 'Yes':
				// Continue with purchase flow
				break;

			case 'No':
				purchaseItem(); 
				break;
		}
	})
};

// Starts app
customerPrompt();
