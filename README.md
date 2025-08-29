<h1> Answer to the question no: 1 </h1>
<ul>
  <li>1. getElementById
    <ol> Select element by id. </ol>
    <ol>Returns only one element.</ol>
    <ol>ID is unique → fastest method.</ol>
  </li>
</ul>

<ul>
  <li>2. getElementsByClassName
    <ol> *Select elements by class name.</ol>
    <ol>*Returns an HTMLCollection (list of elements).</ol>
    <ol>*Collection is live (updates if DOM changes).</ol>
  </li>
</ul>
<ul>
  <li>3. querySelector
    <ol>*Selects the first element matching a CSS selector.</ol>
    <ol>*Returns one element only.</ol>
    <ol>*Works with id, class, tag, attributes etc.</ol>
  </li>
</ul>

<ul>
  <li>4. querySelectorAll
    <ol>*Selects all elements matching a CSS selector.</ol>
    <ol>*Returns a NodeList (list of elements).</ol>
    <ol>*NodeList is static (doesn’t update automatically).</ol>
  </li>
</ul>


<h1>Answer to the question no: 2</h1>
<ul> 
  <li>Create a new element using document.createElement().</li>
  <li>Add content or attributes using .innerText, .innerHTML, or .setAttribute().</li>
  <li>Find the parent element where you want to insert.</li>
  <li>Insert the element using .appendChild() or .append().</li>

<h1>Answer to the question no: 3</h1>
<p>Definition:

Event Bubbling is a process in the DOM where an event starts from the target element (the element that triggered the event) and then bubbles upwards to its parent elements, one by one, until it reaches the root (document).</p>
<p></p>
 <li>How it Works
    <ol>*Suppose you click on a button inside a div.</ol>
    <ol>*First, the event is handled by the button (target element).</ol>
    <ol>*Then the same event moves to its parent div.</ol>
   <ol>*After that, it goes to the body, then html, and finally the document.</ol>
   <ol>*This upward movement is called bubbling.</ol>
  </li>

  <h1>Answer to the Question no: 4 </h1>
  <P>Event delegation হলো একটি কৌশল যেখানে parent element এ একবার event listener বসানো হয় এবং child element গুলোর event bubble হয়ে parent এ ধরা পড়ে।</P>
  <li>How it Works
    <ol>*অনেকগুলো child element এর জন্য আলাদা listener বসাতে হয় না।</ol>
    <ol>*dynamic element (পরে DOM এ যুক্ত হওয়া element) এর জন্যও কাজ করে।</ol>
    <ol>*কোড কমপ্যাক্ট ও পরিষ্কার হয়।</ol>
  </li>

 <h1>Answer to the Question no: 5 </h1>
 <ul>preventDefault() → element এর default কাজ বন্ধ করে।</ul>
 <ul>stopPropagation() → event কে parent এ যেতে বাধা দেয়।</ul>
  

  






</ul>


