
    // Function to highlight the active link in the navigation menu
    function highlightNavLink() {
        // Get all the section elements
        const sections = document.querySelectorAll("section");

        // Get the navbar links
        const navLinks = document.querySelectorAll(".nav-link");

        // Function to check if an element is in the viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to add or remove the 'active' class to/from a link
        function toggleActiveLink(section, link) {
            if (isElementInViewport(section)) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }

        // Add an event listener to the window to handle scrolling
        window.addEventListener("scroll", function () {
            sections.forEach((section, index) => {
                toggleActiveLink(section, navLinks[index]);
            });
        });
    }

    // Call the highlightNavLink function when the page loads
    window.addEventListener("load", highlightNavLink);

