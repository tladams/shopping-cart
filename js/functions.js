/* define your functions here */


const itemInfo = ([
    {
          product: {
                title,
                filename,
                price
          },
          quantity
    }      
]) => {
    itemInfo.map(cart);
};

function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartRow(item, total) {
    document.write('<tr>');
    document.write('<td>' + itemInfo.filename + '</td>');
    document.write('<td>' + item + '</td>');
    document.write('<td>' + itemInfo.quantity + '</td>');
    document.write('<td>"$' + total.toFixed(2)  + '</td>');
    document.write('<td>' + calculateTotal(itemInfo.quantity, itemInfo.price).toFixed(2) + '</td>');    
}

function calculateSubTotal(amounts) {
    let subtotal = 0;
    for(let i in amounts) {
        subtotal += i;
    }
    return subtotal;
}

function calculateGrandTotal(subtotal, tax, ship_thresh) {
    let shipping = calculateShipping(subtotal, ship_thresh);
    let grand_total = subtotal + tax + shipping;
    return grand_total;
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







        
