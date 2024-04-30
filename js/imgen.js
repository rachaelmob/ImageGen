
$(document).ready(function() {

    //Function for fetching images from Unsplash API
    function splashImgs() {
        // Use AJAX or Fetch API to fetch images from Unsplash
        // Display fetched images on the webpage
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

