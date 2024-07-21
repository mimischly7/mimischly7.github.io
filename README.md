## Where is my data?
Where is all the information about my biography, projects, experiences,
e.t.c. that are visible on my website actually stored? I have made a 
`data` directory in `src` that contains `JSON` files with all the needed data
(`projects.json`, `experiences.json`, ...). A component that needs data from one
of these files *imports* the `JSON` file (e.g. `import contact_json from './data/contact.json'`) and
can then use its content as a typical JavaScript object.

What this achieves is the decoupling of application data from UI code. Specifically, it allows us
to separate concrete business data (such as information on projects) from html code.

## Adding `code` fonts to text
Say you have a description of your project, which says "I used Python for the backend 
and React for the frontend to predict stock prices".
It would be nice if the words Python and React had a nice code-like font, so the text would like
"I used `Python` for the backend and `React` for the frontend to predict stock prices".

In html, you write in-line code (i.e. have text look like code) by enclosing the required text
in a `<code>` tag. For example, you can have `<code class="my-cass"> Python </code>`, where `my-class`
is used by css to further style your code.

Now, in my json files, text is in string format. So what can I do in my components (which receive
these strings) to style code segments as needed?

### Failed Attempt
My first thought was to get the entire string, and for every substring that matches one of the 
designated keywords (e.g. "Python", "Java", ...), replace it with a `<code>` enclosure of that substring.
This was easy to do (JavaScript even has a replaceAll method for strings).

*Here's the problem*:
XSS (cross-site-scripting) is a security vulnerability -a type of injection- where hackers can inject
malicious scripts in html code.
Check https://stackoverflow.com/questions/33644499/what-does-it-mean-when-they-say-react-is-xss-protected
for more info.

ReactJS is said to be XSS-protected because it takes many measures to prevers XSS-attacks,
one of which (the reason why this attempt fails) is **escaping string variables in views**.
If you are returning the string `"Hey <b> Alex </b>"` in your *component*, React will automatically
**escape** the characters, so when the code actually gets rendered into html, the `<b>` tag will have
been escaped, and it will have no effect.

Clearly then, it is not possible to simply replace all keyword substrings with `<code>...<code>` of that
substring, since the tag will be escaped. Now what?

### Solution
Idea: Turn the string into an array of substrings (split based on the keyword) and convert
each keyword-substring array elements into the desired components (`<code>` in our case). Then
the component returns that array (or a `<div>` enclosure of that array if you want a single DOM element).
1. Split the string into an array based on the designated keywords, and the array must include the keyword.
So, given that the designated keywords are `["Python", "Java"]`, the string `"I used Python there"` will 
lead to `["I used ", "Python", " there"]`.
2. For each element of the array (created in step 1) that is a keyword, enclose it with 
`<code className=...> ... </code>` using `JSX`.
3. Return the array (or a `<div>` enclosure of that array if you want a single DOM element).

This exact strategy is implemented in the `./CodeFontStyler.js` component.

***
June 11, 2024

### React Router
Client-side routing allows your app to update the URL from a link
click without making another server request (to retrieve the html/css/js documents).
Instead, the app can immediately render new UI and make data requests
with `fetch` to update the page with new information (that actually
needs to be requested from the server).

Primary Components of React Router:
1. Routers
2. Router Matchers
3. Navigation ("route changers")