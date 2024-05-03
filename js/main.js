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
    // USE DATA (RANDOM IMG URL) AND ADD IMG ELM WITH DATA AS THE SRC within the .gen-img div
    .then(data => {
        let imgURL = data;
        $($genImg).html(`<img class="generated-img" src="${imgURL}">`);
    })
}


//===========================================//
//            GET & STORE EMAIL
//===========================================//
const $userEmail = $('#user_email');
const $submitEmail = $('#submit_email');
const $selectElm = $('select #select_emails');

const $emailVal = $userEmail.val();

// FUCNTION -> GET EMAIL FROM USER AND STORE INTO SELECT MENU AS OPTION
function addEmail() {
// ==== DENY EMAIL IF IT EXSISTS & DISPLAY ERROR MESSAGE ====//
    //-- loop through all select options and test them
    let allowed = true;
    for (let index = 0; index < $selectElm.children().length; index++) {
        //-- if option's index value is the exact same as the email value
        if ($selectElm.children().eq(index).val() === $emailVal) {
            allowed = false;
            // break;
        }
    }

    // ==== GET EMAIL IF IT DOES NOT EXIST AND ADD TO SELECT MENU ====//
    if (allowed === true) {
        // Accept Email and make new option Tag with value and text set to Email Value
        let optionElm = document.createElement('option');
        optionElm.text(`${$emailVal}`)
        optionElm.attr('value', `${$emailVal}`)
        // Add the new emails to the end of the Select list 
        $selectElm.appendChild(optionElm);
    }

}

// ON SUBMIT BUTTON CLICK RUN ADD EMAIL
$submitEmail.on('click submit', function(){
    addEmail();
});

// VALIDATE EMAIL



