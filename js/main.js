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
const $selectElm = $('#select_emails');

const $emailVal = $userEmail.val();

// GET EMAIL FROM USER AND STORE INTO SELECT MENU AS OPTION
function addEmail() {
// ==== DENY EMAIL IF IT EXSISTS & DISPLAY ERROR MESSAGE ====//
    //-- loop through all select options and test them
    for (let index = 0; index < $selectElm.option.length; index++) {
        //-- if option's index value is the exact same as the email value
        if ($selectElm.option[index].val() === $emailVal) {

        }
    }

// ==== GET EMAIL IF IT DOES NOT EXIST ADD TO SELECT MENU ====//
}

// ON SUBMIT BUTTON CLICK RUN ADD EMAIL
$submitEmail.on('click', function(){
    addEmail();
});

// VALIDATE EMAIL



