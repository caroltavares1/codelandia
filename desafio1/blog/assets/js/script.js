const icons = document.querySelectorAll('.icon')
console.log(icons)
icons.forEach((icon) => {
    icon.addEventListener('click', function () {
        icon.classList.toggle('bi-heart');
        icon.classList.toggle('bi-heart-fill');
    });
});

icons.forEach((icon) => {
    icon.addEventListener('mouseenter', function () {
        icon.classList.toggle('bi-heart');
        icon.classList.toggle('bi-heart-fill');
    });
});

icons.forEach((icon) => {
    icon.addEventListener('mouseleave', function () {
        icon.classList.toggle('bi-heart');
        icon.classList.toggle('bi-heart-fill');
    });
});
