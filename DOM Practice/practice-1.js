const allHeading = document.getElementsByTagName('h1');
console.log (allHeading);
for(let headings of allHeading){
    headings.innerText = 'Atao naki heading';
    headings.innerText = headings.innerText.replace('Atao', 'Otao')
    console.log(headings.innerText);
}

const listItems = document.getElementById('list');
console.log (listItems);

const items = document.querySelectorAll('#list li')
console.log( items[1]);

items[1].innerText = 'ami valo achi';
items[1].style.color = 'red';
items[1].style.backgroundColor = 'black'

//parent element 

const section = document.createElement('section');


// child element 

const h1 = document.createElement('h1');
h1.innerText = 'Hola Hola Shakib'
const p = document.createElement(p)
p

// append to parent elemet ;


section.appendChild(h1)
document.body.appendChild(section);


