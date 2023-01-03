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
    <div class="column larger light mono overflow-icon">
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
    <div class="column larger light mono overflow-icon">
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
      <div class="column larger light mono overflow-icon">
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
    
    <div id="normal" class="column fill dark mono"><!--Right (Desktop) Column Container-->
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
    
    <div id="normal" class="column fill dark mono"><!--Right (Desktop) Column Container-->
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
        <div class="column larger light mono overflow-icon">
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
        <div name="static-img" class="column larger light mono overflow-icon">
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
      <div class="column larger light mono overflow-icon">
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
    <div class="column larger light mono overflow-icon">
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
    document.getElementById('i-step-back').setAttribute('onclick','sectionTwoc()'); // Update with previous content
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
    <div class="column larger light mono overflow-icon">
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
    document.getElementById('i-step-back').setAttribute('onclick','sectionTwod()'); // Update with previous content
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
    document.getElementById('i-step-back').setAttribute('onclick','sectionTwoe()'); // Update with previous content
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
      document.getElementById('i-forward').setAttribute('onclick', 'sectionThree()');
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
    <div class="column mini blue-light mono btn" onclick="sectionThreee()">move forward</div><!--Close Button-->
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
    