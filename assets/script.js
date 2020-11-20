/*    
@licstart  The following is the entire license notice for the 
JavaScript code in this page.

Copyright (c) 2018-2020 David Rubio

Creative Commons License Attribution-NonCommercial-ShareAlike 3.0 Unported (CC BY-NC-SA 3.0)
This is a human-readable summary of the Legal Code.

You are free:
    to Share — to copy, distribute and transmit the work
    to Remix — to adapt the work

Under the following conditions:
    Attribution — You must attribute the work in the manner specified by the author or licensor (but not in any way that suggests that they endorse you or your use of the work).
    Noncommercial — You may not use this work for commercial purposes.
    Share Alike — If you alter, transform, or build upon this work, you may distribute the resulting work only under the same or similar license to this one.

With the understanding that:
    Waiver — Any of the above conditions can be waived if you get permission from the copyright holder.
    Public Domain — Where the work or any of its elements is in the public domain under applicable law, that status is in no way affected by the license.
    Other Rights — In no way are any of the following rights affected by the license:
        Your fair dealing or fair use rights, or other applicable copyright exceptions and limitations;
        The author's moral rights;
        Rights other persons may have either in the work itself or in how the work is used, such as publicity or privacy rights.
    Notice — For any reuse or distribution, you must make clear to others the license terms of this work. The best way to do this is with a link to this web page.

For details and the full license text, see http://creativecommons.org/licenses/by-nc-sa/3.0/

@licend  The above is the entire license notice
for the JavaScript code in this page.
*/

// Quick and dirty hack to redirect a non-https connection to https
// Somehow GH doesn't like my stuff. Just force it like this.
let host = "mantaro.site";
if ((host == window.location.host) && (window.location.protocol != "https:")) {
    window.location.protocol = "https";
}

function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
    
    // Select queries
    var queries = ['h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'code', 'select'];
    queries.forEach(qry => {
        document.querySelectorAll(qry).forEach(e => {
            e.classList.remove("theme-auto", "theme-light", "theme-dark");
            e.classList.add(`theme-${theme}`);
        });
    });
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
