// Smooth scrolling for navigation links
document.querySelectorAll(".nav-item").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      // Get the height of the sticky navigation
      const navHeight = document.querySelector("nav").offsetHeight

      // Calculate the position to scroll to (element position - nav height - some padding)
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20

      // Smooth scroll to the target
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Add active class to navigation items on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-item")

  let currentSection = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    const navHeight = document.querySelector("nav").offsetHeight

    if (window.pageYOffset >= sectionTop - navHeight - 50) {
      currentSection = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active")
    }
  })
})

// Add CSS class for active navigation links
document.head.insertAdjacentHTML(
  "beforeend",
  `
    <style>
        nav a.active {
            color: #333;
            font-weight: 700;
        }
    </style>
`,
)

// Add subtle animation to cards when they come into view
const observeCards = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-visible")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll(".card").forEach((card) => {
    observer.observe(card)
  })
}

// Add CSS for card animations
document.head.insertAdjacentHTML(
  "beforeend",
  `
    <style>
        .card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .card-visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
`,
)

// Run the observer when the page loads
document.addEventListener("DOMContentLoaded", observeCards)

