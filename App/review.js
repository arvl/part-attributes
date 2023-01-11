if (reviewmode=='true')
{
const button = document.getElementById('back-to-topic');
button.classList.remove('back', 'black');
button.classList.add('white');
button.innerHTML = 'send reviewer feedback';
button.setAttribute('onclick', 'feedbackForm();')
}

function feedbackForm(){
if(document.getElementById('reviewerfeedback')){reviewerfeedback.showModal()}

else{
const contentarea = document.getElementById('i-content');
const formarea = document.createElement('dialog');
contentarea.appendChild(formarea);
formarea.classList.add('feedback-modal');
formarea.id = 'reviewerfeedback';

const sendbutton = document.createElement('button');
formarea.appendChild(sendbutton);
sendbutton.classList.add('button', 'nav-btn', 'forward', 'light', 'feedback-button');
sendbutton.innerText = 'send feedback';
sendbutton.setAttribute('onclick','sendFeedback()');

const closebutton = document.createElement('button');
formarea.appendChild(closebutton);
closebutton.classList.add('feedback-modal-close');
closebutton.setAttribute('onclick', 'reviewerfeedback.close();')

let frame = contentarea.firstElementChild.getAttribute('name');
const framereference = document.createElement('p');
formarea.appendChild(framereference);
framereference.innerHTML = 'Frame Reference:&nbsp;' + frame;
framereference.id = 'feedbackframereference';

const feedbacktext = document.createElement('textarea');
formarea.appendChild(feedbacktext);
feedbacktext.id = 'reviewerfeedbacktext';


feedbacktext.setAttribute('placeholder','Enter your feedback');

reviewerfeedback.showModal()};
}

function sendFeedback(){ 
const project = document.getElementById('i-module-name').innerText;
const currentframe = document.getElementById('feedbackframereference');
const currentfeedback = document.getElementById('reviewerfeedbacktext');
const savedate = new Date();
const headers_ = {
'Authorization': 'Bearer keyRMAjziDIJHyhQ7',
'Content-Type': 'application/json'
};
axios.post('https://api.airtable.com/v0/appcpzVnNsxWNY3kz/Feedback-Review',
{
"fields": {
"Project": project,
"Reference": currentframe.innerText,
"Comment": currentfeedback.value,
"Date": savedate
    }
    }, {headers: headers_}
    );
    reviewerfeedback.close();
}