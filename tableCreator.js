Table = require('cli-table2');

var showTable = function () {
    this.table = new Table(
        {
            head: ['ID', 'Item Name', 'Catagory', 'Price', 'Stock Quantity'],
        }
    );
    this.displayTable = function (results) {
        this.results = results;
        for (var i = 0; i < this.results.length; i++) {
            this.table.push(
                [this.results[i].id, this.results[i].item, this.results[i].catagory, '$' + this.results[i].price, this.results[i].stock]);
        }
        console.log('\n' + this.table.toString());
    };
}
module.exports = showTable;

