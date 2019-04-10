var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table2');
var showTable = require('./tableCreator.js');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'Bamazon'
});

connection.connect(function (err) {
	if (err) {
		console.log('Error connectig to Db');
		throw err;
	}
});

