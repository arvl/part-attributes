if (reviewmode=='true') // If config.js has reviewmode set to 'true' we will re-use the 'back to topic' button as a reviewer button
{
const button = document.getElementById('back-to-topic'); // Get the back to topic button
button.classList.remove('back', 'black', 'black-contrast'); // Remove some classes
button.classList.add('white'); // Add a class to change style
button.innerHTML = 'send reviewer feedback'; // Change the button text
button.setAttribute('onclick', 'startReview();')
}

function startReview(){ // Function that is triggered when button is clicked
const reviewername = localStorage.getItem('ReviewerName'); // Get the Reviewer Name from local storage if it exists

if ("ReviewerName" in localStorage){feedbackForm(reviewername)} // If name exists in local storage move to feedback form function and pass 'reviewername' into function

else{ // If reviewer name does not exist in localstorgae
const button = document.getElementById('back-to-topic'); // Get the back to topic button
button.insertAdjacentHTML('afterend','<dialog id="modalfeedbackname" class="modal-feedback-name"><textarea placeholder="enter your name" id="reviewername"></textarea><button class="button nav-btn forward modal-feedback-name-button" onclick="storeReviewerName(this.previousElementSibling.value);">Start Feedback</button></dialog>'); // Add some html after the button to create a dialog with name text field and button
modalfeedbackname.showModal(); // Show the dialog element we just created
};
}

function storeReviewerName(val){ // Store reviewername in localstorage so he only enters once 'val' is passed from previous function'
const namefield = document.getElementById('reviewername'); // This is the textarea we added in the previous function
const namevalue = namefield.value; // Get the value 'user input' of the textfield

if (namefield.value !== ''){localStorage.setItem("ReviewerName", namevalue);modalfeedbackname.close();feedbackForm(val)}; // If textarea is NOT empty, set local storage, close dialog and move to next function and pass 'val'
}

function feedbackForm(val){ // 'val' is passed from localstorage or from the textarea input in startReview function

if(document.getElementById('reviewerfeedback')){reviewerfeedback.showModal();getScreenDimensions()} // If html element already exists in DOM show the dialog element and start screendimension function

else{ // If html element does not exist in DOM e.g first click of button
const contentarea = document.getElementById('i-content'); // Get the contetn area
const formarea = document.createElement('dialog'); // Create a dialog element
contentarea.appendChild(formarea); // Append the dialog element we created to the content area
formarea.classList.add('feedback-modal'); // Add some styling to the dialog element
formarea.id = 'reviewerfeedback'; // Add an id to the dialog element

const sendbutton = document.createElement('button'); // Create a button to submit our feedback
formarea.appendChild(sendbutton); // Append our button to the dialog element
sendbutton.classList.add('button', 'nav-btn', 'forward', 'feedback-button'); // Style the button
sendbutton.innerText = 'send feedback'; // Add text to the button
sendbutton.setAttribute('onclick','sendFeedback()'); // Add onclick function to the button

const closebutton = document.createElement('button'); // Create a button to close our dialog
formarea.appendChild(closebutton); // Append our button to the dialog element
closebutton.classList.add('feedback-modal-close'); // Style the button
closebutton.setAttribute('onclick', 'reviewerfeedback.close();stop();') // Add onclick function to the button to close the dialog and stop screenwidth function

let frame = contentarea.firstElementChild.getAttribute('name'); // Get the first element inside the content area which is the dynamically updated content
const framereference = document.createElement('p'); // Create a Paragragh element
formarea.appendChild(framereference); // Append our paragraph to the dialog element
framereference.innerHTML = 'Frame Reference:&nbsp;' + frame; // Get the name of the dynamic content and add to our paragragh
framereference.id = 'feedbackframereference'; // Add an id to the paragraph

const reviewername = document.createElement('textarea'); // Create a text area for reviewername
formarea.appendChild(reviewername); // Append to the dialog element
reviewername.id = 'enteredreviewername'; // Set id of text area
reviewername.setAttribute('readonly',''); // Set it to read only as name is updated from local storage or entered value previously and is passed to this function
reviewername.value = val; // Update value of textarea with the value passed to this function

const feedbacktext = document.createElement('textarea'); // Create a text area for the feedback
formarea.appendChild(feedbacktext);  // Append to the dialog element
feedbacktext.id = 'reviewerfeedbacktext'; // Set id of text area
feedbacktext.setAttribute('placeholder','Enter your feedback'); // Add some placeholder text to the text area

const currentscreenwidth = document.createElement('p'); // Create a text area for the feedback
formarea.appendChild(currentscreenwidth);  // Append to the dialog element
currentscreenwidth.id = 'screenwidth'; // Set id of text area
currentscreenwidth.classList.add('no-show'); // Add some placeholder text to the text area

const currentscreenheight = document.createElement('p'); // Create a text area for the feedback
var h = window.innerHeight;
formarea.appendChild(currentscreenheight);  // Append to the dialog element
currentscreenheight.id = 'screenheight'; // Set id of text area
currentscreenheight.classList.add('no-show'); // Add some placeholder text to the text area

getScreenDimensions();
reviewerfeedback.showModal()}; // Show the dialog element and all child elements we have created
}

var intervalID; // Variable for interval
function getScreenDimensions(){ // Function to get screendimensions for debugging user problems
intervalID = setInterval(
function screenSize(){
var w = window.innerWidth; // Screen width
var h = window.innerHeight; // Screen height
if(document.getElementById('screenwidth')) // If element exists in DOM
{document.getElementById('screenwidth').innerText = w;document.getElementById('screenheight').innerText = h} // Update with values
},3000); // Every 3 seconds
};
function stop(){
clearInterval(intervalID); // Stop calculating screen width when feedback dialog closed
}

function sendFeedback(){  // Send feedback to Airtable
const project = document.getElementById('i-module-name').innerText; // Get the name of the Topic/Module/Project
const currentframe = document.getElementById('feedbackframereference'); // Get the name of the current frame to give feedback on
const currentreviewer = document.getElementById('enteredreviewername'); // Get the name of the reviewer
const currentfeedback = document.getElementById('reviewerfeedbacktext'); // Get the feedback
const userscreenwidth = document.getElementById('screenwidth');
const userscreenheight = document.getElementById('screenheight');
const savedate = new Date(); // Create date
const headers_ = {
'Authorization': 'Bearer patCR1qHWIrHBqkfW.40ee20b719cec3a3c384f2df8c760a4040200da351d7a2973aa3bf87132c6293',
'Content-Type': 'application/json'
};
axios.post('https://api.airtable.com/v0/appcpzVnNsxWNY3kz/Feedback-Review', // Airtable base
{
"fields": { // Airtable columns
"Project": project, 
"Reference": currentframe.innerText,
"ReviewerName":currentreviewer.value,
"Comment": currentfeedback.value,
"DeviceScreenWidth": userscreenwidth.innerHTML + 'x' + userscreenheight.innerHTML,
"Date": savedate
    }
    }, {headers: headers_}
    );
    const button = document.getElementById('back-to-topic'); // Get the back to topic button
    button.classList.add('success'); // Add success color to button after sending feedback
    currentfeedback.value = ''; // Clear the feedback textarea
    reviewerfeedback.close(); // Close dialog element after sending feedback
    window.setTimeout(removeSuccess,2000); // remove success color after a period of time
}

function removeSuccess(){ // Function to remove success color so we can reset if after some time
const button = document.getElementById('back-to-topic'); // Get the back to topic button
button.classList.remove('success'); // Remove success color to button after sending feedback
}