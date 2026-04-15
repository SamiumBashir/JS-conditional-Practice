const allHeading = document.getElementsByTagName('h1');

for(let headings of allHeading){
    headings.innerText = 'Atao naki heading';
    headings.innerText = headings.innerText.replace('Atao', 'Otao')
    console.log(headings.innerText);
}

const listItems = document.getElementById('list');

const items = document.querySelectorAll('#list li')

items[1].innerText = 'ami valo achi';
items[1].style.color = 'red';
items[1].style.backgroundColor = 'black'

//parent element 

const section = document.createElement('section');

const cardBox = document.createElement ('div');
const heading = document.createElement('h1');
heading.innerText = 'This is a heading'

//append child

section.appendChild(heading);
section.appendChild(cardBox);

//loop

for (let i = 1; i <= 3; i++) {
  const card = document.createElement('div');

  // child element
  const h1 = document.createElement('h1');
  h1.innerText = `Card Title ${i}`;

  const p = document.createElement('p');
  p.innerText = `This is card number ${i}`;

  // append
  card.appendChild(h1);
  card.appendChild(p);

  // style (optional)
  card.style.backgroundColor = '#fff';
  card.style.margin = '10px 0';
  card.style.padding = '10px';
  card.style.borderRadius = '8px';

  //append
  cardBox.appendChild(card);
}


//append

document.body.appendChild(section);

// section style
section.style.backgroundColor = '#aaa';
section.style.padding = '15px';
section.style.margin = '0 350px';
section.style.border = '2px solid green';
section.style.borderRadius = '12px';

cardBox.style.display = 'flex'
cardBox.style.justifyContent = 'space-around'



