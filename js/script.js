

document.addEventListener('DOMContentLoaded', function () {
    const serviceImages = document.querySelectorAll('.service-image');


    // Add click event listeners to all images
    serviceImages.forEach((image) => {
        image.addEventListener('click', () => {
            // Reset the appearance of all images
            serviceImages.forEach((img) => {
                img.style.border = 'none';
                img.style.padding = '0'; // Reset padding
            });

            // Highlight the clicked image
            image.style.border = '2px solid black';
            image.style.padding = '3px'; // Add padding around the image
        });
    });
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 70, // Adjust scrolling position if needed
            behavior: 'smooth'
        });
    }
}


// Add event listeners to the service list items to trigger scrolling
const serviceImages = document.querySelectorAll('.service-image');

serviceImages.forEach((image) => {
    image.addEventListener('click', () => {
        const altText = image.getAttribute('alt');
        if (altText === 'Service Icon') {
            scrollToSection('service-section');
        } else if (altText === 'Repair & Gas Refill Icon') {
            scrollToSection('repair-section');
        } else if (altText === 'Install & Uninstall Icon') {
            scrollToSection('install-section');
        }
    });
});







