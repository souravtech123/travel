let currentIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

function showSlide(index) {
    // Move the slides to the correct position based on the index
    slides.style.transform = `translateX(-${index * 100}%)`;

    // Update the active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    // Move to the next slide, loop back to 0 after the last slide
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function currentSlide(index) {
    // Update the current index when a dot is clicked
    currentIndex = index;
    showSlide(currentIndex);
}

// Initialize the slider to change slides automatically every 3 seconds
setInterval(nextSlide, 5000);

// Initialize the slider to show the first slide at the start
showSlide(currentIndex);
// JavaScript to handle package description display
document.addEventListener("DOMContentLoaded", function() {
    const packages = [
        {
            name: "Eternal Ladakh",
            description: " Ladakh, a mesmerizing region in northern India, is renowned for its stunning landscapes, high mountain passes, and serene beauty. Known as the Land of High Passes, also known a Starting at ₹24,999",
            price: "₹24,999",
            trip:"5 days"
        },
        {
            name: "Bombay Bliss",
            description: "Experience the bustling charm and coastal beauty of Mumbai. Starting at ₹22,500.",
            price: "₹22,500"
        },
        {
            name: "Kerala Harmony",
            description: "Relax in the serene backwaters and lush greenery of Kerala. Starting at ₹28,999.",
            price: "₹28,999"
        }
    ];

    // Selecting the package images and display area
    const packageImages = document.querySelectorAll(".tour div");
    const descriptionArea = document.createElement("div");
    descriptionArea.classList.add("description-area");
    descriptionArea.style.position = "absolute";
    descriptionArea.style.top = "100px";
    descriptionArea.style.left = "10px";
    descriptionArea.style.width = "200px";
    descriptionArea.style.padding = "15px";
    descriptionArea.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    descriptionArea.style.border = "1px solid #000";
    descriptionArea.style.borderRadius = "10px";
    descriptionArea.style.display = "none"; // Initially hidden
    document.body.appendChild(descriptionArea);

    // Function to show or hide description
    function toggleDescription(index) {
        if (descriptionArea.style.display === "block" && descriptionArea.dataset.currentIndex == index) {
            descriptionArea.style.display = "none";
        } else {
            descriptionArea.innerHTML = `
                <h3>${packages[index].name}</h3>
                <p>${packages[index].description}</p>
                <strong>Starting at: ${packages[index].price}</strong>
            `;
            descriptionArea.style.display = "block";
            descriptionArea.dataset.currentIndex = index;
        }
    }

    // Adding event listeners to each image
    packageImages.forEach((image, index) => {
        image.addEventListener("click", () => {
            toggleDescription(index);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const packages = document.querySelectorAll('.pack > div');
    const descriptionArea = document.getElementById('descriptionArea');

    // Descriptions mapped to package class names
    const descriptions = {
        cultural: `
            <h3>Tradition Trek</h3>
            <p>Experience the rich cultural heritage with guided tours of ancient temples, folk dances, and traditional cuisines.</p>
            <p><strong>Starting Price:</strong> 65999/-</p>
        `,
        adventure: `
            <h3>Thrill Seekers</h3>
            <p>Get your adrenaline pumping with outdoor activities like rafting, hiking, and paragliding.</p>
            <p><strong>Starting Price:</strong> 55999/-</p>
        `,
        couple: `
            <h3>Romance Retreat</h3>
            <p>A romantic getaway with cozy accommodations, private dining, and scenic locations.</p>
            <p><strong>Starting Price:</strong> 75000/-</p>
        `
    };

    // Loop through each package and add click event
    packages.forEach(packageElement => {
        packageElement.addEventListener('click', () => {
            const packageType = packageElement.className;

            // Set the description content based on the clicked package
            descriptionArea.innerHTML = descriptions[packageType] || "No description available.";
            descriptionArea.style.display = 'block';
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Elements for Packages, Specials, About, and Contact
    const packagesLink = document.getElementById("packagesLink");
    const specialsLink = document.getElementById("specialsLink");
    const aboutLink = document.getElementById("aboutLink");
    const contactLink = document.getElementById("contactLink");
    
    const packagesSection = document.querySelector(".packages");
    const specialsSection = document.querySelector(".specials");
    const aboutSection = document.querySelector(".about");
    const contactSection = document.querySelector(".contact");

    // Smooth scroll for Packages section
    if (packagesLink && packagesSection) {
        packagesLink.addEventListener("click", function (event) {
            event.preventDefault();
            packagesSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Smooth scroll for Specials section
    if (specialsLink && specialsSection) {
        specialsLink.addEventListener("click", function (event) {
            event.preventDefault();
            specialsSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Scroll to About section
    if (aboutLink && aboutSection) {
        aboutLink.addEventListener("click", function (event) {
            event.preventDefault();
            aboutSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Scroll to Contact section
    if (contactLink && contactSection) {
        contactLink.addEventListener("click", function (event) {
            event.preventDefault();
            contactSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
