const input = document.querySelector("#phone");
window.intlTelInput(input, {
    initialCountry: "auto",
    preferredCountries: ["ng"],
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});
