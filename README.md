# part-attributes
Set up this-module-config.js file

```
let reviewmode = 'true'; // Set to 'true' to enable Reviewer Feedback mode

const thismodulename = 'Part Attributes'; // Enter name of Module here e.g 'My New Module &#47;'
const thismoduleshortname = 'partattr'; // Enter a unique short name for your Module
const numberofsections = '6'; // Enter total number of sections in this module

const startsection = 'Welcome'; // Name of Welcome/Start Section
const section1 = 'Introduction'; // Name of your first section
const section2 = 'The What'; // Name of your second section
const section3 = 'The Attributes'; // Name of your third section
const section4 = 'The What If'; // Name of your fourth section
const section5 = 'The How'; // Name of your fourth section
const section6 = 'The Help'; // Name of your fourth section

if(reviewmode == 'true')
{
var script = document.createElement("script");
script.src = "App/review.js"; 
document.body.appendChild(script);
}
```

Include all media files (images, videos, etc) in the Media folder.

Use the templating.html file to experiment with content. Just add content between these tags:

`<div id="i-content-template"><!--Test your content between these tags-->`
`</div><!--Test your content between these tags-->`

Content can then be added to this-module-content.js file.

Include custom CSS in this-module.css file (not i-module-ui.css).
