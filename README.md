# Acces to the DOM easily like jQuery

Simply copy the functions from [script.js](/script.js) file and copy them in your  .js file

Now you can access to DOM elements by writing:
```js
get('.myClass'); // returns an array of elements with class = "myClass"
get('#myId'); // returns an element  with id = "myId"
get('div'); // returns an array of elements with tag name = "div"
styleAll('.myClass', 'color', 'red'); // change the color of all the elements with class = "myClass"
```