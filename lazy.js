$loader = document.querySelector('.loader');
$hero = document.querySelector('.hero');
$about = document.querySelector('.about');
$services = document.querySelector('.services');
$contact = document.querySelector('.contact');

const sections = [$about, $services, $contact].reverse();
const sectionsClass = ['about--lazy', 'services--lazy', 'contact--lazy'].reverse();
let active = false;
let index = sections.length;

window.onload = () => {
    setInterval(() => {
        $loader.classList.add('loader--hidden');
        active = true;
    }, 3000); 
}

setInterval(() => {

    if (active) {
        if (0 < index) {
            index = index - 1;
            sections[index].classList.add(`${sectionsClass[index]}`)
            console.log(sections[index], sectionsClass[index]);
        }
    }

  
}, 1500);

