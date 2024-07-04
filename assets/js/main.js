/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });


document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'assets/img/perfil.png',
        'https://img.freepik.com/premium-photo/graphic-designer-girl-anime_531533-7051.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1719792000&semt=ais_user',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYkjxpr67oNCGWabvndzm2n2e4g5ncd-RKPi0K6U87F89W3M4q6-WQuuFEtYTIILK8cg&usqp=CAU'
    ];
    let currentIndex = 0;
    const blobImg = document.querySelector('.home__blob-img');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        blobImg.setAttribute('href', images[currentIndex]);
    }, 5000); // Change image every 5 seconds
});


// saving data in localhost
const form = document.querySelector('.contact__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // making the data an object
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        phone: document.getElementById('phone').value,
        age: document.getElementById('age').value,
        url: document.getElementById('url').value,
        country: document.getElementById('country').value,
        message: document.getElementById('message').value
    };

    // throwing error if user is less than 18 years old
    if (formData.age < 18) {
        alert('You must be 18 years or older to use this website.')
    }

    // checking if all fields are filled

    for (let data in formData) {
        if (formData[data] === '') {
            alert('Fill all the details');
            form.reset();
            return;
        }
    }


    const storedData = JSON.parse(localStorage.getItem('formData'));

    // checking if data already exists in localstorage

    if (storedData) {
        alert('Data already exists');
        form.reset();
        return;
    }

    // if doesnt exist in local storage, then save in localstorage
    localStorage.setItem('formData', JSON.stringify(formData));

    alert('Data saved successfully');
});



