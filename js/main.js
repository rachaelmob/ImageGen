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

// FUCNTION -> GET EMAIL FROM USER AND STORE INTO SELECT MENU AS OPTION
function addEmail() {
// ==== DENY EMAIL IF IT EXSISTS & DISPLAY ERROR MESSAGE ====//
    let allowed = true;
    const emailVal = userEmail.value;
    const allEmails = selectElm.options;
    // Call and iterate through each email
    for (let index = 0; index < allEmails.length; index++) {
        //-- if email exsists do not add 
        if (allEmails[index].value === emailVal) {
            allowed = false;
            break;
        }
    }

    // ==== GET EMAIL IF IT DOES NOT EXIST AND ADD TO SELECT AS AN OPTION ====//
    if (allowed === true) {
        let optionElm = document.createElement('option') ;
        optionElm.textContent = emailVal;
        optionElm.value = emailVal;
        selectElm.appendChild(optionElm);
    }

}

// ON SUBMIT BUTTON CLICK RUN ADD EMAIL

submitEmail.addEventListener('click', (event) => {
    addEmail();
});


//===========================================//
//             EMAIL VALIDATION
//===========================================//

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
  

//===========================================//
//     ADD IMAGE TO A EMAIL COLLECTION
//===========================================//
const emailsArr = [];
