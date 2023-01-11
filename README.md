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

##Media

Include all media files (images, videos, etc) in the Media folder.

Use the templating.html file to experiment with content. Just add content between these tags:

`<div id="i-content-template"><!--Test your content between these tags-->`
`</div><!--Test your content between these tags-->`

Content can then be added to this-module-content.js file.

Include custom CSS in this-module.css file (not i-module-ui.css).
