let controls = document.querySelectorAll('.control');
let sections = document.querySelectorAll('.section');
let themeControll = document.querySelector('.theme-control');

controls.forEach(control => {
    control.addEventListener('click', (element) => {
        let currTarget = element.currentTarget;
        controls.forEach(e => {
            e.classList.remove('active-btn')
        });
        currTarget.classList.add('active-btn');

        let controlId = currTarget.dataset.id;
        let controlSec = document.getElementById(controlId);
        sections.forEach(section => {
            section.classList.remove('active')
        });
        controlSec.classList.add('active');

    })
})

themeControll.addEventListener('click', () => {
    document.body.classList.toggle('toggle-theme');
})