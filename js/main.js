//===========================================//
//                 GET IMAGE 
//===========================================//
let url;
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
            url = imgURL
        })
    }


//===========================================//
//      GET & STORE EMAIL IN SELECT MENU
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
                alert('Sorry this email already exsists');
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

    //==============================================//
    //  VALIDATE & ADD EMAIL ON SUBMIT BUTTON CLICK
    //==============================================//

    submitEmail.addEventListener('click', (event) => {
        event.preventDefault();

        const emailVal = userEmail.value;

        //if email is valid run add email function
        if (validateEmail(emailVal)) {
            addEmail();
        } else {
            alert('Please enter a valid email')
        }

    });

    function validateEmail(emailVal) {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(emailVal).toLowerCase());
    }





//===========================================//
//     ADD IMAGE TO A EMAIL COLLECTION
//===========================================//
let imgToEmailArr = [];// Empty array to store images associated with emails
// let currentImageUrl = ''; // This will be set when a new image is generated

    //on add to Collection click add img to email collection (storeImage function)
    const imgToCollection = document.getElementById('addToCollection');

    imgToCollection.addEventListener('click', () => {
        storeImage();
    });

    function storeImage() {
        const selectedOption = selectElm.options[selectElm.selectedIndex];
        const selectedEmail = selectedOption.value;
   
        

            // Check if the image has already been added for the selected email
            if (!imgToEmailArr.some(item => item.email === selectedEmail && item.Imgurl === url)) {

                //Users email and img object
                const imgEmail = {
                    email: selectedEmail,
                    Imgurl: url
                };
                imgToEmailArr.push(imgEmail);
                displayCollection(selectedEmail);

            } else {
                alert('This image is already added to this collection')
            }

    }

    // Function to display the collection of images for the selected email
    function displayCollection(email) {
        const emailTitle = document.querySelector('.emailTitle');
        const imgCollection = document.querySelector('.collectImgs');

            emailTitle.innerHTML = "";
            imgCollection.innerHTML = "";

        imgToEmailArr
            .filter(item => item.email === email)
            .forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'imgdiv';

                const image = document.createElement('img');
                image.src = item.imgURL;

                const button = document.createElement('button');
                button.className = 'btn';
                button.textContent = 'Delete Image';
                button.onclick = () => deleteImage(email, index);

                div.appendChild(image);
                div.appendChild(button);
                imgCollection.appendChild(div);
            });
    }

    // Function to delete an image from the collection
    function deleteImage(email, index) {
        imgToEmailArr = imgToEmailArr.filter((img, idx) => !(img.email === email && idx === index));
        displayCollection(email);
    }