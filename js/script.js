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