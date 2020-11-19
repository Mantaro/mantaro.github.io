function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
    document.strong.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.strong.classList.add(`theme-${theme}`);
    document.code.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.code.classList.add(`theme-${theme}`);
    document.h2.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.h2.classList.add(`theme-${theme}`);
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
