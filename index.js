const elDarkBtn = document.querySelector('.dark')
const elList = document.querySelector('.my-about-list')
const elProject = document.querySelector('.project')


elDarkBtn.addEventListener('click', () => {
    document.body.classList.toggle('bg-black');
    document.body.classList.toggle('text-gray-200');
    elProject.classList.toggle('shadow-white');

    elDarkBtn.classList.toggle('rotate-180');
});