# part-attributes
Set up this-module-config.js file

## Config
```
const reviewmode = 'true'; 
```
Set to this to 'true' to enable Reviewer Feedback mode. IMPORTANT: You must set this to any other value before going 'live' with the project. Review Mode is for development only.

```
const thismodulename = 'My Topic';
```
Set this to the name of your Topic. This name will be displayed in the header of the learning course and is visible to users.

```
const thismoduleshortname = 'mytopicidentifier';
```
Set this to a unique string relevant to your project e.g. 'mytopicidentifier'. This name is not visible to users but is used to store local storage values.

```
const numberofsections = '6';
```
Set this to the number of sections that you will have in your Topic. The number is displayed in the header and is visible to users.

```
const startsection = 'Welcome';
const section1 = 'Section 1 Name';
const section2 = 'Section 2 Name';
const section3 = 'Section 3 Name';
const section4 = 'Section 4 Name';
const section5 = 'Section 5 Name';
const section6 = 'Section 6 Name';
```
Set this to the name of your sections. Names are displayed to the user. You can add or remove lines as required.

```
if(reviewmode == 'true')
{
var script = document.createElement("script");
script.src = "App/review.js"; 
document.body.appendChild(script);
}
```
Do not edit this. This is required if reviewmode is set to 'true'.

## Media

Include all media files (images, videos, etc) in the Media folder.

## Styling

Include custom CSS in this-module.css file (not i-module-ui.css).

## Content

Content is dynamically updated by this-module-content.js. Your content should reside in this file.
Here is an example of a frame or slide:

```
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
```

First the function is defined (you edit the function name with your specific frame/section e.g sectionOnea(), sectionTwo() - just be sure to keep them unique.):

```
function sectionOne(){
```

Then a variable named 'newcontent' is declared:

```
var newcontent =
```

Your content should reside inside the backticks:

```
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
<div class="column mini blue-light mono btn" onclick="sectionOnea()">move forward</div><!--Move Forward Button-->
</div><!--End Columns Container-->
</div><!--End Content-->
`
```

The basic content starts with:

```
<div name="intro1" class="slide dark">
```
You should give the div a 'name' to identify the section/frame. The class 'slide dark' should be suitable in most cases.

Next we have a container for our columns (based on flexbox):

```
<div class="columns white animate__animated animate__slideInRight">
```
Animate.css is used for slide transitions/animations (https://animate.style/). You can change the animation but changing the class e.g animate__slideInRight > animate__backInUp.

Then we have our column (this is where your content will go):

```
<div class="column third light">
```
The size of the column can be changed. In this example we have the class 'column third' which is a 33.33% layout. For example this is good if you want 3 columns.
In the css, the following column size classes are defined:

```
.column.half{
flex:1 0 50%;
}
.column.quarter {
flex:1 0 25%;
}
.column.mini {
flex:1 0 20%;
}
.column.larger {
flex:1 0 35%;
}
.column.third {
flex:1 0 33.33%;
}
.column.fill {
flex:100%;
}
```

The class 'white' defines the background-color of the column. This can be changed e.g remove white and change to 'light'.

In the css, the following colour classes are defined:

```
/* Color style for Active Blue - adds background and text color*/
.blue{
background-color:var(--active-blue)!important;
color:var(--white)!important;
}
/* Color style for Gray - adds background and text color*/
.gray{
background-color:var(--medium-gray);
color:var(--black);
}
/* Color style for Media BG Gray - adds background and text color*/
.media-gray{
background-color:var(--media-bg-gray);
color:var(--black);
  }
.dark{
background-color:var(--dark-gray);
color:var(--white);
}
.light{
background-color:var(--light-gray)!important;
color:var(--black)!important;
}
/* Color style for Black - adds background and text color*/
.black{
background-color:var(--black);
color:var(--white);
}
/* Color style for White - adds background and text color*/
.white{
background-color:var(--white);
color:var(--black);
}
/* Color style for White - adds background and text color*/
.cyan-light{
background-color:var(--cyan-light);
color:var(--black);
}
.cyan-dark{
background-color:var(--cyan-dark);
color:var(--white);
}
.purple-light{
background-color:var(--purple-light);
color:var(--black);
}
.purple-dark{
background-color:var(--purple-dark);
color:var(--white);
}
.success{
background-color:var(--success)!important;
color:var(--white);
}
.error{
background-color:var(--error)!important;
color:var(--white);
}
.blue-light{
background-color:var(--light-blue)!important;
color:var(--white);
}
.caution-color{
background-color:var(--caution);
color:var(--black);
}
.caution-color-light{
background-color:var(--caution-light);
color:var(--black);
}
```
If you have text heavy content you can also add 'overflow-icon' class. This will allow scrolling on mobile and display an icon. E.g:

```
<div class="column half white overflow-icon">
```

Generally, a column is used as a navigation button to move forward to the next frame/section. It is the last column element inside you 'columns' container.:

```
<div class="column mini blue-light mono btn" onclick="sectionOnea()">move forward</div><!--Move Forward Button-->
```
Here you should change the onclick to reflect one of your sections in this-module-content.js. E.g. this determines the content to tbe loaded next when clicked.

When you have added your content, the rest of the function is straightforward:

```
learningcontent.innerHTML = newcontent;
sectionname.innerHTML = section1 + section1indicator; // Update with section name
stepback.setAttribute('onclick','startFrame()'); // Update with previous content
lastView(); // Update local storage with current page
```

```
sectionname.innerHTML = section1 + section1indicator; // Update with section name
```
Update this with the number of your section. It determines what title/text is displayed in the header.

```
stepback.setAttribute('onclick','startFrame()'); // Update with previous content
```
Update this with where you want the back button to point to. E.g instead of 'stepback.setAttribute('onclick','startFrame()');' > 'stepback.setAttribute('onclick','sectionThreea()');'


## Experimenting
Use the templating.html file to experiment with content. Just add content between these tags:

`<div id="i-content-template"><!--Test your content between these tags-->`
`</div><!--Test your content between these tags-->`

Content can then be added to this-module-content.js file.
