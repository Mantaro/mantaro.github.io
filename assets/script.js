function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
    document.querySelectorAll('h2').forEach(e => {
        e.classList.remove("theme-auto", "theme-light", "theme-dark");
        e.classList.add(`theme-${theme}`);
    });;
    
    document.querySelectorAll('strong').forEach(e => {
        e.classList.remove("theme-auto", "theme-light", "theme-dark");
        e.classList.add(`theme-${theme}`);
    });;
    
    document.querySelectorAll('code').forEach(e => {
        e.classList.remove("theme-auto", "theme-light", "theme-dark");
        e.classList.add(`theme-${theme}`);
    });;
}

document.addEventListener("DOMContentLoaded", () => {
   document.querySelector("#theme").addEventListener("change", function() {
        applyTheme(this.value);
   });
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "auto";

    applyTheme(savedTheme);

    for (const optionElement of document.querySelectorAll("#theme option")) {
        optionElement.selected = savedTheme === optionElement.value;
    }

    document.querySelector("#theme").addEventListener("change", function () {
        localStorage.setItem("theme", this.value);
        applyTheme(this.value);
    });
});
