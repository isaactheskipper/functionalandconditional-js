function checkAccess(age) {
    if (age === null || age === undefined) {
        return "Invalid age";
    } else if (age < 18) {
        return "Access denied. You are too young.";
    } else if (age >= 18 && age < 65) {
        return "Access granted";
    } else if (age >= 65) {
        return "Access denied. You are too old.";
    }
}

// Test cases
console.log(checkAccess(15));   // Output: Access denied. You are too young.
console.log(checkAccess(20));   // Output: Access granted
console.log(checkAccess(70));   // Output: Access denied. You are too old.
console.log(checkAccess(null)); // Output: Invalid age
console.log(checkAccess());     // Output: Invalid age
