// Navbar
const menuOpen = document.getElementById('menuOpen');
menuOpen.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar__container');
  navbar.classList.toggle('showNavbar');

  if (window.matchMedia('(max-width: 768px)').matches) {
    if (navbar.classList.contains('showNavbar')) {
      menuOpen.classList.add('fa-times');
      menuOpen.classList.remove('fa-bars');
      navbar.style.left = '0';
      document.body.style.overflow = 'hidden';
    } else {
      menuOpen.classList.remove('fa-times');
      menuOpen.classList.add('fa-bars');
      document.body.style.overflow = 'scroll';
      navbar.style.left = '-100%';
    }
  }
});

// Featured Speaers
const speakers = [
  {
    image: './images/speaker_01.png',
    name: 'Yochai Benkler',
    profession: 'Full Stack Developer in Microsoft',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium asperiores ad ex ullam!',
  },
  {
    image: './images/speaker_02.png',
    name: 'Kilnam Chon',
    profession: 'Front-End Developer in Facebook',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium asperiores ad ex ullam!',
  },
  {
    image: './images/speaker_03.png',
    name: 'SohYeong Noh',
    profession: 'Back-End Developer in Twitter',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium asperiores ad ex ullam!',
    class: 'hidde',
  },
  {
    image: './images/speaker_04.png',
    name: 'Julia Leda',
    profession: 'Back-End Developer in Apple',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium asperiores ad ex ullam!',
    class: 'hidde',
  },
  {
    image: './images/speaker_05.png',
    name: 'Lila Tretikov',
    profession: 'Full Stack Developer in Apple',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium asperiores ad ex ullam!',
    class: 'hidde',
  },
  {
    image: './images/speaker_06.png',
    name: 'Ryan Merkley',
    profession: 'Front-End Developer in Samsung',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium asperiores ad ex ullam!',
    class: 'hidde',
  },
];

const printProgram = () => {
  const speakersSection = document.getElementById('featuredSpeakers');
  speakers.forEach((speaker) => {
    const ulSpeakers = document.createElement('ul');
    ulSpeakers.classList.add('speakers__list__container');
    ulSpeakers.classList.add(`${speaker.class}`);
    ulSpeakers.innerHTML = `
    <li class="featured__speakers__item">
        <div class="speaker__description__container">
            <figure>
                <img src="${speaker.image}" alt="" class="featured__speaker__image">
            </figure>
            <div class="featured__speaker__nameAndProfession">
                <h3 class="featured__speaker__name">${speaker.name}</h3>
                <h4 class="featured__speaker__profession">${speaker.profession}</h4>
                <hr>
                <p class="featured__speaker__description">${speaker.description}</p>
            </div>
        </div>
    </li>
    `;
    speakersSection.appendChild(ulSpeakers);
  });
};

// Show more button
const speakerButton = document.getElementById('speakersButton');
const showMore = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const elements = document.querySelectorAll('.hidde');
    elements.forEach((el) => {
      el.style.display = 'none';
    });

    speakerButton.addEventListener('click', () => {
      speakerButton.classList.toggle('show');
      elements.forEach((el) => {
        if (speakerButton.classList.contains('show')) {
          el.style.display = 'block';
          speakerButton.innerHTML = `
          LESS
          <i class="fa-solid fa-chevron-up"></i>
          `;
        } else {
          el.style.display = 'none';
          speakerButton.innerHTML = `
          MORE
          <i class="fa-solid fa-chevron-down"></i>
          `;
        }
      });
    });
  }
};

printProgram();
showMore();