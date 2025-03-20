document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.createElement("button");
    toggle.textContent = "Dark Mode";
    toggle.style.position = "fixed";
    toggle.style.top = "10px";
    toggle.style.right = "10px";
    toggle.style.padding = "5px";
    
    document.body.appendChild(toggle);
    
    toggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Cek localStorage untuk mode gelap
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Toggle Dark Mode
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
