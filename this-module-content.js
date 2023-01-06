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
    <span class="card small light"><p class="mono">Section 1</p><p id="start-section1"></p></span><!--Section-->
    <span class="card small light"><p class="mono">Section 2</p><p id="start-section2"></p></span><!--Section-->
    <span class="card small light"><p class="mono">Section 3</p><p id="start-section3"></p></span><!--Section-->
    </div><!--End First row of cards-->
    <div class="row wrap"><!--Second row of cards-->
    <span class="card small light"><p class="mono">Section 4</p><p id="start-section4"></p></span><!--Section-->
    <span class="card small light"><p class="mono">Section 5</p><p id="start-section5"></p></span><!--Section-->
    <span class="card small light"><p class="mono">Section 6</p><p id="start-section6"></p></span><!--Section-->
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
    document.getElementById('start-section1').innerHTML = section1;
    document.getElementById('start-section2').innerHTML = section2;
    document.getElementById('start-section3').innerHTML = section3;
    document.getElementById('start-section4').innerHTML = section4;
    document.getElementById('start-section5').innerHTML = section5;
    document.getElementById('start-section6').innerHTML = section6;
    };
    //**********************************************************************************************************************************************************
    //
    // ***********************************************************SECTION 1 - INTRODUCTION******************************************************************************************
    function sectionOne(){
    var newcontent =
    `
    <div name="intro1" class="slide dark"><!--Start Overlay-->
    <div class="columns white animate__animated animate__slideInRight"><!--Columns Container-->
    <div class="reverse">
    <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
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
    </div>
    <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
    <video autoplay playsinline muted src="Media/Attributes-intro-1.mp4"></video>
    </div>
    </div>
    <div class="column mini blue-light mono btn" onclick="sectionOnea()">move forward</div><!--Close Button-->
    </div><!--End Columns Container-->
    </div><!--End Content-->
    `
    ;
    // insert Html
    learningcontent.innerHTML = newcontent;
    sectionname.innerHTML = section1 + section1indicator; // Update with section name
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
    <div class="reverse">
    <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
    <h2 class="mono lower"><span name="animated-text" class="type-text" style="--n:80;animation-delay:2.5s;">Attributes determine how the part fits in to the wider project.</span>
    </h2>
    </div>
    <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
    <video autoplay playsinline muted src="Media/Attributes-intro-2.mp4"></video>
    </div>
    </div>
    <div class="column mini blue-light mono btn" onclick="sectionOneb()">move forward</div><!--Close Button-->
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
    <div class="reverse">
    <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
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
    </div>
    <div class="column mini blue-light mono btn" onclick="sectionOnec()">move forward</div><!--Close Button-->
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
    <div class="reverse overflow-icon">
    <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:126;animation-delay:3s;">
    It is the responsibility of the design engineer to populate part attributes correctly for all new parts.
    </span>
    </h2>
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:148;animation-delay:10s;">
    Your actions here can enable Arrival to operate more efficiently and avoid unnecessary questions/problems further down the line.
    </span>
    </h2>
    </div>
    <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
    <video autoplay playsinline muted src="Media/Attributes-intro-4.mp4"></video>
    </div>
    </div>
    <div class="column mini blue-light mono btn" onclick="sectionOned()">move forward</div><!--Close Button-->
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
      <div class="reverse overflow-icon">
      <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
      <h2 class="mono lower">
      <span name="animated-text" class="type-text" style="--n:140;animation-delay:3s;">
      This training will familiarise you with the different attributes, inputting & updating... etc.
      </span>
      </h2>
      </div><!--Close Button-->
      <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
      <video autoplay playsinline muted src="Media/Attributes-intro-5.mp4"></video>
      </div>
      </div>
      <div class="column mini blue-light mono btn" onclick="sectionOnee()">move forward</div><!--Close Button-->
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
      <div class="reverse">
      <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
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
      </div>
      <div class="column mini blue-light mono btn" onclick="sectionOnef()">move forward</div><!--Close Button-->
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
      <div class="columns white animate__animated animate__slideInLeft"><!--Columns Container-->
      <div class="reverse">
      <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
      <h2 class="mono lower">
      <span name="animated-text" class="type-text" style="--n:147;animation-delay:3.5s;">
      If you are returning to the training, or simply need to use it as a reference, you may access different sections from the menu.
      </span>
      </h2>
      </div><!--Close Button-->
      <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
      <video autoplay playsinline muted src="Media/Attributes-intro-7.mp4"></video>
      </div>
      </div>
      <div class="column mini blue-light mono btn" onclick="sectionOneEnd()">move forward</div><!--Close Button-->
      </div><!--End Columns Container-->
      </div><!--End Content-->
      `
      ;
      // insert Html
      learningcontent.innerHTML = newcontent;
      sectionname.innerHTML = section1; // Update with section name
      document.getElementById('i-step-back').setAttribute('onclick','sectionOnee();noTextAnimate()'); // Update with previous content
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
    document.getElementById('i-forward').setAttribute('onclick', 'sectionTwo()');
    lastView(); // Update local storage with current page
    };
    //**********************************************************************************************************************************************************
    //
    // ***********************************************************SECTION 2 START - The When ******************************************************************************************
    function sectionTwo(){
      var newcontent =
      `
      <div name="section2start" class="slide dark">
      <div class="columns blue-light animate__animated animate__slideInLeft"><!--Columns Container-->
      <div class="column"><!--Start Section Container-->
      <h2 class="mono">Section 2. </h2><!--Heading-->
      <p class="mono">This Section begins with a knowledge check. If you answer the questions correctly, you have the opportunity to skip the section content. However we recommend that you view the content to refresh your knowledge.</p>
      </div><!--End Start Section -->
      </div><!--End Columns Container-->
      </div>
      `
      ;
      // insert Html
      learningcontent.innerHTML = newcontent;
      sectionname.innerHTML = section2 + section2indicator; // Update with section name
      document.getElementById('i-step-back').setAttribute('onclick','sectionOneEnd()'); // Update with previous content
      document.getElementById('i-forward').classList.remove('disabled-btn');
      document.getElementById('i-forward').innerHTML = 'Begin';
      document.getElementById('i-forward').setAttribute('onclick', 'sectionTwoStartCheckpoint()');
      lastView(); // Update local storage with current page
      };
      //**********************************************************************************************************************************************************
      //
   // ***********************************************************SECTION 2 First Checkpoint Question ******************************************************************************************
   function disableCpResponse(){  // Disable responses after first selection
    var responses = document.querySelectorAll('[name="response"]');
    for (let i = 0; i < responses.length; i++){
    responses[i].classList.add('cp-disabled');document.getElementById('i-step-back').setAttribute('onclick','');} // Disable clicking other options and prevent going back}
    };
   function sectionTwoStartCheckpoint(){
      var newcontent =
    `
    <div name="section2checkpointstart" class="slide dark"><!--Learning Content Container-->
    <div class="columns drag animate__animated animate__slideInRight"><!--Columns Container-->
    <div class="column third light"><!--Left (Desktop) Column Container-->
    <p>You need to add the correct attributes to a part before it is released. Where should attributes be added or amended (other than Material)?</p>
    <div class="row"><!--First row of cards-->
    <span name="response" class="card small cp black btn" onclick="disableCpResponse();this.classList.add('cp-correct');document.getElementById('correct').classList.remove('hide');document.getElementById('normal').classList.add('hide');document.getElementById('incorrect').classList.add('hide')"><!--Card-->
    <p class="mono">Teamcenter AWC (Web or Embedded in NX)</p><!--Card mono title-->
    </span><!--End Card-->
    <span name="response" class="card small cp black btn" onclick="disableCpResponse();this.classList.add('cp-incorrect');document.getElementById('correct').classList.add('hide');document.getElementById('normal').classList.add('hide');document.getElementById('incorrect').classList.remove('hide');document.getElementById('cp-error-feedback').innerHTML = 'Teamcenter Visualisation is a tool for exploring CAD.'"><!--Card-->
    <p class="mono">Teamcenter Visualisation</p><!--Card mono title-->
    </span><!--End Card-->
    </div><!--End first row-->
    <div class="row"><!--Second Row-->
    <span name="response" class="card small cp black btn" onclick="disableCpResponse();this.classList.add('cp-incorrect');document.getElementById('correct').classList.add('hide');document.getElementById('normal').classList.add('hide');document.getElementById('incorrect').classList.remove('hide');document.getElementById('cp-error-feedback').innerHTML = 'Although it is possible using NX Interface, it is not a method that we promote.'"><!--Card-->
    <p class="mono">NX</p><!--Card mono title-->
    </span><!--End Card-->
    <span name="response" class="card small cp black btn" onclick="disableCpResponse();this.classList.add('cp-incorrect');document.getElementById('correct').classList.add('hide');document.getElementById('normal').classList.add('hide');document.getElementById('incorrect').classList.remove('hide');document.getElementById('cp-error-feedback').innerHTML = 'Part Attributes are not entered using Odoo.'"><!--Card-->
    <p class="mono">Odoo</p><!--Card mono title-->
    </span><!--End Card-->
    </div><!--End Second row-->
    </div><!--End Left (Desktop) Column Container-->
    
    <div id="normal" class="column fill dark mono" style="background-image:url('Media/Checkpoint-bg.png');background-repeat:no-repeat;background-size:contain;background-position:center;"><!--Right (Desktop) Column Container-->
    </div><!--End Right (Desktop) Column Container-->
    
    <div id="incorrect" class="column fill error mono hide btn" onclick="sectionTwoa()"><!--Right (Desktop) Column Container-->
    move forward
    <h2 class="mono">Incorrect</h2>
    <h2 id="cp-error-feedback" class="mono"></h2>
    </div><!--End Right (Desktop) Column Container-->
    
    <div id="correct" class="column fill success mono hide btn" onclick="sectionTwoCorrectPath()"><!--Right (Desktop) Column Container-->
    move forward
    <h2 class="mono">That's right!</h2>
    <h2 class="mono">It is strongly recommended to use Active Workspace to enter or update Attributes.</h2>
    </div><!--End Right (Desktop) Column Container-->
    
    
    </div><!--End Columns Container-->
    </div><!--End Learning Content Container-->
    
    <!--LEARNING CONTENT END-->
    `
    ;
    // insert Html
    learningcontent.innerHTML = newcontent;
    sectionname.innerHTML = section2 + section2indicator; // Update with section name
    document.getElementById('i-step-back').setAttribute('onclick','sectionTwo()'); // Update with previous content
    document.getElementById('i-forward').innerHTML = 'Next Section';
    deactivateNext(); //De-activate next section button
    lastView(); // Update local storage with current page
    };
    //**********************************************************************************************************************************************************
    //
   // ***********************************************************SECTION 2 Correct Path -  If user gets first checkpoint correct...******************************************************************************************
   function secTwocorrectCpResponse(){
   var correctresponseone = document.querySelector('[data-response="one"]');
   var incorrectresponse = document.querySelector('[data-response="two"]');
   var correctresponsethree = document.querySelector('[data-response="three"]');
   var nextsection = document.getElementById('i-forward');
   if (correctresponseone.classList.contains('cp-correct')+correctresponsethree.classList.contains('cp-correct')){document.getElementById('normal').classList.add('hide');document.getElementById('correct').classList.remove('hide');incorrectresponse.classList.add('cp-disabled');nextsection.classList.remove('disabled-btn');}
   }
   function sectionTwoCorrectPath(){
      var newcontent =
    `
    <div name="section2correctpath" class="slide dark"><!--Learning Content Container-->
    <div class="columns drag animate__animated animate__slideInDown"><!--Columns Container-->
    <div class="column third light"><!--Left (Desktop) Column Container-->
    <p>When should part attributes be entered? (More than one answer may be correct)</p>
    <div class="row"><!--First row of cards-->
    <span name="response" data-response="one" class="card small cp black btn" onclick="secTwocorrectCpResponse();this.classList.add('cp-correct')"><!--Card-->
    <p class="mono">At any point during the development of a part</p><!--Card mono title-->
    </span><!--End Card-->
    </div><!--End first row-->
    <div class="row"><!--Second Row-->
    <span name="response" data-response="two" class="card small cp black btn" onclick="disableCpResponse();this.classList.add('cp-incorrect');document.getElementById('correct').classList.add('hide');document.getElementById('normal').classList.add('hide');document.getElementById('incorrect').classList.remove('hide');document.getElementById('cp-error-feedback').innerHTML = 'It is not possible to enter Part Attributes before the part is created.'"><!--Card-->
    <p class="mono">Before a part is created</p><!--Card mono title-->
    </span><!--End Card-->
    </div><!--End second row-->
    <div class="row"><!--Third Row-->
    <span name="response" data-response="three" class="card small cp black btn" onclick="secTwocorrectCpResponse();this.classList.add('cp-correct');"><!--Card-->
    <p class="mono">Before releasing a part</p><!--Card mono title-->
    </span><!--End Card-->
    </div><!--End Third row-->
    </div><!--End Left (Desktop) Column Container-->
    
    <div id="normal" class="column fill dark mono" style="background-image:url('Media/Checkpoint-bg.png');background-repeat:no-repeat;background-size:contain;background-position:center;"><!--Right (Desktop) Column Container-->
    </div><!--End Right (Desktop) Column Container-->
    
    <div id="incorrect" class="column fill error mono hide btn" onclick="sectionTwoa()"><!--Right (Desktop) Column Container-->
    move forward
    <h2 class="mono">Incorrect</h2>
    <h2 id="cp-error-feedback" class="mono"></h2>
    </div><!--End Right (Desktop) Column Container-->
    
    <div id="correct" class="column fill success mono hide btn" onclick="sectionTwoa()"><!--Right (Desktop) Column Container-->
    move forward
    <h2 class="mono">It appears that you have a good knowledge of this section!</h2>
    <h2 class="mono">You can continue to view this section by clicking here or move to the next section using the button below.</h2>
    </div><!--End Right (Desktop) Column Container-->
    
    
    </div><!--End Columns Container-->
    </div><!--End Learning Content Container-->
    
    <!--LEARNING CONTENT END-->
    `
    ;
    // insert Html
    learningcontent.innerHTML = newcontent;
    sectionname.innerHTML = section2 + section2indicator; // Update with section name
    document.getElementById('i-step-back').setAttribute('onclick','sectionTwoStartCheckpoint()'); // Update with previous content
    document.getElementById('i-forward').setAttribute('onclick', 'sectionThree()');
    lastView(); // Update local storage with current page
    };
    //**********************************************************************************************************************************************************
    //
    // ***********************************************************SECTION 2 A ******************************************************************************************
      function sectionTwoa(){
        var newcontent =
        `
        <div name="section2a" class="slide dark"><!--Start Overlay-->
        <div class="columns white animate__animated animate__slideInRight"><!--Columns Container-->
        <div class="reverse">
        <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
        <h2 class="mono lower">
        <span name="animated-text" class="type-text" style="--n:204;animation-delay:4.5s;">
        Once a part has been created, part attributes can be entered or edited at any point in the development cycle. But they must be accurately completed before a part is released.
        </span>
        </h2>
        </div>
        <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
        <video autoplay playsinline muted src="Media/Attributes-section1.mp4"></video>
        </div>
        </div>
        <div class="column mini blue-light mono btn" onclick="sectionTwob()">move forward</div><!--Close Button-->
        </div><!--End Columns Container-->
        </div><!--End Content-->
        `
        ;
        // insert Html
        learningcontent.innerHTML = newcontent;
        sectionname.innerHTML = section2 + section2indicator; // Update with section name
        document.getElementById('i-step-back').setAttribute('onclick','sectionTwoStartCheckpoint();noTextAnimate()'); // Update with previous content
        lastView(); // Update local storage with current page
        };
    //**********************************************************************************************************************************************************
    //
      // ***********************************************************SECTION 2 B ******************************************************************************************
      function sectionTwob(){
        var newcontent =
        `
        <div name="section2b" class="slide dark"><!--Start Overlay-->
        <div class="columns white animate__animated animate__slideInLeft"><!--Columns Container-->
        <div class="reverse">
        <div name="static-img" class="column larger light mono overflow-icon" onclick="noTextAnimate()">
        <h2 class="mono lower">
        <span name="animated-text" class="type-text" style="--n:94;animation-delay:1s;">
        Attributes are entered or updated using Active Workspace (AWC).
        </span>
        </h2>
        <h2 class="mono lower">
        <span name="animated-text" class="type-text" style="--n:220;animation-delay:5.5s;">
        It is technically possible to enter or update attributes using Computer Aided Design (CAD) software, for example Siemens NX, but we strongly recommend the use of Active Workspace.
        </span>
        </h2>
        </div>
        <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
        <div class="static-img buttons">
        <img id="attr-screen" src="Media/Attributes-section1-awcscreen.png">
        <div class="img-select-container">
        <button class="button img-select dark success" onclick="this.classList.add('success');this.nextElementSibling.classList.remove('success');document.getElementById('attr-screen').src = 'Media/Attributes-section1-awcscreen.png';">AWC attributes screen</button>
        <button class="button img-select dark" onclick="this.classList.add('success');this.previousElementSibling.classList.remove('success');document.getElementById('attr-screen').src = 'Media/Attributes-section1-nxscreen.png';">NX attributes screen</button>
        </div>
        </div>
        </div>
        </div>
        <div class="column mini blue-light mono btn" onclick="sectionTwoc()">move forward</div><!--Close Button-->
        </div><!--End Columns Container-->
        </div><!--End Content-->
        `
        ;
        // insert Html
        learningcontent.innerHTML = newcontent;
        sectionname.innerHTML = section2 + section2indicator; // Update with section name
        document.getElementById('i-step-back').setAttribute('onclick','sectionTwoa();noTextAnimate()'); // Update with previous content
        lastView(); // Update local storage with current page
        };
    //**********************************************************************************************************************************************************
    //
    // ***********************************************************SECTION 2 C ******************************************************************************************
    function sectionTwoc(){
      var newcontent =
      `
      <div name="section2c" class="slide dark"><!--Start Overlay-->
      <div class="columns white animate__animated animate__slideInDown"><!--Columns Container-->
      <div class="reverse">
      <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
      <h2 class="mono lower">
      <span name="animated-text" class="type-text" style="--n:199;animation-delay:4.5s;">
      As a Design Engineer, you can have a big impact on the quality of 'downstream' data by ensuring all parts that you design are populated with the necessary attributes.
      </span>
      </h2>
      </div>
      <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
      <video autoplay playsinline muted src="Media/Attributes-section1-1.mp4"></video>
      </div>
      </div>
      <div class="column mini blue-light mono btn" onclick="sectionTwod()">move forward</div><!--Close Button-->
      </div><!--End Columns Container-->
      </div><!--End Content-->
      `
      ;
      // insert Html
      learningcontent.innerHTML = newcontent;
      sectionname.innerHTML = section2 + section2indicator; // Update with section name
      document.getElementById('i-step-back').setAttribute('onclick','sectionTwob();noTextAnimate()'); // Update with previous content
      lastView(); // Update local storage with current page
      };
  //**********************************************************************************************************************************************************
  //
    // ***********************************************************SECTION 2 D ******************************************************************************************
    function sectionTwod(){
    var newcontent =
    `
    <div name="section2d" class="slide dark"><!--Start Overlay-->
    <div class="columns white animate__animated animate__slideInRight"><!--Columns Container-->
    <div class="reverse">
    <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:199;animation-delay:4.5s;">
    <strong>Before</strong> entering a part release cycle, you should thoroughly check your part for any missing or inaccurate attributes. You can use Active Workspace (AWC) for this.
    </span>
    </h2>
    </div>
    <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
    <video autoplay playsinline muted src="Media/Attributes-section1-2.mp4"></video>
    </div>
    </div>
    <div class="column mini blue-light mono btn" onclick="sectionTwoe()">move forward</div><!--Close Button-->
    </div><!--End Columns Container-->
    </div><!--End Content-->
    `
    ;
    // insert Html
    learningcontent.innerHTML = newcontent;
    sectionname.innerHTML = section2 + section2indicator; // Update with section name
    document.getElementById('i-step-back').setAttribute('onclick','sectionTwoc();noTextAnimate()'); // Update with previous content
    lastView(); // Update local storage with current page
    };
    //**********************************************************************************************************************************************************
    //
    // ***********************************************************SECTION 2 E ******************************************************************************************
    function sectionTwoe(){
    var newcontent =
    `
    <div name="section2e" class="slide dark"><!--Start Overlay-->
    <div class="columns white animate__animated animate__slideInLeft"><!--Columns Container-->
    <div class="reverse">
    <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:199;animation-delay:4s;">
    <strong>During</strong> the part release cycle, part attributes must be peer-reviewed to eliminate the likelihood of missing or inaccurate part attributes.
    </span>
    </h2>
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:199;animation-delay:12.5s;">
    Missing or inaccurate attributes must be rectified before the part is released.
    </span>
    </h2>
    </div>
    <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
    <video autoplay playsinline muted src="Media/Attributes-section1-3.mp4"></video>
    </div>
    </div>
    <div class="column mini blue-light mono btn" onclick="sectionTwof()">move forward</div><!--Close Button-->
    </div><!--End Columns Container-->
    </div><!--End Content-->
    `
    ;
    // insert Html
    learningcontent.innerHTML = newcontent;
    sectionname.innerHTML = section2 + section2indicator; // Update with section name
    document.getElementById('i-step-back').setAttribute('onclick','sectionTwod();noTextAnimate()'); // Update with previous content
    lastView(); // Update local storage with current page
    };
    //**********************************************************************************************************************************************************
    //
  // ***********************************************************SECTION 2 F - Caution release parts... ******************************************************************************************
  function sectionTwof(){
    var newcontent =
    `
    <div name="section2f" class="slide dark"><!--Start Overlay-->
    <div class="columns white animate__animated animate__slideInRight"><!--Columns Container-->
    <div name="scroll" class="column fill caution-color"><!--Start Section Container-->
    <h2 id="caution-title" class="mono">caution</h2><!--Heading-->
    <h2 class="mono">Parts must not be released with incorrect or missing attributes.</h2><!--Heading-->
    </div>
    <div class="column quarter purple-dark mono btn" onclick="sectionTwoEnd()">move forward</div><!--Close Button-->
    </div><!--End Columns Container-->
    </div><!--End Content-->
    `
    ;
    // insert Html
    learningcontent.innerHTML = newcontent;
    sectionname.innerHTML = section2 + section2indicator; // Update with section name
    document.getElementById('i-step-back').setAttribute('onclick','sectionTwoe();noTextAnimate()'); // Update with previous content
    lastView(); // Update local storage with current page
    };
    //**********************************************************************************************************************************************************
    //
    // ***********************************************************SECTION 2 END ******************************************************************************************
    function sectionTwoEnd(){
      var newcontent =
      `
      <div name="section2end" class="slide dark">
      <div class="columns success animate__animated animate__slideInUp"><!--Columns Container-->
      <div class="column"><!--Start Section Container-->
      <h2 class="mono">That's it for this section!</h2><!--Heading-->
      <p class="mono">select next section to continue.</p>
      </div><!--End Start Section -->
      </div><!--End Columns Container-->
      </div>
      `
      ;
      // insert Html
      learningcontent.innerHTML = newcontent;
      sectionname.innerHTML = section2 + section2indicator; // Update with section name
      document.getElementById('i-step-back').setAttribute('onclick','sectionTwof();noTextAnimate()'); // Update with previous content
      document.getElementById('i-forward').classList.remove('disabled-btn');
      document.getElementById('i-forward').setAttribute('onclick', 'sectionThreea();');
      lastView(); // Update local storage with current page
      };
      //**********************************************************************************************************************************************************
      //
      // ***********************************************************SECTION 3 START - The Attributes ******************************************************************************************
      function sectionThree(){
        var newcontent =
        `
        <div name="section3start" class="slide dark">
        <div class="columns blue-light animate__animated animate__slideInLeft"><!--Columns Container-->
        <div class="column"><!--Start Section Container-->
        <h2 class="mono">Section 3. </h2><!--Heading-->
        <p class="mono">In this section we will introduce the critical part attributes that you will use when designing parts</p>
        </div><!--End Start Section -->
        </div><!--End Columns Container-->
        </div>
        `
        ;
        // insert Html
        learningcontent.innerHTML = newcontent;
        sectionname.innerHTML = section3 + section3indicator; // Update with section name
        document.getElementById('i-step-back').setAttribute('onclick','sectionTwoEnd()'); // Update with previous content
        document.getElementById('i-forward').classList.remove('disabled-btn');
        document.getElementById('i-forward').innerHTML = 'Begin';
        document.getElementById('i-forward').setAttribute('onclick', 'sectionThreea()');
        lastView(); // Update local storage with current page
        };
        //**********************************************************************************************************************************************************
        //
   // ***********************************************************SECTION 3 A - INTRODUCTION To Section 3 - the attributes******************************************************************************************
   function sectionThreea(){
    var newcontent =
    `
    <div name="section3a" class="slide dark"><!--Start Overlay-->
    <div class="columns white animate__animated animate__slideInRight"><!--Columns Container-->
    <div class="reverse">
    <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:181">
    Part attributes are metadata attached to each part. At Arrival we have defined a list of attributes that are considered critical to the operation of our business.
    </span>
    </h2>
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:125;animation-delay:14s;">
    As a Design Engineer, you must ensure that every part that you design has the correct attributes applied.
    </span>
    </h2>
    </div>
    <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
    <video autoplay playsinline muted src="Media/Attributes-intro-1.mp4"></video>
    </div>
    </div>
    <div class="column mini blue-light mono btn" onclick="sectionThreeb()">move forward</div><!--Close Button-->
    </div><!--End Columns Container-->
    </div><!--End Content-->
    `
    ;
    // insert Html
    learningcontent.innerHTML = newcontent;
    sectionname.innerHTML = section3 + section3indicator; // Update with section name
    stepback.setAttribute('onclick','sectionThree()'); // Update with previous content
    document.getElementById('i-forward').innerHTML = 'Next Section';
    deactivateNext();
    lastView(); // Update local storage with current page
    };
    //**********************************************************************************************************************************************************
    //
   // ***********************************************************SECTION 3 B - INTRODUCTION To Section 3 - the attributes******************************************************************************************
   function sectionThreeb(){
    var newcontent =
    `
    <div name="section3b" class="slide dark"><!--Start Overlay-->
    <div class="columns white animate__animated animate__slideInDown"><!--Columns Container-->
    <div class="reverse">
    <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:140;animation-delay:3s;">
    Each part that you design may have a different requirement for the set of attributes that should be entered on the part.
    </span>
    </h2>
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:266;animation-delay:11s;">
    In this section we will introduce the critical part attributes that you will use when designing parts. We will also explain how you can locate the most recent master list of attributes to ensure that you are always up-to-date.
    </span>
    </h2>
    </div>
    <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
    <video autoplay playsinline muted src="Media/Attributes-intro-5.mp4"></video>
    </div>
    </div>
    <div class="column mini blue-light mono btn" onclick="sectionThreec()">move forward</div><!--Close Button-->
    </div><!--End Columns Container-->
    </div><!--End Content-->
    `
    ;
    // insert Html
    learningcontent.innerHTML = newcontent;
    sectionname.innerHTML = section3 + section3indicator; // Update with section name
    stepback.setAttribute('onclick','sectionThreea();noTextAnimate()'); // Update with previous content
    lastView(); // Update local storage with current page
    };
    //**********************************************************************************************************************************************************
    //
  // ***********************************************************SECTION 3 C - INTRODUCTION To Section 3 - the attributes ******************************************************************************************
   function sectionThreec(){
    var newcontent =
    `
    <div name="section3c" class="slide dark"><!--Start Overlay-->
    <div class="columns white animate__animated animate__slideInLeft"><!--Columns Container-->
    <div class="reverse overflow-icon">
    <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:83;animation-delay:3s;">
    You should select each attribute, in any order that you prefer.
    </span>
    </h2>
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:230;animation-delay:8s;">
    A link to the Arrival Wiki is provided after selecting each attribute. You should use the Wiki as the source of truth. Selecting the link will open Wiki in a new window (this Module will remain open).
    </span>
    </h2>
    </div>
    <div id="normal" class="column fill media-gray mono overflow"><!--Start Section Container-->
    <video autoplay playsinline muted src="Media/Attributes-section1-2.mp4"></video>
    </div>
    </div>
    <div class="column mini blue-light mono btn" onclick="sectionThreed()">move forward</div><!--Close Button-->
    </div><!--End Columns Container-->
    </div><!--End Content-->
    `
    ;
    // insert Html
    learningcontent.innerHTML = newcontent;
    sectionname.innerHTML = section3 + section3indicator; // Update with section name
    stepback.setAttribute('onclick','sectionThreeb();noTextAnimate()'); // Update with previous content
    lastView(); // Update local storage with current page
    };
    //**********************************************************************************************************************************************************
    //
    // ***********************************************************SECTION 3 D - THE ATTRIBUTES!!!! ******************************************************************************************
    function attrVisited(val){ // Function to set local storage key when attribute visited
    localStorage.setItem(val+':Visited',true); // Val is the id of the card passed when user clicks the card
    document.getElementById(val).classList.add('indicator'); // Indicator class adds visual icon to card so user knows he has viewed
    lastView(); // Update last view
    }
    function checkAttrVisited(){ // Check local storage key and update card with indicator
    if ("attr-part-type:Visited" in localStorage) {document.getElementById('attr-part-type').classList.add('indicator')};
    if ("attr-sourcing-category:Visited" in localStorage) {document.getElementById('attr-sourcing-category').classList.add('indicator')};
    if ("attr-development-strategy:Visited" in localStorage) {document.getElementById('attr-development-strategy').classList.add('indicator')};
    if ("attr-characteristic:Visited" in localStorage) {document.getElementById('attr-characteristic').classList.add('indicator')};
    if ("attr-traceability:Visited" in localStorage) {document.getElementById('attr-traceability').classList.add('indicator')};
    if ("attr-requires-power:Visited" in localStorage) {document.getElementById('attr-requires-power').classList.add('indicator')};
    if ("attr-supplier-name:Visited" in localStorage) {document.getElementById('attr-supplier-name').classList.add('indicator')};
    if ("attr-supplier-part-number:Visited" in localStorage) {document.getElementById('attr-supplier-part-number').classList.add('indicator')};
    if ("attr-material:Visited" in localStorage) {document.getElementById('attr-material').classList.add('indicator')};
    if ("attr-finish:Visited" in localStorage) {document.getElementById('attr-finish').classList.add('indicator')};
    if ("attr-colour:Visited" in localStorage) {document.getElementById('attr-colour').classList.add('indicator')};
    if ("attr-colour-sensitive:Visited" in localStorage) {document.getElementById('attr-colour-sensitive').classList.add('indicator')};
    if ("attr-measured-mass:Visited" in localStorage) {document.getElementById('attr-measured-mass').classList.add('indicator')};
    }
    function checkAttrCompleted(){ // Function to check if all attributes have been viewed by the user by checking local storage keys
    if ("attr-part-type:Visited" in localStorage 
    && "attr-sourcing-category:Visited" in localStorage
    && "attr-development-strategy:Visited" in localStorage
    && "attr-characteristic:Visited" in localStorage
    && "attr-traceability:Visited" in localStorage
    && "attr-requires-power:Visited" in localStorage
    && "attr-supplier-name:Visited" in localStorage
    && "attr-supplier-part-number:Visited" in localStorage
    && "attr-material:Visited" in localStorage
    && "attr-finish:Visited" in localStorage
    && "attr-colour:Visited" in localStorage
    && "attr-colour-sensitive:Visited" in localStorage
    && "attr-measured-mass:Visited" in localStorage
    )
    // If all keys are present, activbate next section button
    {document.getElementById('i-forward').classList.remove('disabled-btn');document.getElementById('i-forward').setAttribute('onclick', 'sectionFour();');lastView();}
   }

    function sectionThreed(){
    var newcontent =
    `
    <div name="section3d" class="slide dark">
    <div class="columns animate__animated animate__slideInRight"><!--Columns Container-->
    <div class="column fill white overflow"><!--Section Cards Container-->
    <div class="row wrap"><!--First row of cards-->
    <span id="attr-part-type" class="card small btn light" onclick="parttype.showModal();attrVisited(this.id);"><p class="mono">Part Type</p></span>
    <span id="attr-sourcing-category" class="card small btn light" onclick="sourcingcategory.showModal();attrVisited(this.id);"><p class="mono">Sourcing Category</p></span>
    <span id="attr-development-strategy" class="card small btn light" onclick="developmentstrategy.showModal();attrVisited(this.id);"><p class="mono">Development Strategy</p></span>
    <span id="attr-characteristic" class="card small btn light" onclick="characteristic.showModal();attrVisited(this.id);"><p class="mono">Characteristic</p></span>
    <span id="attr-traceability" class="card small btn light" onclick="traceability.showModal();attrVisited(this.id);"><p class="mono">Traceability Requirement</p></span>
    </div><!--End First row of cards-->
    <div class="row wrap"><!--Second row of cards-->
    <span id="attr-requires-power" class="card small btn light" onclick="requirespower.showModal();attrVisited(this.id);"><p class="mono">Requires Electrical Power</p></span><!--Section-->
    <span id="attr-supplier-name" class="card small btn light" onclick="suppliername.showModal();attrVisited(this.id);"><p class="mono">Supplier Name</p></span><!--Section-->
    <span id="attr-supplier-part-number" class="card small btn light"onclick="supplierpartnumber.showModal();attrVisited(this.id);"><p class="mono">Supplier Part Number</p></span><!--Section-->
    <span id="attr-material" class="card small btn light"onclick="material.showModal();attrVisited(this.id);"><p class="mono">Material</p></span><!--Section-->
    <span id="attr-finish" class="card small btn light"onclick="finish.showModal();attrVisited(this.id);"><p class="mono">Finish</p></span><!--Section-->
    </div><!--End Second row of cards-->
    <div class="row wrap"><!--Third row of cards-->
    <span id="attr-colour" class="card small btn light" onclick="colourattr.showModal();attrVisited(this.id);"><p class="mono">Colour</p></span><!--Section-->
    <span id="attr-colour-sensitive" class="card small btn light" onclick="coloursensitive.showModal();attrVisited(this.id);"><p class="mono">Colour Sensitive</p></span><!--Section-->
    <span id="attr-measured-mass" class="card small btn light"onclick="measuredmass.showModal();attrVisited(this.id);"><p class="mono">Measured Mass</p></span><!--Section-->
    <span style="visibility:hidden" class="card small btn light"><p class="mono"></p></span><!--Section-->
    <span style="visibility:hidden" class="card small btn light"><p class="mono"></p></span><!--Section-->
    </div><!--End third row of cards-->
    </div><!--End Section Cards Container-->
    </div><!--End Columns Container-->
    
    <!--PART TYPE COMMODITY MODAL-->
    <dialog class="attr-modal" id="parttype">
    <button class="attr-modal-close" onclick="parttype.close();checkAttrCompleted();"></button>
    <button class="button error sm-btn not-btn tag">Mandatory on creation</button>
    <button class="button light sm-btn not-btn tag">Depends on:</button>
    <button class="button dark sm-btn tag" onclick="sourcingcategory.showModal();">Sourcing Category</button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts#:~:text=Examples%20and%20Special%20Use%20Cases', '_blank').focus()">Exceptions and special use cases</button>
    <h3>Part Type (Commodity)</h3>
    <p>This attribute should be populated on all parts with the exception of those that have a Sourcing Category set to None. In this scenario, it is still acceptable for the part type to be populated however it is not mandated.</p>
    <p>The attribute describes the type of part based on its type, raw materials and manufacturing process.</p>
    <p>The value that you enter for the part type attribute is selected from a pre-populated list in Active Workspace.</p>
    <p>Here are a few examples of values that could be selected for the part type attribute:
    <br>
    <br>
    - Aluminium Extrusions
    <br>
    - Adhesives
    <br>
    - Control Arms
    <br>
    - Partitions
    <br>
    - Tyre Mobility Kit
    <br>
    </p>
    <p>There are some special cases and exceptions when using this attribute. You should regularly check if these exceptions and use cases apply to the part you are designing.</p>
    </dialog>

    <!--SOURCING CATEGORY MODAL-->
    <dialog class="attr-modal" id="sourcingcategory">
    <button class="attr-modal-close" onclick="sourcingcategory.close();checkAttrCompleted();"></button>
    <button class="button error sm-btn not-btn tag">Mandatory on creation</button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts#:~:text=The%20values%20for%20Sourcing%20Category%20will%20depend%20upon%20the%20Tier%20of%20the%20supplier%3A', '_blank').focus()">Sourcing Category Supplier Tier Table</button>
    <h3>Sourcing Category</h3>
    <p>This attribute should be populated if a part needs a Purchase Order (PO) raised for it.</p>
    <p>The value that you enter for this attribute will depend on the Tier of the supplier. For example, Tier 1 supplier, Tier 2 supplier.</p>
    <p>The value that you enter for the part type attribute is selected from a pre-populated list in Active Workspace.</p>
    <p>Here are a few examples of values that could be selected for the part type attribute:
    <br>
    <br>
    - Purchased External
    <br>
    - Directly Sourced Component - Supplier
    <br>
    - None
    <br>
    </p>
    <p>A part that has a sourcing category value of "none" would indicate that no PO is required for this part.</p>
    </dialog>

    <!--DEVELOPMENT STRATEGY MODAL-->
    <dialog class="attr-modal" id="developmentstrategy">
    <button class="attr-modal-close" onclick="developmentstrategy.close();checkAttrCompleted();"></button>
    <button class="button light sm-btn not-btn tag">Depends on:</button>
    <button class="button dark sm-btn tag" onclick="sourcingcategory.showModal();">Sourcing Category</button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts#:~:text=Definition-,1A,-%2D%20Arrival%20IP%20%7C%20Arrival', '_blank').focus()">Development Strategy Table</button>
    <h3>Development Strategy</h3>
    <p>The development strategy attribute identifies if a part is <strong>designed by Arrival</strong>, <strong>designed for Arrival</strong> or if it is an <strong>off-the-shelf</strong> part or component.</p>
    <p>This attribute must be correctly populated on all parts except when the Sourcing Category is "None".</p>
    </dialog>
  
    <!--CHARATERISTIC MODAL-->
    <dialog class="attr-modal" id="characteristic">
    <button class="attr-modal-close" onclick="characteristic.close();checkAttrCompleted();"></button>
    <button class="button light sm-btn not-btn tag">Depends on:</button>
    <button class="button dark sm-btn tag" onclick="sourcingcategory.showModal();">Sourcing Category</button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts#:~:text=Should%20be%20set%20on%20Purchased%20Parts.', '_blank').focus()">Notes for populating characteristic attribute</button>
    <h3>Characteristic</h3>
    <p>This attribute is used to identify if a failure of the part could contribute to a  safety, regulatory or performance issue.</p>
    <p>A value for this attribute should be set on all purchased parts. The value is selected based on the severity score of the Design Failure Mode and Effect Analysis (DFMEA).</p>
    <p>For example, a DFMEA severity score of 10 would equal a characteristic value of CC (Critical Characteristic).</p>
    </dialog>

    <!--TRACEABILITY MODAL-->
    <dialog class="attr-modal" id="traceability">
    <button class="attr-modal-close" onclick="traceability.close();checkAttrCompleted();"></button>
    <button class="button light sm-btn not-btn tag">Depends on:</button>
    <button class="button dark sm-btn tag" onclick="characteristic.showModal();">Characteristic</button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts#:~:text=Example-,Serial,-Individual%20serial%20numbers', '_blank').focus()">Traceability value guidance</button>
    <h3>Traceability Requirement</h3>
    <p>This attribute identifies parts that are to be scanned and recorded in a production environment allowing for full traceability of the part. For example in the event of a vehicle recall where it is necessary to identify vehicles with a specific part.</p>
    <p>The value for the traceability requirement attribute depends largely on the characteristic attribute and the nature of the part.</p>
    <p>Guidance for this value can be found in the Wiki.</p>
    <p>ARRIVAL produced components should all have the traceability requirement attribute set as "Serial".</p>
    </dialog>

    <!--REQUIRES ELECTRICAL POWER MODAL-->
    <dialog class="attr-modal" id="requirespower">
    <button class="attr-modal-close" onclick="requirespower.close();checkAttrCompleted();"></button>
    <button class="button light sm-btn not-btn tag">Depends on:</button>
    <button class="button dark sm-btn tag" onclick="sourcingcategory.showModal();">Sourcing Category</button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts', '_blank').focus()">Attributes for Parts and Standard Parts</button>
    <h3>Requires Electrical Power</h3>
    <p>The "requires electrical power" attribute is used to identify whether a part requires electrical power to be supplied.</p>
    <p>The value for this attribute is a boolean yes or no. A value must be selected for all parts that have been identified as purchased parts in the Sourcing Category attribute.</p>
    <p>Guidance for this value can be found in the Wiki.</p>
    </dialog>

    <!--SUPPLIER NAME MODAL-->
    <dialog class="attr-modal" id="suppliername">
    <button class="attr-modal-close" onclick="suppliername.close();checkAttrCompleted();"></button>
    <button class="button light sm-btn not-btn tag">Depends on:</button>
    <button class="button dark sm-btn tag" onclick="sourcingcategory.showModal();">Sourcing Category</button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts', '_blank').focus()">Attributes for Parts and Standard Parts</button>
    <h3>Supplier Name</h3>
    <p>This attribute is used to specify the name of the part supplier. It must be populated for all custom parts that are created/manufactured by a supplier and all off-the-shelf parts.</p>
    <p>The value for this attribute entered manually in free-text form. E.g there are no pre-populated values for this attribute.</p>
    <p>Guidance for this value can be found in the Wiki.</p>
    </dialog>

    <!--SUPPLIER PART NUMBER MODAL-->
    <dialog class="attr-modal" id="supplierpartnumber">
    <button class="attr-modal-close" onclick="supplierpartnumber.close();checkAttrCompleted();"></button>
    <button class="button light sm-btn not-btn tag">Depends on:</button>
    <button class="button dark sm-btn tag" onclick="suppliername.showModal();">Supplier Name</button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts', '_blank').focus()">Attributes for Parts and Standard Parts</button>
    <h3>Supplier Part Number</h3>
    <p>The supplier part number attribute is used in conjunction with the supplier name attribute. For all custom parts that are created/manufactured by a supplier and all off-the-shelf parts, a part number must be entered.</p>
    <p>The value for this attribute entered manually in free-text form. E.g there are no pre-populated values.</p>
    <p>Guidance for this value can be found in the Wiki.</p>
    </dialog>

    <!--MATERIAL MODAL-->
    <dialog class="attr-modal" id="material">
    <button class="attr-modal-close" onclick="material.close();checkAttrCompleted();"></button>
    <button class="button error sm-btn not-btn tag">Set via Siemens NX</button>
    <button class="button light sm-btn not-btn tag">Depends on:</button>
    <button class="button dark sm-btn tag" onclick="developmentstrategy.showModal();">Development Strategy</button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts', '_blank').focus()">Attributes for Parts and Standard Parts</button>
    <h3>Material</h3>
    <p>This attribute is used to specify the material that a part is made of. For all Arrival designed parts, the exact grade of material must always be specified.</p>
    <p>Arrival designed parts are identified by the Development Strategy attribute.</p>
    <p>Unlike other attribute values, the material attribute can only be set by Computer Aided Design (CAD) software. For example, Siemens NX. Material should be selected from the material library.</p>
    <p>If you require a new material adding to the library, you can raise a helpdesk ticket.</p>
    </dialog>

    <!--FINISH MODAL-->
    <dialog class="attr-modal" id="finish">
    <button class="attr-modal-close" onclick="finish.close();checkAttrCompleted();"></button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts', '_blank').focus()">Attributes for Parts and Standard Parts</button>
    <h3>Finish</h3>
    <p>This attribute is used to specify intended finish of the part.</p>
    <p>The value that you enter for the finish attribute is selected from a pre-populated list in Active Workspace.</p>
    <p>Here are a few examples of values that could be selected for the part type attribute:
    <br>
    <br>
    - As Supplied
    <br>
    - Powder Coated
    <br>
    - Zinc Flake
    <br>
    </p>
    </dialog>

    <!--COLOUR MODAL-->
    <dialog class="attr-modal" id="colourattr">
    <button class="attr-modal-close" onclick="colourattr.close();checkAttrCompleted();"></button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts', '_blank').focus()">Attributes for Parts and Standard Parts</button>
    <h3>Colour</h3>
    <p>The colour attribute provides a colour reference associated with the part.</p>
    <p>The value for this attribute is a 3-digit code that represents a specific colour reference. The 3-digit code can be selected from a pre-populated list in Active Workspace.</p>
    </dialog>

    <!--COLOUR SENSITIVE MODAL-->
    <dialog class="attr-modal" id="coloursensitive">
    <button class="attr-modal-close" onclick="coloursensitive.close();checkAttrCompleted();"></button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts', '_blank').focus()">Attributes for Parts and Standard Parts</button>
    <h3>Colour Sensitive</h3>
    <p>Specifies as “Yes” or “No” if the part is sensitive to different options of colours.</p>
    </dialog>

    <!--MEASURED MASS MODAL-->
    <dialog class="attr-modal" id="measuredmass">
    <button class="attr-modal-close" onclick="measuredmass.close();checkAttrCompleted();"></button>
    <button class="button nav-btn forward modal-wiki" onclick="window.open('https://wiki.arrival.com/display/MH/Attributes+for+Parts+and+Standard+Parts', '_blank').focus()">Attributes for Parts and Standard Parts</button>
    <h3>Measured Mass</h3>
    <p>This attribute is used to specify if there is a difference between the calculated mass of a part and the actual (measured) mass of a part.</p>
    <p>Generally, mass is calculated from CAD using volume and density from the assigned material. If there is a discrepancy between the calculated mass and measured (using physical scales) mass, it can be specified by entering a value for this attribute.</p>
    </dialog>

    </div>
    `
    ;
    // insert Html
    learningcontent.innerHTML = newcontent;
    sectionname.innerHTML = section3 + section3indicator; // Update with section name
    document.getElementById('i-step-back').setAttribute('onclick','sectionThreec();noTextAnimate()'); // Update with previous content
    checkAttrVisited(); // Check local storage to see if attributes have been visted and add indicator to card
    checkAttrCompleted();
    lastView(); // Update local storage with current page
    };
    //**********************************************************************************************************************************************************
    //
  // ***********************************************************SECTION 4 START - T....******************************************************************************************
  function sectionFour(){
    var newcontent =
    `
    <div name="section4start" class="slide dark">
    <div class="columns blue-light animate__animated animate__slideInDown"><!--Columns Container-->
    <div class="column"><!--Start Section Container-->
    <h2 class="mono">Section 4. </h2><!--Heading-->
    <p class="mono">In this section we will take a look at some case studies to help us understand the downstream effects of missing or inaccurate part attributes.</p>
    </div><!--End Start Section -->
    </div><!--End Columns Container-->
    </div>
    `
    ;
    // insert Html
    learningcontent.innerHTML = newcontent;
    sectionname.innerHTML = section4 + section4indicator; // Update with section name
    document.getElementById('i-step-back').setAttribute('onclick','sectionThreed()'); // Update with previous content
    document.getElementById('i-forward').classList.remove('disabled-btn');
    document.getElementById('i-forward').innerHTML = 'Begin';
    document.getElementById('i-forward').setAttribute('onclick', 'sectionFoura()');
    lastView(); // Update local storage with current page
    };
    //**********************************************************************************************************************************************************
    //
     // ***********************************************************SECTION 4 A - ..... ******************************************************************************************
   function sectionFoura(){
    var newcontent =
    `
    <div name="section4a" class="slide dark"><!--Start Overlay-->
    <div class="columns white animate__animated animate__slideInLeft"><!--Columns Container-->
    <div class="reverse overflow-icon">
    <div class="column larger light mono overflow-icon" onclick="noTextAnimate()">
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:83;animation-delay:3s;">
    You should select each attribute, in any order that you prefer.
    </span>
    </h2>
    <h2 class="mono lower">
    <span name="animated-text" class="type-text" style="--n:230;animation-delay:8s;">
    A link to the Arrival Wiki is provided after selecting each attribute. You should use the Wiki as the source of truth. Selecting the link will open Wiki in a new window (this Module will remain open).
    </span>
    </h2>
    </div>
    <div id="normal" class="column fill media-gray vid mono overflow"><!--Start Section Container-->
    <video class="mobileopti" autoplay playsinline muted loop src="Media/Test1.mp4"></video>
    </div>
    </div>
    <div class="column mini blue-light mono btn" onclick="sectionThreed()">move forward</div><!--Close Button-->
    </div><!--End Columns Container-->
    </div><!--End Content-->
    `
    ;
    // insert Html
    learningcontent.innerHTML = newcontent;
    sectionname.innerHTML = section3 + section3indicator; // Update with section name
    stepback.setAttribute('onclick','sectionThreeb();noTextAnimate()'); // Update with previous content
    lastView(); // Update local storage with current page
    };
    //**********************************************************************************************************************************************************
    //
    // ***********************************************************SECTION 4 A ******************************************************************************************
    function sectionFourah(){
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
    