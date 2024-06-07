const form = document.querySelector('form'); // Select the form element

// Add submit event listener to the form
form.addEventListener('submit', (e) => { 
    e.preventDefault(); // Prevent default form submission

    // Extract height and weight values from input fields
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    // Select the element to display the result
    const result = document.querySelector('#result');

     // Check if height or weight is invalid
     if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid input for height!`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid input for weight!`;
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>BMI = ${bmi}</span>`; // Display BMI result
    }
});