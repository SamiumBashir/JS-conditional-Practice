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

// loop দিয়ে multiple card বানাও
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

  // section এ add
  section.appendChild(card);
}

// শেষে body তে add
document.body.appendChild(section);

// section style
section.style.display = 'flex';
section.style.justifyContent = 'space-around'
section.style.gap = '20px'
section.style.maxWidth = '1140px';
section.style.backgroundColor = '#aaa';
section.style.padding = '15px';
section.style.margin = '0 150px';
section.style.border = '2px solid green';
section.style.borderRadius = '12px';



