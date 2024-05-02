//===========================================//
//                 GET IMAGE 
//===========================================//
let $genImg = $('.gen-img');
const $genBtn = $('#getRandom');

// RANDOM PIC WHEN PAGE LOADS
$(document).ready(function() {
    fetchRandomPic();
});
// RANDOM PIC ON GENERATOR BUTTON CLICK
$genBtn.on('click', function(){
    fetchRandomPic();
});

//FUNCTION FECTH PICSUM & ADD TO HTML 
function fetchRandomPic() {
 fetch('https://picsum.photos/400/300')
    .then(response => {
        if (response.ok) {
            console.log('FETCH ACCEPTED')
        } else {
            console.log('FETCH DENIED')
        }
        // RETURN RANDOM IMG URL
        return response.url;
    })
    // USE DATA (RANDOM IMG URL) AND ADD IMG ELM WITH DATA AS THE SRC
    .then(data => {
        let imgURL = data;
        $($genImg).html(`<img class="generated-img" src="${imgURL}">`);
    })
}


//===========================================//
//                 EMAIL FORMS
//===========================================//
const $getEmail = $('#user_email');
const $submitEmail = $('#submit_email');

// VALIDATE EMAIL

// GET EMAIL FROM USER AND STORE INTO SELECT MENU

