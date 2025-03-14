document.addEventListener("DOMContentLoaded", function () {
    // Hide Loading Animation
    window.addEventListener("load", () => {
        const loading = document.getElementById("loading");
        if (loading) {
            loading.style.display = "none";
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // GSAP Animations
    gsap.from(".navbar", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1, delay: 1 });
    gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 1.3 });
    gsap.from(".hero a", { opacity: 0, scale: 0.5, duration: 0.8, delay: 1.5 });

    // Section animations on scroll
    gsap.utils.toArray(".section").forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // Animate Certificates and Projects
    gsap.utils.toArray(".image-item, .card").forEach(item => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // Scroll Progress Bar
    const scrollProgress = document.querySelector(".scroll-progress");

    window.addEventListener("scroll", () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
    });

    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateToggleIcon(savedTheme);
    }

    // Toggle Theme
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        const currentTheme = body.classList.contains("light-mode") ? "light-mode" : "";
        localStorage.setItem("theme", currentTheme);
        updateToggleIcon(currentTheme);
    });

    // Update Toggle Icon
    function updateToggleIcon(theme) {
        const icon = theme === "light-mode" ? "fa-sun" : "fa-moon";
        themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
    }

    // Back-to-Top Button
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});