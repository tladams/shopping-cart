/* define your functions here */

function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartRow(filename, item, price, quantity) {
    document.write('<tr>');
    document.write('<td>' + filename + '</td>');
    document.write('<td>' + item + '</td>');
    document.write('<td>' + quantity + '</td>');
    document.write('<td>' + price.toFixed(2) + '</td>');
    document.write('<td>' + calculateTotal(quantity, price).toFixed(2) + '</td>');    
}

function calculateSubTotal(quanities, amounts) {
    let subtotal = 0;
    subtotal += quanities[0] * amounts[0];
    subtotal += quanities[1] * amounts[1];
    subtotal += quanities[2] * amounts[2];
    return subtotal;

}

function calculateGrandTotal(subtotal, shipping, tax) {
    let grandTotal = subtotal + shipping + tax;
    return grandTotal;
}

function calculateTax(tax) {
    return tax;
}

function calculateShipping(subtotal, ship_thresh) {
    let shipping = 40;
    if(subtotal > ship_thresh) {
        shipping = 0;
    }
    return shipping;
}







        
