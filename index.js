




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

//calculating tax.This function ensures that the tax is calculated correctly based on a fixed rate of 10%.
function calculateTax(amount) {
    return amount * 0.10;
}

//convertingToUpperCase.This function ensures that the text is converted to uppercase.
function convertToUpperCase(text) {
    return text.toUpperCase();
}

//findMaximum: This function ensures that the function correctly identifies the larger of two numbers.
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
} else {
    return num2;
}
}
//isPalindrome: This function ensures that the function correctly identifies whether a given string is a palindrome (reads the same backward as forward).
function isPalindrome(word) {
    //split the word into an array of characters, reverse it, and join it back into a string to compare with the original word.
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

//calculateDiscountedPrice: This function ensures that the discounted price is calculated correctly based on the original price and the discount percentage.
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}