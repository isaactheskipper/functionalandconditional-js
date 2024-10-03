function checkBookingEligibility(age, hasPassport, isFlightAvailable) {
    if (age >= 18 && age <= 70 && hasPassport && isFlightAvailable) {
        return "Booking successful";
    } else {
        return "Booking failed";
    }
}

// Example usage with different conditions
console.log(checkBookingEligibility(true, true));    
console.log(checkBookingEligibility(17, true, true));    
console.log(checkBookingEligibility(45, false, true));   
console.log(checkBookingEligibility(68, true, true));  
console.log(checkBookingEligibility(71, true, true));   
