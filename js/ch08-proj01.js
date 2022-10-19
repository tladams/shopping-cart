
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

// first 3 rows
document.write(outputCartRow("Portrait of Marten Soolmans", 75.0));
document.write(outputCartRow("View of Houses in Delft", 125.0));
document.write(outputCartRow("Woman Reading a Letter", 100.0));

// subtotal row
document.write('<tr>');
document.write('<td>Subtotal</td>');
subtotal = calculateSubTotal([75, 125, 100])
document.write('<td>' + subtotal + '</td>');
document.write('</tr>');

// tax row
document.write('<tr>');
document.write('<td>Tax</td>');
document.write('<td>' + calculateTax(tax_rate) + '</td>');
document.write('</tr>');

// shipping row
document.write('<tr>');
document.write('<td>Shipping</td>');
document.write('<td>' + calculateShipping(shipping_threshold)+ '</td>');
document.write('</tr>');

// grand total row
document.write('<tr>');
document.write('<td><strong>Grand Total</strong></td>');
grandTotal = calculateGrandTotal(subtotal, tax_rate, shipping_threshold);
document.write('<td>' + '<strong>grandTotal</strong>' + '</td>');
document.write('</tr>');



