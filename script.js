/* =====================================================
   SHADOW PORTFOLIO
   JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       LOADER
    ================================================= */

    const loader = document.getElementById("loader");
    const loaderBar = document.getElementById("loaderBar");
    const loaderText = document.getElementById("loaderText");

    const messages = [
        "checking suspicious activity...",
        "loading questionable code...",
        "looking for bugs...",
        "bugs found. pretending they're features...",
        "initializing Shadow...",
        "access granted."
    ];

    let progress = 0;
    let messageIndex = 0;

    const loadingInterval = setInterval(() => {

        progress += Math.floor(Math.random() * 12) + 5;

        if (progress > 100) {
            progress = 100;
        }

        if (loaderBar) {
            loaderBar.style.width = progress + "%";
        }

        if (
            progress > messageIndex * 18 &&
            messageIndex < messages.length
        ) {

            if (loaderText) {
                loaderText.textContent =
                    messages[messageIndex];
            }

            messageIndex++;
        }

        if (progress >= 100) {

            clearInterval(loadingInterval);

            setTimeout(() => {

                if (loader) {

                    loader.style.opacity = "0";

                    setTimeout(() => {
                        loader.style.display = "none";
                    }, 600);

                }

            }, 350);

        }

    }, 180);



    /* =================================================
       NAVBAR ACTIVE LINK
    ================================================= */

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const navLinks = document.querySelectorAll(
        ".nav-links a"
    );

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 250;

            if (
                window.scrollY >= sectionTop
            ) {
                currentSection =
                    section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();



    /* =================================================
       SMOOTH NAVIGATION
    ================================================= */

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const target =
                link.getAttribute("href");

            if (
                target &&
                target.startsWith("#")
            ) {

                const element =
                    document.querySelector(target);

                if (element) {

                    event.preventDefault();

                    element.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });



    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".about-content, " +
            ".skills-list, " +
            ".contact-container, " +
            ".contact-card"
        );

    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.7s ease, " +
            "transform 0.7s ease";

    });


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });



    /* =================================================
       PROFILE PHOTO ERROR HANDLING
    ================================================= */

    const profileImages =
        document.querySelectorAll(
            ".hero-photo img, .about-image img"
        );

    profileImages.forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.display = "none";

                const parent =
                    image.parentElement;

                if (parent) {

                    parent.style.background =
                        "linear-gradient(" +
                        "135deg," +
                        "#111018," +
                        "#08080c" +
                        ")";

                    parent.style.minHeight =
                        "250px";

                    parent.style.display =
                        "grid";

                    parent.style.placeItems =
                        "center";

                    const message =
                        document.createElement("div");

                    message.textContent =
                        "PROFILE PHOTO MISSING";

                    message.style.color =
                        "#6d6672";

                    message.style.fontFamily =
                        "DM Mono, monospace";

                    message.style.fontSize =
                        "9px";

                    message.style.letterSpacing =
                        "2px";

                    parent.appendChild(message);

                }

            }
        );

    });



    /* =================================================
       MOUSE PARALLAX
    ================================================= */

    const heroPhoto =
        document.querySelector(
            ".hero-photo"
        );

    if (
        heroPhoto &&
        window.innerWidth > 800
    ) {

        document.addEventListener(
            "mousemove",
            event => {

                const x =
                    (event.clientX /
                        window.innerWidth -
                        0.5);

                const y =
                    (event.clientY /
                        window.innerHeight -
                        0.5);

                heroPhoto.style.transform =
                    `translate(${x * 12}px,
                    ${y * 12}px)`;

            }
        );

    }



    /* =================================================
       BUTTON CLICK EFFECT
    ================================================= */

    const buttons =
        document.querySelectorAll(
            ".primary-button, " +
            ".secondary-button"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                button.style.transform =
                    "scale(0.96)";

                setTimeout(() => {

                    button.style.transform =
                        "";

                }, 120);

            }
        );

    });



    /* =================================================
       SOCIAL LINK EFFECT
    ================================================= */

    const socialIcons =
        document.querySelectorAll(
            ".social-icon"
        );

    socialIcons.forEach(icon => {

        icon.addEventListener(
            "mouseenter",
            () => {

                icon.style.zIndex = "10";

            }
        );

        icon.addEventListener(
            "mouseleave",
            () => {

                icon.style.zIndex = "";

            }
        );

    });



    /* =================================================
       RANDOM STATUS TEXT
    ================================================= */

    const statusText =
        document.querySelector(
            ".status-box > span"
        );

    const statusMessages = [

        "avoiding bugs since birth",

        "probably coding",

        "404: social life not found",

        "coffee.exe running",

        "debugging reality",

        "currently pretending to understand code"

    ];

    if (statusText) {

        let statusIndex = 0;

        setInterval(() => {

            statusIndex++;

            if (
                statusIndex >=
                statusMessages.length
            ) {
                statusIndex = 0;
            }

            statusText.style.opacity = "0";

            setTimeout(() => {

                statusText.textContent =
                    statusMessages[
                        statusIndex
                    ];

                statusText.style.opacity = "1";

            }, 250);

        }, 5000);

        statusText.style.transition =
            "opacity 0.25s ease";

    }



    /* =================================================
       CONSOLE MESSAGE
    ================================================= */

    console.log(
        "%c SHADOW PORTFOLIO ",
        "background:#7c3aed;" +
        "color:white;" +
        "font-size:18px;" +
        "font-weight:bold;" +
        "padding:10px;"
    );

    console.log(
        "%cWelcome to Shadow's website.",
        "color:#a78bfa;" +
        "font-size:14px;"
    );

    console.log(
        "%cIf you're reading this..." +
        " you probably opened DevTools.",
        "color:#77717e;" +
        "font-size:12px;"
    );

    console.log(
        "%cNice try. 😎",
        "color:#66ed8c;" +
        "font-size:14px;"
    );

});