// Way 3 of Exporting to 3-Import.js with type: module in Package.json:
const product = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};
export { product, divide };
// Note: Mostly Used
