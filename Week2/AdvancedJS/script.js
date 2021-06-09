let pi = 3.14159

let divElement = document.createElement('div');

//innerHTML is a DOM
divElement.innerHTML = '<p>My paragraph is here!</p>'

// innerText is the text in the text tag
let welcomeMssg = document.getElementById('welcome');
welcomeMssg.innerText = 'Hello someone else'

// we get a list of two things, because we have two things in the same class
let welcomeMssgs = document.getElementsByClassName('hello');

welcomeMssgs[1].innerText = 'Changed text by DOM';

//changed by tag name
let myH2s = document.getElementsByTagName('h2');

for(let i = 0; i < myH2s.length; i++) {
    myH2s[i].innerText = (`Heading 2 number ${i}`);
}

//change image src by setAttribute
document.getElementsByTagName("img")[0].setAttribute('src', './flower.jpg')