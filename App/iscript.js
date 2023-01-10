const learningcontent = document.getElementById('i-content'); // Content container where content will be replaced
const imenu = document.getElementById('i-menu'); // Menu
let stepback = document.getElementById('i-step-back'); // Previous content button
let stepbackbutton = document.getElementById('i-step-back'); // Previous content button
const nextsection = document.getElementById('i-forward'); // Next section button
const modulename = document.getElementById('i-module-name'); // Contains name of module
const sectionname = document.getElementById('i-section-name'); // Contains name of module
const section1indicator = '&nbsp;&#47;&nbsp;1 of&nbsp;' + numberofsections; // first section indicator
const section2indicator = '&nbsp;&#47;&nbsp;2 of&nbsp;' + numberofsections; // second section indicator
const section3indicator = '&nbsp;&#47;&nbsp;3 of&nbsp;' + numberofsections; // third section indicator
const section4indicator = '&nbsp;&#47;&nbsp;4 of&nbsp;' + numberofsections; // fourth section indicator
const section5indicator = '&nbsp;&#47;&nbsp;5 of&nbsp;' + numberofsections; // fifth section indicator
const section6indicator = '&nbsp;&#47;&nbsp;6 of&nbsp;' + numberofsections; // sixth section indicator
const section7indicator = '&nbsp;&#47;&nbsp;7 of&nbsp;' + numberofsections; // sixth section indicator
const section8indicator = '&nbsp;&#47;&nbsp;8 of&nbsp;' + numberofsections; // sixth section indicator
const section9indicator = '&nbsp;&#47;&nbsp;9 of&nbsp;' + numberofsections; // sixth section indicator
const section10indicator = '&nbsp;&#47;&nbsp;10 of&nbsp;' + numberofsections; // sixth section indicator

function closeImoduleFrame() {
parent.postMessage('closeimodule', '*');
};

var ov = setInterval(overFlow, 1000);
window.addEventListener('resize', overFlowRemove);
window.addEventListener('resize', overFlow);


function deactivateNext(){
var nextsection = document.getElementById('i-forward');
nextsection.classList.add('disabled-btn');
};

function overFlow(){
document.querySelectorAll('.overflow-icon').forEach(el => {
if (el.scrollHeight > el.clientHeight) {
const scrolls = document.querySelectorAll('.overflow-icon');
for (const scroll of scrolls) {scroll.classList.add('scroll');}
}
});
};
function overFlowRemove(){
const scrolls = document.querySelectorAll('.overflow-icon');
for (const scroll of scrolls) {scroll.classList.remove('scroll');}
};
function hideOverlays(){
Array.from(document.querySelectorAll('.overlay, .menuoverlay')).forEach((el) => el.classList.remove('show'));
};

// Insert Header and Footer Content
window.onload = function iStart(){
// Insert Learning Module Name
modulename.innerHTML = thismodulename + '&nbsp;&nbsp;&#47;';
// Update Section Name in Header
sectionname.innerHTML = startsection;
// Add learning menu
learningMenu();
// Check if localstorage flag exists and load revisit frame if present
if (localStorage.getItem(thismoduleshortname) === 'revisit') {
revisitFrame();}
else {
// Insert Start Content if local storage flag is not present
startFrame();}
};

function loadLastView(){
// Load last stored page from Local Storage
learningcontent.innerHTML = localStorage.getItem(thismoduleshortname+'lastview');
sectionname.innerHTML = localStorage.getItem(thismoduleshortname+'section');
document.getElementById('i-step-back').outerHTML = localStorage.getItem(thismoduleshortname+'stepback');
document.getElementById('i-forward').outerHTML = localStorage.getItem(thismoduleshortname+'nextsectionmarkup');
return false;
};
function lastView(){
// Store current page in Local Storage
localStorage.setItem(thismoduleshortname+'stepback',document.getElementById('i-step-back').outerHTML);
localStorage.setItem(thismoduleshortname+'lastview',learningcontent.innerHTML);
localStorage.setItem(thismoduleshortname+'section',sectionname.innerHTML);
localStorage.setItem(thismoduleshortname+'nextsectionmarkup',document.getElementById('i-forward').outerHTML);
return false;
};

function noTextAnimate(){
const animatedtext = document.querySelectorAll('[name="animated-text"]');
for (i = 0; i < animatedtext.length; i++) {
animatedtext[i].classList.toggle('type-text');
}
};
//
//
//****************************************************************MENU**********************************************************************************
function learningMenu(){
var newcontent =
`
<aside id="i-menu" class="menuoverlay hide animate pop"><!--Learning Menu Overlay-->
<div class="columns"><!--Columns Container-->
<div class="column quarter dark mono btn" onclick="document.getElementById('i-menu').classList.remove('show')">close</div><!--Close Button-->
<div class="column fill white overflow"><!--Section Cards Container-->
<h1>Sections in this Module</h1><!--Heading-->
<div class="row wrap"><!--First row of cards-->
<span class="card small btn light" onclick="sectionOne();hideOverlays();"><p class="mono">Section 1</p><p id="menu-section1"></p></span><!--Section-->
<span class="card small btn light" onclick="sectionTwo();hideOverlays();"><p class="mono">Section 2</p><p id="menu-section2"></p></span><!--Section-->
<span class="card small btn light" onclick="sectionThree();hideOverlays();"><p class="mono">Section 3</p><p id="menu-section3"></p></span><!--Section-->
</div><!--End First row of cards-->
<div class="row wrap"><!--Second row of cards-->
<span class="card small btn light" onclick="sectionFour();hideOverlays();"><p class="mono">Section 4</p><p id="menu-section4"></p></span><!--Section-->
<span class="card small btn light" onclick="sectionFive();hideOverlays();"><p class="mono">Section 5</p><p id="menu-section5"></p></span><!--Section-->
<span class="card small btn light"onclick="sectionSix();hideOverlays();"><p class="mono">Section 6</p><p id="menu-section6"></p></span><!--Section-->
</div><!--End Second row of cards-->
</div><!--End Section Cards Container-->
</div><!--End Columns Container-->
</aside><!--End Learning Menu Overlay-->
`
;
// insert Html
imenu.outerHTML = newcontent;
document.getElementById('menu-section1').innerHTML = section1;
document.getElementById('menu-section2').innerHTML = section2;
document.getElementById('menu-section3').innerHTML = section3;
document.getElementById('menu-section4').innerHTML = section4;
document.getElementById('menu-section5').innerHTML = section5;
document.getElementById('menu-section6').innerHTML = section6;
};
//**********************************************************************************************************************************************************
//
// ***********************************************************REVISIT******************************************************************************************
function revisitFrame(){
var newcontent =
`
<div id="revisit" class="overlay hide show animate pop">
<div class="columns"><!--Columns Container-->
<div class="column quarter light mono btn" onclick="localStorage.clear();startFrame();">restart<h2 class="mono">< Start from the beginning</h2></div><!--Close Button-->
<div class="column quarter blue mono btn" onclick="loadLastView();">continue<h2 class="mono">Continue where you left off ></h2></div><!--Close Button-->
</div><!--End Columns Container-->
</div>
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = 'Welcome Back';
};
//**********************************************************************************************************************************************************
//