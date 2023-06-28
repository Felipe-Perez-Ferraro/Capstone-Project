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

// Main Program
const programs = [
  {
    image: './images/program_icon_01.png',
    title: 'Lecture',
    description: 'Listen to the speakers from variuos countries abort the   messages of sharing.',
  },
  {
    image: './images/program_icon_02.png',
    title: 'CC Exhibition',
    description: 'Appreciate variuos creations applying CC license of artists, from Art Center Nabi.',
  },
  {
    image: './images/program_icon_03.png',
    title: 'Forum',
    description: 'Have te time to share your thoughts and opinions with experts for each topic.',
  },
  {
    image: './images/program_icon_04.png',
    title: 'Workshop',
    description: 'Try creating your own work using open source license rather than just watching.',
  },
  {
    image: './images/program_icon_05.png',
    title: 'CC Ignite',
    description: 'Get opportunities to network with CC affiliates around the world, aslo after the summit.',
  },
];

const speakers = [
  {
    image: './images/speaker_01.png',
    name: 'Yochai Benkler',
    profession: 'Berkman Professor of Entreprenurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal bool The Wealth of Networks in 2006.',
  },
  {
    image: './images/speaker_02.png',
    name: 'Kilnam Chon',
    profession: '',
    description: "Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. in 2012, he was inducted into the inaugural class of the Internet Society's(ISOC) Internet Hall of Fame",
  },
  {
    image: './images/speaker_03.png',
    name: 'SohYeong Noh',
    profession: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-diciplinary collaboration and understanding among science technology, humanities, and the arts.',
    class: 'hidde',
  },
  {
    image: './images/speaker_04.png',
    name: 'Julia Leda',
    profession: 'President of Young Pirates of Europe',
    description: "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential chancges EU copyright law was approved by the Parlament in July.",
    class: 'hidde',
  },
  {
    image: './images/speaker_05.png',
    name: 'Lila Tretikov',
    profession: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Exectuvie Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely avaiable un 290 languages and used by nearly half a billion people around the world every month',
    class: 'hidde',
  },
  {
    image: './images/speaker_06.png',
    name: 'Ryan Merkley',
    profession: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects as the Mozilla Foundation such as the open source movement.',
    class: 'hidde',
  },
];

const printProgram = () => {
  const programSection = document.getElementById('programSection');
  programs.forEach((program) => {
    const ul = document.createElement('ul');
    ul.classList.add('program__list__container');
    ul.innerHTML = `
        <li class="program__list__item">
            <figure class="program__image__container">
                <img src="${program.image}" alt="lecture_img"
                class="program__list__image">
            </figure>
            <h3 class="program__list__title">${program.title}</h3>
            <p class="program__list__paragraph">
                ${program.description}
            </p>
        </li>
        `;
    programSection.appendChild(ul);
  });

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

// Featured Speakers
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