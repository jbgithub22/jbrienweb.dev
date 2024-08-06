document.querySelector('.footer a').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const toggleButton = document.getElementById('toggle-button');
const toc = document.getElementById('toc');

toggleButton.addEventListener('click', function () {
    toc.classList.toggle('open');
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImage = document.getElementById('fullscreenImage');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const prevFullscreen = document.getElementById('prevFullscreen');
const nextFullscreen = document.getElementById('nextFullscreen');

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
};

const updateFullscreenImage = (index) => {
    fullscreenImage.src = slides[index].src;
};

const nextSlide = () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
    updateFullscreenImage(slideIndex);
};

const prevSlide = () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
    updateFullscreenImage(slideIndex);
};

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        fullscreen.style.display = 'flex';
        fullscreenImage.src = slide.src;
        slideIndex = index;
    });
});

fullscreen.addEventListener('click', () => {
    fullscreen.style.display = 'none';
});

next.addEventListener('click', (e) => {
    e.stopPropagation();
    nextSlide();
});

prev.addEventListener('click', (e) => {
    e.stopPropagation();
    prevSlide();
});

nextFullscreen.addEventListener('click', (e) => {
    e.stopPropagation();
    nextSlide();
});

prevFullscreen.addEventListener('click', (e) => {
    e.stopPropagation();
    prevSlide();
});

const toggleCodeContent = (id) => {
    const codeContent = document.getElementById(id);
    if (codeContent.style.display === 'none' || codeContent.style.display === '') {
        codeContent.style.display = 'block';
    } else {
        codeContent.style.display = 'none';
    }
};

document.addEventListener('keydown', (e) => {
    if (fullscreen.style.display === 'flex') {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    }
});