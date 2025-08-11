const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if(top < triggerBottom){
            sec.classList.add("show");
        }
    });
});
