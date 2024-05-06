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
const userEmail = document.getElementById('user_email');
const submitEmail = document.getElementById('submit_email');
const selectElm = document.getElementById('select_emails');

const emailVal = userEmail.value;

// FUCNTION -> GET EMAIL FROM USER AND STORE INTO SELECT MENU AS OPTION
function addEmail() {
// ==== DENY EMAIL IF IT EXSISTS & DISPLAY ERROR MESSAGE ====//
    let allowed = true;
    const allEmails = selectElm.children;
    // Call and iterate through each email
    for (let index = 0; index < allEmails.length; index++) {
        //-- if an email on the list is the exact same as the email input value
        if (allEmails[index].value === emailVal) {
            allowed = false;
            break;
        }
    }

    // ==== GET EMAIL IF IT DOES NOT EXIST AND ADD TO SELECT AS AN OPTION ====//
    if (allowed === true) {
        let optionElm = document.createElement('option') ;
        optionElm.textContent = emailVal;
        // optionElm.value = emailVal;
        optionElm.setAttribute(value, emailVal);

        selectElm.append(optionElm);

    }

}

// ON SUBMIT BUTTON CLICK RUN ADD EMAIL

submitEmail.addEventListener('click', (event) => {
    event.preventDefault();
    addEmail();
});


//===========================================//
//             EMAIL VALIDATION
//===========================================//



