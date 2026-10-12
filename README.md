# Cart Total Calculator

A simple JavaScript utility for calculating the subtotal of each item in a shopping cart.

This project is based on the roadmap challenge: https://roadmap.sh/projects/js-cart-total-calculator

## What it does

The script includes one helper function:

- `calculateSubtotals(items)` adds a `subtotal` property (`price * quantity`) to each item in the cart.

## Example

```js
const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];

calculateSubtotals(cartItems);
console.log(cartItems);
// [
//   { name: 'Notebook', price: 10, quantity: 2, subtotal: 20 },
//   { name: 'Pen', price: 2, quantity: 5, subtotal: 10 },
//   { name: 'Bag', price: 30, quantity: 1, subtotal: 30 }
// ]
```

## File

- `cart-total-calc.js` - Contains the subtotal calculation function and sample cart items.

## Usage

Copy the function from `cart-total-calc.js` into your JavaScript project or run it in a Node.js environment:

```bash
node cart-total-calc.js
```
