// Function to calculate the velocity at time t
function calculateVelocity(initialVelocity, acceleration, time) {
    // Using the formula v(t) = v₀ + at
    const velocity = initialVelocity + (acceleration * time);
    return velocity;
}

// Example of calling the function
console.log(calculateVelocity(5, 2, 3));   // Outputs: 11
console.log(calculateVelocity(0, 10, 5));  // Outputs: 50
console.log(calculateVelocity(20, -3, 4)); // Outputs: 8
console.log(calculateVelocity(15, 1, 10)); // Outputs: 25
