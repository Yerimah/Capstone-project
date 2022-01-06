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

// Dynamic Speaker Section

projectData = [
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
]