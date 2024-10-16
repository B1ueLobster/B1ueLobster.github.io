function convertToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    const fahrenheit = parseFloat(fahrenheitInput);
    
    if (!isNaN(fahrenheit)) {
        const celsius = (5/9) * (fahrenheit - 32);
        document.getElementById('celsius').value = celsius.toFixed(2);
    } else {
        document.getElementById('celsius').value = '';
    }
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius').value;
    const celsius = parseFloat(celsiusInput);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } else {
        document.getElementById('fahrenheit').value = '';
    }
}

function validateInput(input) {
    const value = input.value;
   
    if (!/^-?\d*\.?\d*$/.test(value)) {
        input.classList.add('error');  
        input.value = ''; 
    } else {
        input.classList.remove('error'); 
    }
}
