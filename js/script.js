document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });

            // Close mobile menu after clicking a link
            const menuToggle = document.getElementById("menu-toggle");
            if (menuToggle.checked) {
                menuToggle.checked = false;
            }
        });
    });

    // Active state indication based on scroll position
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".navbar a");

    function setActiveLink() {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href").slice(1) === current) {
                item.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveLink);
    setActiveLink(); // Set initial active state
    
// Image growth animation for highlight section
const highlightImages = document.querySelectorAll(".highlight-images .image-container img");

highlightImages.forEach((img, index) => {
    img.style.transformOrigin = index % 2 === 0 ? "left center" : "right center";
    img.style.transform = "scaleY(0)";
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = "transform 1.2s ease-out";
            entry.target.style.transform = "scaleY(1)";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

highlightImages.forEach(img => observer.observe(img));
      
  // Parallax effect

  const parallaxContainer = document.querySelector(".parallax-container");
  const parallaxBackground = parallaxContainer.querySelector(".parallax-background");
  
  if (parallaxContainer && parallaxBackground) {
      window.addEventListener("scroll", () => {
          const offset = window.scrollY;
          const parallaxSpeed = 0.1;
          console.log(`Applying transform: translateY(${offset * parallaxSpeed}px)`);
          parallaxBackground.style.transform = `translateY(${offset * parallaxSpeed}px)`;
      });
  } else {
      console.error("Parallax container or background not found!");
  }
  


// Parallax effect


    // Grid image animations in portfolio section
    const gridImages = document.querySelectorAll(".portfolio-grid .grid-image-container img");

    gridImages.forEach(img => {
        img.style.transform = "scale(0)";
        img.style.transition = "transform 0.8s ease-out";
    });

    const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "scale(1)";
                gridObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    gridImages.forEach(img => gridObserver.observe(img));
});
