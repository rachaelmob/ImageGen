
$(document).ready(function() {

    let clientID = 'WAr4fQyV6XWOxWyhJfLVrgEePUlkBleA1jt_uEvtdvo';
    let unsplashAuth = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

    let $imgElm = $('#unsplash-img');
    let $imgCreator = $('#img-creator');

    //Function for fetching images from Unsplash API
    function splashImgs() {
        // Use Fetch API to fetch images from Unsplash
        fetch(unsplashAuth)
            .then(function (response) {
                return response.json();
            })
            // Display fetched images and creator on the webpage
            .then(function (jsonData) {
                $imgElm.src = jsonData.urls.regular;
                $imgCreator.innerText = jsonData.user.name;
                $imgCreator.setAttribute("href", jsonData.user.portfolio_url);
            });
    }

  // Listen for submission of email
    $('#emailSubmit').submit(function(event) {
    event.preventDefault();
    const userEmail = $('#user_email').val();
    // Validate email address
    if (!isValidEmail(userEmail)) {
        alert('Please enter a valid email address');
        return;
    }
    // Assign image to the email address

    // Update the images-container class to display assigned images

    });

    // Function to validate email address
    function isValidEmail(email) {
        // Use regex or built-in email validation methods
        // return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
    }

});

