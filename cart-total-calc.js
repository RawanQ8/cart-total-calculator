function calculateSubtotals (items) {
    items.map((item) => {
        item.subtotal = item.price * item.quantity
    })
    return items
}

function calculateDiscount(subtotal, discountPercent){
    return (subtotal * discountPercent) / 100
}

function calculateTax(amountAfterDiscount, taxPercent){
    return (amountAfterDiscount * taxPercent) / 100
}

function createCartSummary(items, discountPercent, taxPercent) {
    let summaries = []
    calculateSubtotals(items)

    items.map((item) => {
        const subtotal = item.subtotal
        const discountAmount = calculateDiscount(subtotal, discountPercent)
        const taxAmount = calculateTax((subtotal - discountAmount), taxPercent)

        summaries.push( {
        subtotal: subtotal,
        discount: discountAmount,
        tax: taxAmount,
        total: subtotal - discountAmount + taxAmount
        })
    })

    return summaries
    
}

const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];

//const updatedItems = calculateSubtotals(cartItems)

console.log(createCartSummary(cartItems, 10, 5))


const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];

console.log(createCartSummary(singleItemCart, 0, 10));