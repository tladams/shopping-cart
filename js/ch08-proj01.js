
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

// first 3 rows
document.write(outputCartRow('<img src="images/105070.jpg"/>', "Portrait of Marten Soolmans", 75.0, 3));
document.write(outputCartRow('<img src="images/106060.jpg"/>', "View of Houses in Delft", 125.0, 1));
document.write(outputCartRow('<img src="images/106050.jpg"/>', "Woman Reading a Letter", 100.0, 2));

// subtotal row
document.write('<tr>');
document.write('<td>Subtotal</td>');
subtotal = calculateSubTotal([3, 1, 2], [75, 125, 100])
document.write('<td>' + subtotal.toFixed(2) + '</td>');
document.write('</tr>');

// tax row
document.write('<tr>');
document.write('<td>Tax</td>');
let tax = subtotal * calculateTax(tax_rate)
document.write('<td>' + tax.toFixed(2) + '</td>');
document.write('</tr>');

// shipping row
document.write('<tr>');
document.write('<td>Shipping</td>');
let ship = calculateShipping(shipping_threshold);
document.write('<td>' + ship.toFixed(2) + '</td>');
document.write('</tr>');

// grand total row
document.write('<tr>');
document.write('<td><strong>Grand Total</strong></td>');
grandTotal = calculateGrandTotal(subtotal, tax, ship);
document.write('<td>' + grandTotal.toFixed(2) + '</td>');
document.write('</tr>');



