function calculateAverageScore(scores) {
    if (scores.length === 0) {
        return 0;
    }

    const sum = scores.reduce(function(accumulator, currentScore) {
        return accumulator + currentScore;
    }, 0);

    return sum / scores.length;
}

// Example of calling the function
console.log(calculateAverageScore([80, 90, 70, 60]));   // Outputs: 75
console.log(calculateAverageScore([100, 90, 95]));      // Outputs: 95
console.log(calculateAverageScore([50, 50, 50, 50, 50])); // Outputs: 50
console.log(calculateAverageScore([]));                 // Outputs: 0
