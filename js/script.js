/* Collapsing Icons/Divs */

const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
        removeActiveClasses();
        icon.classList.add("active");
    });

    icon.addEventListener("mouseleave", () => {
        removeActiveClasses();
    });
});

const removeActiveClasses = () => {
    icons.forEach((icon) => {
        icon.classList.remove("active");
    });
};

/* Portfolio Links */

document.getElementById('makerPortfolio')
.addEventListener('click', function () {
  window.location.href = 'https://cezarbarcoma.wordpress.com/';
});

document.getElementById('photoPortfolio')
.addEventListener('click', function () {
  window.location.href = 'https://cezarbarcoma.wordpress.com/';
});

document.getElementById('designPortfolio')
.addEventListener('click', function () {
  window.location.href = 'https://cezarbarcoma.wordpress.com/';
});

/* Blog Links */

document.getElementById('u1')
.addEventListener('click', function () {
  window.location.href = 'https://jbtekblog.wordpress.com/2023/12/10/solved-ci-cd-to-aws-ec2-with-github-actions/';
});

document.getElementById('u2')
.addEventListener('click', function () {
  window.location.href = 'https://jbtekblog.wordpress.com/2023/12/08/solved-linking-a-namecheap-domain-to-an-aws-ec2-instance/';
});

document.getElementById('u3')
.addEventListener('click', function () {
  window.location.href = 'https://jbtekblog.wordpress.com/2023/11/16/moving-from-hostinger-to-aws-ec2-with-a-namecheap-domain-name/';
});

document.getElementById('u4')
.addEventListener('click', function () {
  window.location.href = 'https://jbtekblog.wordpress.com/2023/11/12/web-hosting-web-development/';
});

document.getElementById('u5')
.addEventListener('click', function () {
  window.location.href = 'https://jbtekblog.wordpress.com/2023/10/31/hello-world-2/';
});