const hambuger = document.querySelector('#hambug');
const closetog = document.querySelector('#togclose');
const toggleMenu = document.querySelector('.toggle-menu');

function show() {
  toggleMenu.style.display = 'flex';
  toggleMenu.style.top = '0';
}

function close() {
  toggleMenu.style.top = '-100%';
}

hambuger.addEventListener('click', show);
closetog.addEventListener('click', close);

document.querySelectorAll('.list-menu').forEach((link) => link.addEventListener('click', close));

const projectData = [
  {
    id: 0,
    name: 'Deborah Ojengbede',
    image: './images/first.png',
    role: 'Deborah Ojengbede is the CEO of AFEN Blockchain Group',
    desc: 'A seasoned banker with over 5 years of working experience in the Banking industry.',
  },

  {
    id: 1,
    name: 'Emmanuel Lubanzadio',
    image: './images/second.png',
    role: 'Emmanuel Lubanzadio is Head of Public Policy for Sub-Saharan Africa on Twitter’s Public Policy EMEA Team in Dublin.',
    desc: 'A seasoned business analyst with over 10 years of working experience in the Tech industry.',
  },

  {
    id: 2,
    name: 'Elizabeth Rosiello',
    image: './images/third.png',
    role: 'Elizabeth Rossiello is the CEO and founder of AZA Finance',
    desc: 'Elizabeth founded AZA Finance in 2013 in Nairobi, Kenya.',
  },

  {
    id: 3,
    name: 'Hugo Obi',
    image: './images/Untitled.png',
    role: 'Hugo Obi is the founder of Maliyo',
    desc: 'A design studio known for developing African-inspired games for mobile devices.',
  },

  {
    id: 4,
    name: 'Seun Alley',
    image: './images/fifth.png',
    role: 'Seun Alley is a top-performing Business Operations Executive',
    desc: 'With a proven track record of strengthening compliance; improving processes and elevating output.',
  },

  {
    id: 5,
    name: 'Kojo Boakye',
    image: './images/sixth.png',
    role: 'Kojo Boakye is the Head, Public Policy, Africa Facebook',
    desc: 'He’s an experienced ICT for Development Practitioner, with more than 10 years’ experience working with governments.',
  },
];

const cards = document.querySelector('.card-container');
for (let i = 0; i < projectData.length; i += 1) {
  const speakers = document.createElement('div');
  speakers.className = 'card';

  const fcards = `
    <div>
    <img src="${projectData[i].image}" alt="featured-speaker">
    </div>
    <div class="bio">
        <h3>${projectData[i].name}</h3>
        <p id="title">${projectData[i].role}</p>
        <hr>
        <p>${projectData[i].desc}</p>
    </div>
    `;

  speakers.innerHTML = fcards;
  cards.appendChild(speakers);
}

const moreBtn = document.querySelector('.speaker-btn');
const lessBtn = document.querySelector('.show-less');

moreBtn.addEventListener('click', () => {
  document.querySelectorAll('.card').forEach((c) => {
    c.style.display = 'flex';
  });

  lessBtn.style.display = 'block';

  moreBtn.style.display = 'none';
});

lessBtn.addEventListener('click', () => {
  document.querySelectorAll('.card:not(:first-child):not(:nth-child(2))')
    .forEach((c) => {
      c.style.display = 'none';
    });

  lessBtn.style.display = 'none';

  moreBtn.style.display = 'block';
});