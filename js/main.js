let $genImg = $('.gen-img');
const $genBtn = $('.gen-btn');
const $getEmail = $('#user_email');
const $submitEmail = $('#submit_email');

$(document).ready(function() {


});


// Fetch Picsum  Function And Apply Img to SRC
function fetchRandomPic() {
 fetch('https://picsum.photos/200/300')
    .then(response => {
        if (response.ok) {
            console.log('FETCH ACCEPTED')
        } else {
            console.log('FETCH DENIED')
        }
        response.json()
    })
    .then(data => console.log(data))






}

// Get Email from user 

// Validate Email 

// Store Email locally inside drop menu 
