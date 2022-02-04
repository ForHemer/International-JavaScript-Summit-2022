const hamburgerButton = document.querySelector('.btn-hamburger-menu');
const mobileMenu = document.querySelector('.default-navbar');
const closeButton = document.querySelector('.btn-close');

hamburgerButton.addEventListener('click', (e) => {
  e.target.style.display = 'none';
  mobileMenu.style.display = 'block';
  setTimeout(() => {
    mobileMenu.style.right = '0px';
  }, 1);
});

closeButton.addEventListener('click', () => {
  mobileMenu.style.right = '-800px';
  setTimeout(() => {
    mobileMenu.style.display = 'none';
  }, 900);
  hamburgerButton.style.display = 'block';
});

document.querySelectorAll('.menu-items').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.right = '-800px';
    setTimeout(() => {
      mobileMenu.style.display = 'none';
    }, 900);
    hamburgerButton.style.display = 'block';
  });
});



// Create speaker object
const speakerslistitem = [
  {
    id: '1',
    index: 0,
    name: 'Obed Preval',
    title: 'Google Developer Expert in Web Technologies & IoT.',
    image: 'images/speakers/1.yochai.png',
    achievement: 'Obed is a founder and active contributor to two conferences on mobile and Angular developers respectively.'    
  },
  {
    id: '2',
    index: 1,
    name: 'Rodino Jules D.M.',
    title: 'Web development expert, Web Technologies GDE, Microsoft Development Technologies MVP',
    image: 'images/speakers/2.kilnam.png',
    achievement: 'Consulting for various enterprises and companies, co-author of several Microsoft Official Courses (MOCs) and training kits' 
  },
  {
    id: '3',
    index: 2,
    name: 'Ghismonde Arnold',
    title: 'Trainer, consultant and programming architect with a focus on Angular',
    image: 'images/speakers/3.sohyeong.png',
    achievement: 'Google Developer Expert (GDE) and Trusted Collaborator in the Angular team who writes for O’Reilly and the German Java Magazine.' 
  },
  {
    id: '4',
    index: 3,
    name: 'Widlyne Nozin',
    title: 'Web developer, author and CEO of NOZINS ENTERPRISES.',
    image: 'images/speakers/4.julia.png',
    achievement: 'Google developer expert in Angular and web technologies.' 
  },
  {
    id: '5',
    index: 4,
    name: 'Gidna Chekele Etienne',
    title: 'Developer Advocate for Web Browser Samsung Internet',
    image: 'images/speakers/5.lila.png',
    achievement: 'Co-chair of the W3C Immersive Web Groups, developing WebXR to bring VR & AR to web browsers.' 
  },
  {
    id: '6',
    index: 5,
    name: 'Jn Parnel Vital',
    title: 'Frontend developper, author',
    image: 'images/speakers/6.ryan.png',
    achievement: 'Google developer expert in javaScript and web technologies.' 
  },
];

/* ==========Generate each speaker========== */
const speakerContainer = document.querySelector('.speakerslist');
speakerslistitem.forEach((speaker) => {
  const container = document.createElement('div');
  container.classList.add('speaker-item');
  container.innerHTML = `
    <img class="speaker-picture" src="${speaker.image}" alt="speaker picture" />
    <div class="speaker-details">
        <p class="speaker-name">${speaker.name}</p>
        <p class="speaker-title">${speaker.title}</p>
        <hr class="hrline">
        <p class="speaker-achievement">${speaker.achievement}</p>        
    </div>    
  `;
  speakerContainer.appendChild(container);
});
