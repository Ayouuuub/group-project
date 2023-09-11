const contactBtn = document.getElementsByClassName('contact-btn');
const contactForm = document.getElementsByClassName('contact-form');
const sendBtn = document.getElementsByClassName('message-btn');
const message = document.getElementsByClassName('send-message');

//display the contact form to be filled
function generateForm() {
    contactBtn[0].addEventListener("click", () => {
        // contactForm[0].style.opacity = 1;
        contactForm[0].style.display = 'block';

    })
}
generateForm();

//display the message sent successfully
function sendMessage() {
    sendBtn[0].addEventListener("click", () => {
        
        message[0].style.display = 'block';
    })
        
}
sendMessage();