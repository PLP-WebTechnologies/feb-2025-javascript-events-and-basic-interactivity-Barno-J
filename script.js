// Wait for the DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Function to change text content dynamically
    function changeText() {
        const heading = document.querySelector('header h1');
        const originalText = heading.textContent;
        const newText = "Trying JavaScript Interactivity!";
        
        heading.textContent = heading.textContent === originalText ? newText : originalText;
    }
    
    // Function to modify CSS styles
    function changeStyles() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            // Toggle background color
            if (section.style.backgroundColor === 'rgb(245, 245, 245)') {
                section.style.backgroundColor = 'white';
            } else {
                section.style.backgroundColor = '#f5f5f5';
            }
            
            // Toggle border color
            if (section.id === 'Section-One') {
                section.style.borderLeft = section.style.borderLeft === '4px solid rgb(52, 152, 219)' ? 
                    '4px solid #e74c3c' : '4px solid rgb(52, 152, 219)';
            } else if (section.id === 'Section-Two') {
                section.style.borderLeft = section.style.borderLeft === '4px solid rgb(231, 76, 60)' ? 
                    '4px solid #3498db' : '4px solid rgb(231, 76, 60)';
            }
        });
    }
    
    // Function to add or remove elements
    function toggleElement() {
        const elementId = 'notification';
        const existing = document.getElementById(elementId);
        
        if (existing) {
            // Remove element if it exists
            existing.remove();
        } else {
            // Create and add new element if it doesn't exist
            const notification = document.createElement('div');
            notification.id = elementId;
            notification.className = 'notification';
            notification.textContent = 'It Gets Better!';
            
            // Style the notification
            notification.style.backgroundColor = '#2ecc71';
            notification.style.color = 'white';
            notification.style.padding = '15px';
            notification.style.borderRadius = '5px';
            notification.style.marginBottom = '20px';
            notification.style.textAlign = 'center';
            notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            // Insert at the top of main content
            const mainContent = document.querySelector('.main-content');
            mainContent.insertBefore(notification, mainContent.firstChild);
        }
    }
    
    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());
        
        // Create a success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = `Thank you, ${formValues.name}! Your registration was successful.`;
        successMessage.style.backgroundColor = '#2ecc71';
        successMessage.style.color = 'white';
        successMessage.style.padding = '15px';
        successMessage.style.borderRadius = '5px';
        successMessage.style.marginTop = '20px';
        successMessage.style.textAlign = 'center';
        
        // Insert after the form
        form.insertAdjacentElement('afterend', successMessage);
        
        // Reset the form
        form.reset();
        
        // Remove the message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
    
    // Create buttons for our JavaScript functions
    function createFunctionButtons() {
        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'js-button-container';
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'center';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.margin = '20px 0';
        
        // Create button for changing text
        const textButton = document.createElement('button');
        textButton.textContent = 'Change Heading Text';
        textButton.addEventListener('click', changeText);
        
        // Create button for changing styles
        const styleButton = document.createElement('button');
        styleButton.textContent = 'Section Styles';
        styleButton.addEventListener('click', changeStyles);
        
        // Create button for toggling elements
        const elementButton = document.createElement('button');
        elementButton.textContent = 'Notification';
        elementButton.addEventListener('click', toggleElement);
        
        // Add buttons to container
        buttonContainer.appendChild(textButton);
        buttonContainer.appendChild(styleButton);
        buttonContainer.appendChild(elementButton);
        
        // Insert button container after header
        const header = document.querySelector('header');
        header.insertAdjacentElement('afterend', buttonContainer);
    }
    
    // Add event listener to form
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Add highlight effect to table rows
    const tableRows = document.querySelectorAll('table tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f8ff';
        });
        
        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Fix the broken link in #Section-Two
    const sectionTwoLink = document.querySelector('a[href="#Section-Two"]');
    if (sectionTwoLink) {
        sectionTwoLink.href = '#Section-Two';
    }
    
    // Create buttons to demonstrate JavaScript functions
    createFunctionButtons(); 

    // 1. Change Text Content
document.getElementById('changeTextBtn').addEventListener('click', function () {
    document.querySelector('header h1').textContent = "Updated: HTML & JS in Action!";
});

// 2. Change Image Source on Button Click
const images = [
    "https://tinyurl.com/mvmn97ye", // original image
    "https://tinyurl.com/4ef3j5hz", // new image 1
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-sleeping-baby-csa-images.jpg"  // new image 2
];

let currentImageIndex = 0;

document.getElementById('nextImage').addEventListener('click', function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('gallery-img').src = images[currentImageIndex];
});

// 3. Form Validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let errorMessages = [];

    // Name validation
    if (name === "") {
        errorMessages.push("Name is required.");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessages.push("Please enter a valid email address.");
    }

    // Message validation
    if (message.length < 10) {
        errorMessages.push("Message must be at least 10 characters.");
    }

    // Show errors or allow submission
    if (errorMessages.length > 0) {
        event.preventDefault(); // Stop form submission
        alert(errorMessages.join("\n"));
    }
});


});