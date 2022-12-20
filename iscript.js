const thismodulename = 'Part Attributes &#47;'
const thismoduleshortname = 'partattr';
const startsection = 'Welcome';
const section1 = 'Introduction &#47; 1 of 6';
const section2 = 'Surface Treatment &#47; 2 of 6';
const section3 = 'Flame Treatment &#47; 3 of 6';
const section4 = 'Resources &#47; 4 of 6';

const learningcontent = document.getElementById('i-content'); // Content container where content will be replaced
const imenu = document.getElementById('i-menu'); // Menu
let stepback = document.getElementById('i-step-back'); // Previous content button
let stepbackbutton = document.getElementById('i-step-back'); // Previous content button
const nextsection = document.getElementById('i-forward'); // Next section button
const modulename = document.getElementById('i-module-name'); // Contains name of module
const sectionname = document.getElementById('i-section-name'); // Contains name of module

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
modulename.innerHTML = thismodulename;
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
<div class="row"><!--First row of cards-->
<span class="card btn light" onclick="sectionOne();hideOverlays();"><p class="mono">Section 1</p><p>Introduction</p></span><!--Section-->
<span class="card btn light" onclick="hideOverlays();"><p class="mono">Section 2</p><p>When</p></span><!--Section-->
<span class="card btn light" onclick="hideOverlays();"><p class="mono">Section 3</p><p>What</p></span><!--Section-->
</div><!--End First row of cards-->
<div class="row"><!--Second row of cards-->
<span class="card btn light" onclick="hideOverlays();"><p class="mono">Section 4</p><p>What if</p></span><!--Section-->
<span class="card btn light" onclick="hideOverlays();"><p class="mono">Section 5</p><p>How</p></span><!--Section-->
<span class="card btn light"onclick="hideOverlays();"><p class="mono">Section 6</p><p>Resources</p></span><!--Section-->
</div><!--End Second row of cards-->
</div><!--End Section Cards Container-->
</div><!--End Columns Container-->
</aside><!--End Learning Menu Overlay-->
`
;
// insert Html
imenu.outerHTML = newcontent;
};
//**********************************************************************************************************************************************************
//
// ***********************************************************START******************************************************************************************
function startFrame(){
var newcontent =
`
<div name="start" class="overlay hide show animate pop"><!--Start Overlay-->
<div class="columns"><!--Columns Container-->
<div class="column white overflow-icon"><!--Start Section Container-->
<h1>Welcome!</h1><!--Heading-->
<h2>Are you ready to begin?</h2><!--Heading-->
<p>In this short Module we will explore Part Attributes.</p>
<h3>The Module is split into the following sections:</h3>
<div class="row wrap"><!--First row of cards-->
<span class="card small light"><p class="mono">Section 1</p><p>Introduction</p></span><!--Section-->
<span class="card small light"><p class="mono">Section 2</p><p>When</p></span><!--Section-->
<span class="card small light"><p class="mono">Section 3</p><p>What</p></span><!--Section-->
</div><!--End First row of cards-->
<div class="row wrap"><!--Second row of cards-->
<span class="card small light"><p class="mono">Section 4</p><p>What if</p></span><!--Section-->
<span class="card small light"><p class="mono">Section 5</p><p>How</p></span><!--Section-->
<span class="card small light btn" onclick="sectionFoura()"><p class="mono">Section 6</p><p>Resources</p></span><!--Section-->
</div><!--End First row of cards-->
<p>When you have completed all sections, you can return to the Topic and complete the Quiz.</p>
</div><!--End Start Section Container-->
<div class="column quarter blue mono btn" onclick="localStorage.setItem(thismoduleshortname, 'revisit');sectionOne();">start</div><!--Close Button-->
</div><!--End Columns Container-->
</div><!--End Start Overlay-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = 'Welcome';
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
// ***********************************************************SECTION 1******************************************************************************************
function sectionOne(){
var newcontent =
`
<div name="intro1" class="slide dark"><!--Start Overlay-->
<div class="columns white animate__animated animate__slideInRight"><!--Columns Container-->
<div class="column larger light mono overflow-icon">
<h2 class="mono lower">
<span name="animated-text" class="type-text" style="--n:66">
Every part has a set of associated attributes.
</span>
</h2>
<h2 class="mono lower">
<span name="animated-text" class="type-text" style="--n:110;animation-delay:8s;">
These are added to a part to provide specific additional information relevant to the part.
</span>
</h2>
<h2 class="mono lower">
<span name="animated-text" class="type-text" style="--n:100;animation-delay:16s;">
They include information about a part's:
<br>
<br>
- Origin
<br>
- Type
<br>
- Material
<br>
- Colour
</span>
</h2>
</div><!--Close Button-->
<div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
<video autoplay playsinline muted src="Media/Attributes-intro-1.mp4"></video>
</div>
<div class="column mini blue mono btn" onclick="sectionOnea()">move forward</div><!--Close Button-->
</div><!--End Columns Container-->
</div><!--End Content-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section1; // Update with section name
stepback.setAttribute('onclick','startFrame()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 1 A ******************************************************************************************
function sectionOnea(){
var newcontent =
`
<div name="section1a" class="slide dark"><!--Start Overlay-->
<div class="columns white animate__animated animate__slideInDown"><!--Columns Container-->
<div class="column larger light mono overflow-icon">
<h2 class="mono lower"><span name="animated-text" class="type-text" style="--n:80;animation-delay:2.5s;">Attributes determine how the part fits in to the wider project.</span>
</h2>
</div><!--Close Button-->
<div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
<video autoplay playsinline muted src="Media/Attributes-intro-2.mp4"></video>
</div>
<div class="column mini blue mono btn" onclick="sectionOneb()">move forward</div><!--Close Button-->
</div><!--End Columns Container-->
</div><!--End Content-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section1; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionOne();noTextAnimate()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 1 B ******************************************************************************************
function sectionOneb(){
var newcontent =
`
<div name="section1b" class="slide dark"><!--Start Overlay-->
<div class="columns white animate__animated animate__slideInLeft"><!--Columns Container-->
<div class="column larger light mono overflow-icon">
<h2 class="mono lower">
<span name="animated-text" class="type-text" style="--n:135;animation-delay:4.5s;">
Missing or incorrect attributes could result in:
<br>
<br>
- regulatory goals missed
<br>
- performance/attribute targets
</span>
</h2>
</div><!--Close Button-->
<div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
<video autoplay playsinline muted src="Media/Attributes-intro-3.mp4"></video>
</div>
<div class="column mini blue mono btn" onclick="sectionOnec()">move forward</div><!--Close Button-->
</div><!--End Columns Container-->
</div><!--End Content-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section1; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionOnea();noTextAnimate()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 1 C ******************************************************************************************
function sectionOnec(){
var newcontent =
`
<div name="section1c" class="slide dark"><!--Start Overlay-->
<div class="columns white animate__animated animate__slideInRight"><!--Columns Container-->
<div class="column larger light mono overflow-icon">
<h2 class="mono lower">
<span name="animated-text" class="type-text" style="--n:126;animation-delay:3s;">
It is the responsibility of the design engineer to populate part attributes correctly for all new parts.
</span>
</h2>
<h2 class="mono lower">
<span name="animated-text" class="type-text" style="--n:143;animation-delay:10s;">
Your actions here can enable Arrival to operate more efficiently and avoid unnecessary questions/problems further down the line.
</span>
</h2>
</div><!--Close Button-->
<div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
<video autoplay playsinline muted src="Media/Attributes-intro-4.mp4"></video>
</div>
<div class="column mini blue mono btn" onclick="sectionOned()">move forward</div><!--Close Button-->
</div><!--End Columns Container-->
</div><!--End Content-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section1; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionOneb();noTextAnimate()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 1 D ******************************************************************************************
function sectionOned(){
  var newcontent =
  `
  <div name="section1d" class="slide dark"><!--Start Overlay-->
  <div class="columns white animate__animated animate__slideInDown"><!--Columns Container-->
  <div class="column larger light mono overflow-icon">
  <h2 class="mono lower">
  <span name="animated-text" class="type-text" style="--n:140;animation-delay:3s;">
  This training will familiarise you with the different attributes, inputting & updating... etc.
  </span>
  </h2>
  </div><!--Close Button-->
  <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
  <video autoplay playsinline muted src="Media/Attributes-intro-5.mp4"></video>
  </div>
  <div class="column mini blue mono btn" onclick="sectionOnee()">move forward</div><!--Close Button-->
  </div><!--End Columns Container-->
  </div><!--End Content-->
  `
  ;
  // insert Html
  learningcontent.innerHTML = newcontent;
  sectionname.innerHTML = section1; // Update with section name
  document.getElementById('i-step-back').setAttribute('onclick','sectionOnec();noTextAnimate()'); // Update with previous content
  lastView(); // Update local storage with current page
  };
  //**********************************************************************************************************************************************************
  //
// ***********************************************************SECTION 1 E ******************************************************************************************
function sectionOnee(){
  var newcontent =
  `
  <div name="section1e" class="slide dark"><!--Start Overlay-->
  <div class="columns white animate__animated animate__slideInRight"><!--Columns Container-->
  <div class="column larger light mono overflow-icon">
  <h2 class="mono lower">
  <span name="animated-text" class="type-text" style="--n:237;animation-delay:4.5s;">
  Each section will start with a question to check your familiarity with the topic. If you get the answer right, you will have the opportunity to skip to the next section without viewing the training material.
  </span>
  </h2>
  <h2 class="mono lower">
  <span name="animated-text" class="type-text" style="--n:165;animation-delay:18s;">
  It is crucial that you understand the topic before skipping ahead. If you're just guessing, you won't gain anything from this training!
  </span>
  </h2>
  </div><!--Close Button-->
  <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
  <video autoplay playsinline muted src="Media/Attributes-intro-6.mp4"></video>
  </div>
  <div class="column mini blue mono btn" onclick="sectionOnef()">move forward</div><!--Close Button-->
  </div><!--End Columns Container-->
  </div><!--End Content-->
  `
  ;
  // insert Html
  learningcontent.innerHTML = newcontent;
  sectionname.innerHTML = section1; // Update with section name
  document.getElementById('i-step-back').setAttribute('onclick','sectionOned();noTextAnimate()'); // Update with previous content
  lastView(); // Update local storage with current page
  };
  //**********************************************************************************************************************************************************
  //
// ***********************************************************SECTION 1 F ******************************************************************************************
function sectionOnef(){
  var newcontent =
  `
  <div name="section1f" class="slide dark"><!--Start Overlay-->
  <div class="columns white animate__animated animate__slideInRight"><!--Columns Container-->
  <div class="column larger light mono overflow-icon">
  <h2 class="mono lower">
  <span name="animated-text" class="type-text" style="--n:137;animation-delay:3.5s;">
  If you are returning to the training, or simply need to use it as a reference, you may access different sections from the menu.
  </span>
  </h2>
  </div><!--Close Button-->
  <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
  <video autoplay playsinline muted src="Media/Attributes-intro-7.mp4"></video>
  </div>
  <div class="column mini blue mono btn" onclick="sectionOneEnd()">move forward</div><!--Close Button-->
  </div><!--End Columns Container-->
  </div><!--End Content-->
  `
  ;
  // insert Html
  learningcontent.innerHTML = newcontent;
  sectionname.innerHTML = section1; // Update with section name
  document.getElementById('i-step-back').setAttribute('onclick','sectionOne();noTextAnimate()'); // Update with previous content
  lastView(); // Update local storage with current page
  };
  //**********************************************************************************************************************************************************
  //

// ***********************************************************SECTION 1 END ******************************************************************************************
function sectionOneEnd(){
var newcontent =
`
<div name="section1end" class="slide dark">
<div class="columns success animate__animated animate__slideInUp"><!--Columns Container-->
<div class="column"><!--Start Section Container-->
<h2 class="mono">That's it for the Introduction. Let's get started!</h2><!--Heading-->
<p class="mono">select next section to continue.</p>
</div><!--End Start Section -->
</div><!--End Columns Container-->
</div>
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section1; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionOnef();noTextAnimate()'); // Update with previous content
document.getElementById('i-forward').classList.remove('disabled-btn');
document.getElementById('i-forward').setAttribute('onclick', 'sectionTwoa()');
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 2 A ******************************************************************************************
function sectionTwoa(){
var newcontent =
`
<div name="section2a" class="slide light"><!--Start Overlay-->
<div id="slide1" class="columns white animate__animated animate__slideInDown"><!--Columns Container-->
<div class="column overflow-icon"><!--Start Section Container-->
<h1>Next Stage</h1><!--Heading-->
<h2>\ Surface Treatment</h2><!--Heading-->
<p>In the previous section we collected our equipment and learnt what the equipment will be used for.</p>
<p>Now it's time to prepare for Flame Treatment.</p>
<p>You must carry out a thorough visual inspection of the panels to check that there are no defects in the bond areas that will affect the bonding operation. For example, wrinkles in the bond areas, or regions where dry fibres are visible</p>
<p>If the visual inspection does not highlight any defects, we can continue to prepare the composite panel. It is important that the composite panel is correctly treated prior to beginning the Flame Treatment process.</p>
<h3>Move forward and we will explore the surface treatment of the composite panel.</h3>
</div>
<div class="column third blue mono btn" onclick="sectionTwob();">move forward</div><!--Close Button-->
</div><!--End Columns Container-->
</div><!--End Slide Overlay-->
<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section2; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionOnec()'); // Update with previous content
deactivateNext(); //De-activate next section button
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 2 B ******************************************************************************************
function sectionTwob(){
var newcontent =
`
<div name="section2b" class="slide light"><!--Learning Content Container-->
<div class="columns drag animate__animated animate__slideInLeft"><!--Columns Container-->
<div class="column third light"><!--Left (Desktop) Column Container-->
<h2>Select the first process to carry out:</h2>
<div class="row"><!--First row of cards-->
<span class="card small black btn" onclick="this.style.backgroundColor = 'var(--error)';document.getElementById('incorrect').classList.remove('hide');document.getElementById('normal').classList.add('hide');;document.getElementById('correct').classList.add('hide')"><!--Card-->
<p class="mono">Wipe & Cleanse with IPA alcohol</p><!--Card mono title-->
</span><!--End Card-->
</div><!--End first row-->
<div class="row"><!--Second Row-->
<span class="card small black btn" onclick="this.style.backgroundColor = 'var(--success)';document.getElementById('correct').classList.remove('hide');document.getElementById('normal').classList.add('hide');document.getElementById('incorrect').classList.add('hide')"><!--Card-->
<p class="mono">Remove dust & debris from the panel surface</p><!--Card mono title-->
</span><!--End Card-->
</div><!--End second row-->
</div><!--End Left (Desktop) Column Container-->

<div id="normal" class="column fill dark mono"><!--Right (Desktop) Column Container-->
</div><!--End Right (Desktop) Column Container-->

<div id="incorrect" class="column fill error mono hide"><!--Right (Desktop) Column Container-->
<h2 class="mono">An important step</h2>
<h2 class="mono">but it's not the first</h2>
<br>
<h2 class="mono">try again</h2>
</div><!--End Right (Desktop) Column Container-->

<div id="correct" class="column fill success mono hide btn" onclick="sectionTwoc()"><!--Right (Desktop) Column Container-->
move forward
<h2 class="mono">That's right</h2>
<h2 class="mono">Let's remove the dust & debris--></h2>
</div><!--End Right (Desktop) Column Container-->


</div><!--End Columns Container-->
</div><!--End Learning Content Container-->

<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section2; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionTwoa()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 2 C ******************************************************************************************
function sectionTwoc(){
var newcontent =
`
<div name="section2c" class="container"><!--Learning Content Container-->
<div class="columns animate__animated animate__slideInUp"><!--Columns Container-->

<div id="normal" class="column fill white mono overflow"><!--Right (Desktop) Column Container-->
<video id="remove-dust" playsinline muted src="Media/flame-treatment-brush-panel.mp4"></video>
</div><!--End Right (Desktop) Column Container-->

<button id="play" class="button media-action btn invisible" onclick="document.getElementById('remove-dust').currentTime = '0';document.getElementById('remove-dust').play()"></button><!--re play button-->

<div id="start-dust" class="column quarter blue btn" onclick="startDust()"><!--Left (Desktop) Column Container-->
<p id="start-text" class="mono">start</p>
<br>
<h2 id="process-text" class="mono">Remove Dust & Debris</h2>
</div><!--End Left (Desktop) Column Container-->

<div id="dust-continue" class="column quarter success btn hide" onclick="sectionTwod()"><!--Success move forward button container-->
<p class="mono">move forward</p>
<br>
<h2 class="mono">Dust & debris removed</h2>
</div><!--End move forward button container-->

</div><!--End Columns Container-->
</div><!--End Learning Content Container-->

<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section2; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionTwob()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 2 C REMOVE DUST VIDEO******************************************************************************************
// Section 2c remove dust video
function startDust(){
var dustVideo = document.getElementById('remove-dust');
var dustContinue = document.getElementById('dust-continue');
var startDust = document.getElementById('start-dust');
var startText = document.getElementById('start-text');
var processText = document.getElementById('process-text');
var restart = document.getElementById('play');
dustVideo.play();
startDust.classList.remove('btn');
startDust.classList.add('blue-light');
startText.innerHTML = '&nbsp;';
processText.innerHTML = 'removing dust with soft brush';
dustVideo.addEventListener('ended', function () {
dustVideo.currentTime = 9.5;
restart.classList.remove('invisible');
startDust.classList.add('hide');
dustContinue.classList.remove('hide')
}, false);
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 2 D ******************************************************************************************
function sectionTwod(){
var newcontent =
`
<div name="section2d" class="slide light animate__animated animate__slideInLeft"><!--Start Overlay-->
<div id="section1slide1" class="columns light"><!--Columns Container-->
<div class="column white overflow-icon"><!--Start Section Container-->
<h1>Great!</h1><!--Heading-->
<h2>Dust & debris removed.</h2><!--Heading-->
<div class="row"><!--First row of cards-->
<span name="brush" class="card small black"><!--Card-->
<p class="mono">Soft Brush</p><!--Card mono title-->
</span><!--End Card-->
</div><!--End first row-->
<p>You selected the Soft Brush in Section 1. The soft brush is used to remove larger particles of dust and debris from the composite panel and is the first stage of our surface treatment.</p>
<h3>Move forward to begin stage 2.</h3>
</div>
<div class="column third cyan-light mono btn" onclick="sectionTwoe()">move forward
</div><!--Close Button-->
</div><!--End Columns Container-->


</div><!--End Columns Container-->
</div><!--End Learning Content Container-->

<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section2; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionTwoc()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 2 E ******************************************************************************************
function sectionTwoe(){
var newcontent =
`
<div name="section2e" class="container"><!--Learning Content Container-->
<div class="columns animate__animated animate__slideInUp"><!--Columns Container-->

<div id="normal" class="column fill white mono overflow"><!--Right (Desktop) Column Container-->
<video id="clean-panel" playsinline muted src="Media/Flame-treatment-clean-panel-edit.mp4"></video>
</div><!--End Right (Desktop) Column Container-->

<button id="play" class="button media-action btn invisible" onclick="document.getElementById('clean-panel').currentTime = '0';document.getElementById('clean-panel').play();"></button><!--re play button-->

<div id="start-clean" class="column quarter btn blue" onclick="startCleanse()"><!--Left (Desktop) Column Container-->
<p id="start-text" class="mono">start</p>
<br>
<h2 id="process-text" class="mono">Cleanse & Wipe</h2>
</div><!--End Left (Desktop) Column Container-->

<div id="clean-continue" class="column quarter success btn hide" onclick="sectionTwof()"><!--Success move forward button container-->
<p class="mono">move forward</p>
<br>
<h2 class="mono">cleanse complete</h2>
</div><!--End move forward button container-->


</div><!--End Columns Container-->
</div><!--End Learning Content Container-->

<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section2; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionTwod()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 2 E CLEANSE PANEL VIDEO******************************************************************************************
// Section 2e cleanse video
function startCleanse(){
var cleanseVideo = document.getElementById('clean-panel');
var cleanContinue = document.getElementById('clean-continue');
var startClean = document.getElementById('start-clean');
var startText = document.getElementById('start-text');
var processText = document.getElementById('process-text');
var restart = document.getElementById('play');
cleanseVideo.play();
startClean.classList.remove('btn');
startClean.classList.add('blue-light');
startText.innerHTML = '&nbsp;';
processText.innerHTML = 'cleaning panel';
cleanseVideo.addEventListener('ended', function () {
cleanseVideo.currentTime = 11;
restart.classList.remove('invisible');
startClean.classList.add('hide');
cleanContinue.classList.remove('hide')
}, false);
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 2 F ******************************************************************************************
function sectionTwof(){
var newcontent =
`
<div name="section2f" class="slide light animate__animated animate__slideInUp"><!--Start Overlay-->
<div id="section2fslide1" class="columns lightp"><!--Columns Container-->
<div class="column white overflow-icon"><!--Left Column Container-->
<h1>Great!</h1><!--Heading-->
<h2>The panel is cleansed and prepared.</h2><!--Heading-->
<div class="row"><!--First row of cards-->
<span name="cloth" class="card small black"><!--Card-->
<p class="mono">Lint-free cloth</p><!--Card mono title-->
</span><!--End Card-->
<span name="alcohol" class="card small black"><!--Card-->
<p class="mono">IPA alcohol</p><!--Card mono title-->
</span><!--End Card-->
</div><!--End first row-->
<div class="admonition caution">
<div class="title"></div>
<h3>Important:</h3>
<p>You must wait 5 minutes afters cleansing the composite panel with the IPA alcohol. This ensures that the solvent is fully flashed off.</p>
</div>
<p>The lint-free cloth and IPA alcohol is used to cleanse the panel prior to Flame Treatment to ensure that all contaminants are removed. Ensure that you use the correct high purity (>95%), high concentration industrial IPA Alcohol.</p>
<h3>Let's move forward.</h3>
</div><!--End Left Column Container-->
<div class="column third cyan-dark mono btn" onclick="sectionTwoEnd()">move forward</div><!--Move forward - right column-->
</div><!--End Columns Container-->
</div><!--End Learning Content Container-->

<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section2; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionTwoe()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 2 END ******************************************************************************************
function sectionTwoEnd(){
var newcontent =
`
<div name="section2end" class="slide light"><!--Start Overlay-->
<div id="section2end" class="columns success animate__animated animate__slideInDown"><!--Columns Container-->
<div class="column"><!--Start Section Container-->
<h2 class="mono">That's it for this section.</h2><!--Heading-->
<p class="mono">select next section to continue.</p>
</div><!--End Start Section -->
</div><!--End Columns Container-->

</div><!--End Learning Content Container-->

<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section2; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionTwof()'); // Update with previous content
document.getElementById('i-forward').classList.remove('disabled-btn');
document.getElementById('i-forward').setAttribute('onclick', 'sectionThreea()');
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 3 A ******************************************************************************************
function sectionThreea(){
var newcontent =
`
<div name="section3a" class="slide purple-light animate__animated animate__slideInLeft"><!--Start Overlay-->
<div id="slide1" class="columns white"><!--Columns Container-->
<div class="column overflow-icon"><!--Start Section Container-->
<h1>Next Stage</h1><!--Heading-->
<h2>\ Flame Treatment</h2><!--Heading-->
<p>In the previous section we treated the surface of our composite panel ready for Flame Treatment.</p>
<p>Now it's time to carry out the Flame Treatment process.</p>
<br>
<h3>Move forward to begin.</h3>
</div>
<div class="column third blue mono btn" onclick="sectionThreeb();">move forward</div><!--Close Button-->
</div><!--End Columns Container-->
</div><!--End Slide Overlay-->
<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section3; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionTwof()'); // Update with previous content
deactivateNext(); // De-activate Next Section Button
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 3 B ******************************************************************************************
function sectionThreeb(){
var newcontent =
`
<div name="section3b" class="slide purple-light"><!--Start Overlay-->
<div id="slide1" class="columns fill light animate__animated animate__slideInRight"><!--Columns Container-->
<div id="flame-content" class="column half fixed overflow-icon"><!--Blow torch container-->
<h1 id="flame-h1">Ready to begin?</h1>
<h2 id="flame-h2">Let's ignite our burner.</h2>
<img id="flame" src="Media/flame1.png">
<img id="torch" src="Media/Propane torch.png"/>
</div><!--End Blow torch container-->
<div id="ignite-flame" class="column quarter fixed blue mono btn" onclick="igniteFlame()"><h2 class="mono">--> Ignite</h2></div><!--Ignite Button-->
<span id="range">0</span>
<div id="adjust-flame" class="column quarter fixed dark mono hide"><!--Adjust flame container-->
<div id="flame-correct" class="row fifty hide btn blue" onclick="sectionThreec()"><!--Row - Move forward when correct button-->
move forward
</div><!--End Row - Move forward when correct button-->
<div id="flame-not-correct" class="row fifty"><!--Row - Move forward placeholder when incorrect-->
&nbsp;
</div><!--End Row - move forward placeholder when incorrect-->
<div class="row fifty"><!--Row - Flame slider row-->
<div class="flame-range">
<h2 class="mono">flame&nbsp;</h2>
<input id="valR" type="range" min="1" max="12" value="1" step="1" oninput="showVal(this.value)" onchange="showVal(this.value)" />
</div>
</div><!--End Row - Flame slider row-->
</div><!--End Adjust flame container-->

</div><!--End Columns Container-->

</div><!--End Content-->

<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section3; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionThreea()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 3 B FLAME ADJUST ******************************************************************************************
// Section 3b Flame
function igniteFlame(){
document.getElementById('flame').style.opacity = '1';// Show flame
document.getElementById('adjust-flame').classList.remove('hide');// Show adjust flame section
document.getElementById('ignite-flame').classList.add('hide');// Hide ignite flame section
document.getElementById('flame-h1').innerHTML = 'Is the flame correct?';// Update text
document.getElementById('flame-h2').innerHTML = 'Adjust the flame';// Update text
}
function showVal(newVal){
var path = 'Media/';
var val = document.getElementById("valR").value;
document.getElementById("range").innerHTML=val;
document.getElementById("flame").src = path + val + ".png";
document.getElementById("range").innerHTML=newVal;
document.getElementById("flame").src = path + newVal + ".png";
// If slider is above 11...
if(val > 11){document.getElementById('flame-content').classList.add('success');
document.getElementById('flame').classList.add('flame-complete');
document.getElementById('flame-not-correct').classList.add('hide');
document.getElementById('flame-correct').classList.remove('hide');
document.getElementById('adjust-flame').classList.add('blue');
document.getElementById('flame-h1').innerHTML = 'Great!';
document.getElementById('flame-h2').innerHTML = 'The flame is set.';
}
// If slider is below 11...
if(val < 11){document.getElementById('flame-content').classList.remove('success');
document.getElementById('flame').classList.remove('flame-complete');
document.getElementById('flame-not-correct').classList.remove('hide');
document.getElementById('flame-correct').classList.add('hide');
document.getElementById('adjust-flame').classList.remove('blue');
document.getElementById('flame-h1').innerHTML = 'Is the flame correct?';
document.getElementById('flame-h2').innerHTML = 'Adjust the flame';
}
}
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 3 C ******************************************************************************************
function sectionThreec(){
var newcontent =
`
<div name="section3c" class="slide purple-light"><!--Start Overlay-->
<div class="columns white animate__animated animate__slideInRight"><!--Columns Container-->
<div name="scroll" class="column fill caution-color"><!--Start Section Container-->
<h2 id="caution-title" class="mono">caution</h2><!--Heading-->
<h2 class="mono">Shield any sensitive areas from the flame</h2><!--Heading-->
<p class="mono">E.g. electronics</p>
</div>
<div class="column quarter purple-dark mono btn" onclick="sectionThreed()">move forward</div><!--Close Button-->
</div><!--End Columns Container-->

</div><!--End Content-->

<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section3; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionThreeb()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 3 D ******************************************************************************************
function sectionThreed(){
var newcontent =
`
<div id="section3d" name="section3d" class="slide purple-light"><!--Start Overlay-->
<div id="move" class="columns white animate__animated animate__slideInRight"><!--Columns Container-->
<div name="scroll" class="column fill light"><!--Start Section Container-->
<div style="width:100%;height:100%;position:relative;">
<h1>Let's get started!</h1>
<div id="bad">
<div id="good">
<div id="close"></div>
<img name="composite-panel" id="panel" src="Media/panel-flat.svg">
</div>
</div>
<img id="torch-with-flame" src="Media/torch-with-flame.svg">
</div>
</div>
<div id="move-burner" class="column third dark mono"><h2 class="mono">Move the flame to the panel</h2></div><!--Close Button-->
<div id="move-forward" class="column third success mono btn hide" onclick="document.getElementById('move').classList.add('hide');document.getElementById('flame-important').classList.remove('hide');">move forward
<br>
<br>
<h2 class="mono">Great!</h2>
</div><!--Close Button-->
</div><!--End Columns Container-->

<div id="flame-important" class="columns white animate__animated animate__slideInRight hide"><!--Columns Container-->
<div id="caution-distance" name="scroll" class="column fill caution-color"><!--Start Section Container-->
<h2 id="caution-title" class="mono">caution</h2><!--Heading-->
<h2 class="mono">The distance of the flame from the panel is critical. The blue part of the flame should just touch the panel.</h2><!--Heading-->
</div>
<div class="column quarter purple-dark mono btn" onclick="document.getElementById('flame-important').classList.add('hide');document.getElementById('test-run').classList.remove('hide');">move forward</div><!--Close Button-->
</div><!--End Columns Container-->

<div id="test-run" class="columns white animate__animated animate__slideInDown hide"><!--Columns Container-->
<div name="scroll" class="column fill black"><!--Start Section Container-->
<h2 class="mono">You must test your speed and distance on a non-critical area of the panel before proceeding to flame treat the bond path.</h2><!--Heading-->
</div>
<div class="column mini blue mono btn" onclick="sectionThreee()">move forward</div><!--Close Button-->
</div><!--End Columns Container-->

</div><!--End Content-->
<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section3; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionThreec()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 3 D INTERACTION DRAG TORCH ******************************************************************************************
//Section 3 move flame to panel
$("body").on('DOMSubtreeModified', "#i-content", function() {
if($('#section3d').length){
//defines object as being draggable
$("#torch-with-flame").draggable();
$( "#bad" ).droppable({
  tolerance: "touch"
});
$("#bad").droppable({
//defines what to do when object is dropped
over: function(event, ui) {
// add hover color to dropzone
$("#move-burner").addClass('caution-color');
$("#move-burner").html('<h2 class=\"mono\">the tip of the flame should be on the surface of the panel.<br><br>Approx. 3 inches away.</h2>');
},
out: function(event, ui) {
//remove class when object moves outside dropzone
$("#move-burner").removeClass('caution-color');
$("#move-burner").html('<h2 class=\"mono\">Move the flame to the panel</h2>');
}
});
$( "#panel" ).droppable({
  tolerance: "touch"
});
$("#panel").droppable({
//defines what to do when object is dropped
over: function(event, ui) {
// add hover color to dropzone
$("#move-burner").removeClass('caution-color');
$("#move-burner").addClass('hide');
$("#move-forward").removeClass('hide');
},
out: function(event, ui) {
//remove class when object moves outside dropzone
$("#move-burner").removeClass('success');
$("#move-burner").removeClass('hide');
$("#move-burner").addClass('caution-color');
$("#move-forward").addClass('hide');
}
});
$( "#close" ).droppable({
  tolerance: "touch"
});
$("#close").droppable({
//defines what to do when object is dropped
over: function(event, ui) {
// add hover color to dropzone
$("#move-burner").removeClass('success');
$("#move-burner").removeClass('hide');
$("#move-burner").addClass('error');
$("#move-burner").html('<h2 class=\"mono\">too close!</h2>');
$("#move-forward").addClass('hide');
},
out: function(event, ui) {
//remove class when object moves outside dropzone
$("#move-burner").removeClass('error');
$("#move-burner").html('<h2 class=\"mono\">the tip of the flame should be on the surface of the panel.<br><br>Approx. 3 inches away.</h2>');
$("#move-burner").addClass('hide');
$("#move-burner").addClass('success');
$("#move-forward").removeClass('hide');
}
});
}
});
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 3 E ******************************************************************************************
function sectionThreee(){
var newcontent =
`
<div name="section3e" class="container"><!--Learning Content Container-->
<div id="treatment" class="columns animate__animated animate__slideInUp" onclick="startFlametreat()"><!--Columns Container-->

<div id="normal" class="column fill white mono overflow"><!--Right Video Column Container-->
<video id="flame-treat" playsinline muted src="Media/flame-treatment-torch.mp4"></video>
</div><!--End Right Video Column Container-->

<button id="play" class="button media-action btn invisible" onclick="document.getElementById('flame-treat').play();"></button><!--re play button-->

<div id="start-treatment" class="column quarter blue btn"><!--Start treatment button Container-->
<p id="start-text" class="mono">start</p>
<br>
<h2 id="process-text" class="mono">flame treat the panel</h2>
</div><!--End Start treatment button Container-->

<div id="treatment-continue" class="column quarter success btn hide" onclick="document.getElementById('treatment').classList.add('hide');document.getElementById('flame-once').classList.remove('hide');"><!--Success move forward button container-->
<p class="mono">move forward</p>
<br>
<h2 class="mono">flame treatment complete</h2>
</div><!--End move forward button container-->

</div><!--End Columns Container-->

<div id="flame-once" class="columns white animate__animated animate__slideInRight hide"><!--Columns Container-->
<div name="scroll" class="column fill caution-color"><!--Start Section Container-->
<h2 id="caution-title" class="mono">caution</h2><!--Heading-->
<h2 class="mono">you can only apply flame treatment to an area once. If an error is made, the part must be recycled. Treated areas must not be touched and must be assembled within 24 hours.</h2><!--Heading-->
</div>
<div class="column quarter purple-dark mono btn" onclick="sectionThreef()">move forward</div><!--Close Button-->
</div><!--End Columns Container-->

</div><!--End Learning Content Container-->

<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section3; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionThreed()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 3 E FLAME TREAT PANEL VIDEO ******************************************************************************************
// Section 3e flametreat video
function startFlametreat(){
var flameVideo = document.getElementById('flame-treat');
var treatmentContinue = document.getElementById('treatment-continue');
var startTreatment = document.getElementById('start-treatment');
var startText = document.getElementById('start-text');
var processText = document.getElementById('process-text');
var restart = document.getElementById('play');
flameVideo.play();
startTreatment.classList.remove('btn');
startTreatment.classList.add('blue-light');
startText.innerHTML = '&nbsp;';
processText.innerHTML = 'approx. 50cm per second';
flameVideo.addEventListener('ended', function () {
flameVideo.currentTime = 0;
restart.classList.remove('invisible');
startTreatment.classList.add('hide');
treatmentContinue.classList.remove('hide')
}, false);
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 3 F ******************************************************************************************
function sectionThreef(){
var newcontent =
`
<div name="section3f" class="slide light"><!--Start Overlay-->
<div id="section3fslide1" class="columns light animate__animated animate__slideInRight"><!--Columns Container-->
<div class="column light overflow-icon"><!--Start Section Container-->
<h1>That's it!</h1><!--Heading-->
<h2>\ Flame Treatment</h2><!--Heading-->
<p>You have now been through the Flame Treatment process.</p>
<br>
<h3>Key things that you should remember:</h3>
<ul>
<li>Ensure you have all equipment before beginning the task</li>
<li>Equipment must be in serviceable condition</li>
<li>You must have enough supplies to complete the task e.g. propane, IPA alcohol, etc.</li>
<li>Inspect the composite panel prior to beginning the surface treatment</li>
<li>Thoroughly cleanse and wipe down the composite panel</li>
<li>Always wait 5 minutes for the IPA alcohol to flash off before starting Flame Treatment</li>
<li>Set the flame on the burner to a blue flame</li>
<li>The tip of the burner must be approximately 3 inches from the panel or so the tip of the blue flame makes contact with the surface of the panel</li>
<li>Pass the flame over the panel at approxiamtely 50cm per second</li>
<li>Practice speed and distance control on a non-critical area of the panel before attempting to treat the bond paths.</li>
<li>Pass the flame over the panel at approximately 50cm per second</li>
<li>A bond path can only be treated once, if an error is made, the part can no longer be used. Take care!</li>
</ul>
<p>You can find additional useful resources on the Arrival Wiki. Links to these resources are also provided in this Module.</p>
<h3>You can move forward to visit the resources.</h3>
</div>
<div class="column third purple-dark mono btn" onclick="sectionThreeEnd();">move forward</div><!--Close Button-->
</div><!--End Columns Container-->

</div><!--End Slide Overlay-->

<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section3; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionThreee()'); // Update with previous content
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 3 END ******************************************************************************************
function sectionThreeEnd(){
var newcontent =
`
<div name="section3end" class="slide light"><!--Start Overlay-->
<div id="section3end" class="columns success animate__animated animate__slideInDown"><!--Columns Container-->
<div class="column"><!--Start Section Container-->
<h2 class="mono">That's it for this section.</h2><!--Heading-->
<p class="mono">continue to the resources or return to the topic to complete the quiz.</p>
</div><!--End Start Section -->
</div><!--End Columns Container-->

</div><!--End Learning Content Container-->

<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section3; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionThreef()'); // Update with previous content
document.getElementById('i-forward').classList.remove('disabled-btn');
document.getElementById('i-forward').setAttribute('onclick', 'sectionFoura()');
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 4 A ******************************************************************************************
function sectionFoura(){
var newcontent =
`
<div name="section3e" class="container"><!--Learning Content Container-->
<div class="columns animate__animated animate__slideInLeft"><!--Columns Container-->
<div class="column third light"><!--Start resources Container-->
<h2 class="mono">resources</h2>
<div class="row"><!--First row of cards-->
<span id="vid-btn" class="card small black btn" onclick="toggleFlamevideo()"><!--Card-->
<p class="mono">Flame Treatment Video</p><!--Card mono title-->
</span><!--End Card-->
</div><!--End first row-->

<div class="row"><!--Second row of cards-->
<span id="st25-btn" class="card small black btn" onclick="this.classList.add('blue-light');window.open('https://wiki.arrival.com/display/VEHICLEPLATFORMS/ARVL+ST-25+Surface+Treatment+of+PPGF+for+Sikaflex+Adhesive+Bonding')"><!--Card-->
<p class="mono">wiki link - ARVL ST-25 Surface Treatment of PPGF</p><!--Card mono title-->
</span><!--End Card-->
<span class="card small black btn" onclick="this.classList.add('blue-light');window.open('https://wiki.arrival.com/display/public/VEHICLEPLATFORMS/ARVL+ST-6+Flame+Treatment+of+Composites');"><!--Card-->
<p class="mono">wiki link - ARVL ST-6 Flame Treatment of Composites</p><!--Card mono title-->
</span><!--End Card-->
</div><!--End second row-->

</div><!--End resources Container-->

<div id="arvl-flame-treat" class="column fill white mono overflow hide"><!--Right Video Column Container-->
<video autoplay playsinline muted src="Media/arvl-flame-treat.mp4"></video>
</div><!--End Right Video Column Container-->

</div><!--End Columns Container-->
</div><!--End Learning Content Container-->

<!--LEARNING CONTENT END-->
`
;
// insert Html
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section4; // Update with section name
document.getElementById('i-step-back').setAttribute('onclick','sectionThreeEnd()'); // Update with previous content
deactivateNext(); // De-activate next section Button
lastView(); // Update local storage with current page
};
//**********************************************************************************************************************************************************
//
// ***********************************************************SECTION 4 A FLAME VIDEO ******************************************************************************************
function toggleFlamevideo() {
var video = document.getElementById("arvl-flame-treat");
var videobutton = document.getElementById("vid-btn");
if (video.classList.contains('hide')) {
video.classList.remove('hide');
videobutton.classList.add('blue-light');
} else {
video.classList.add('hide');
videobutton.classList.remove('blue-light');
}
}
//**********************************************************************************************************************************************************
//
